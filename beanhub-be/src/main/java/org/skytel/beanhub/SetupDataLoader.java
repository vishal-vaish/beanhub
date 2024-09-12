package org.skytel.beanhub;

import jakarta.transaction.Transactional;
import org.skytel.beanhub.user.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;


@Component
@Profile("!test")
public class SetupDataLoader implements ApplicationListener<ApplicationReadyEvent> {

    private static final Logger logger = LoggerFactory.getLogger(SetupDataLoader.class);

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PrivilegeRepository privilegeRepository;
    private final PasswordEncoder passwordEncoder;
    private final Environment env;

    public SetupDataLoader(
            UserRepository userRepository,
            RoleRepository roleRepository,
            PrivilegeRepository privilegeRepository,
            PasswordEncoder passwordEncoder,
            Environment env
    ) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.privilegeRepository = privilegeRepository;
        this.passwordEncoder = passwordEncoder;
        this.env = env;
    }

    @Override
    @Transactional
    public void onApplicationEvent(ApplicationReadyEvent event) {
        if (alreadyInitialized()) {
            logger.info(("Data already initialized, skipping setup."));
            return;
        }

        logger.info("Starting data initialization...");

        Map<EPrivilege, Privilege> privileges = createPrivileges();
        Map<ERole, Role> roles = createRoles(privileges);
        createDefaultUsers(roles);
    }

    private boolean alreadyInitialized() {
        return this.userRepository.count() > 0
                && this.roleRepository.count() > 0
                && this.privilegeRepository.count() > 0;
    }

    private Map<EPrivilege, Privilege> createPrivileges() {
        return Arrays.stream(EPrivilege.values())
                .collect(Collectors.toMap(
                        p -> p,
                        this::getOrCreatePrivilege
                ));
    }

    private Privilege getOrCreatePrivilege(EPrivilege ePrivilege) {
        return this.privilegeRepository.findByName(ePrivilege)
                .orElseGet(() -> {
                    logger.debug("Creating new privilege: {}", ePrivilege);
                    return this.privilegeRepository.save(Privilege.builder().name(ePrivilege).build());
                });
    }

    private Map<ERole, Role> createRoles(Map<EPrivilege, Privilege> privileges) {
        Map<ERole, Set<EPrivilege>> rolePrivileges = Map.of(
                ERole.ROLE_ADMIN, Set.of(EPrivilege.USER_READ, EPrivilege.CAFE_READ, EPrivilege.CAFE_WRITE),
                ERole.ROLE_SUPER_ADMIN, Set.of(EPrivilege.USER_READ, EPrivilege.USER_WRITE, EPrivilege.CAFE_READ, EPrivilege.CAFE_WRITE)
        );

        return rolePrivileges.entrySet().stream()
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        entry -> getOrCreateRole(entry.getKey(), entry.getValue(), privileges)
                ));
    }

    private Role getOrCreateRole(ERole roleEnum, Set<EPrivilege> privilegeEnums, Map<EPrivilege, Privilege> privileges) {
        return this.roleRepository.findByName(roleEnum)
                .map(role -> {
                    logger.debug("Updating existing role: {}", roleEnum);
                    role.setPrivileges(privilegeEnums.stream().map(privileges::get).collect(Collectors.toSet()));
                    return this.roleRepository.save(role);
                })
                .orElseGet(() -> {
                    logger.debug("Creating new role: {}", roleEnum);
                    return roleRepository.save(Role.builder()
                            .name(roleEnum)
                            .privileges(privilegeEnums.stream().map(privileges::get).collect(Collectors.toSet()))
                            .build());
                });
    }

    private void createDefaultUsers(Map<ERole, Role> roles) {
        createUserIfNotExists(
                env.getProperty("app.default.admin.email", "admin@beanhub.com"),
                env.getProperty("app.default.admin.username", "admin"),
                env.getProperty("app.default.admin.password", "changeme"),
                Set.of(roles.get(ERole.ROLE_ADMIN))
        );

        createUserIfNotExists(
                env.getProperty("app.default.superadmin.email", "superadmin@beanhub.com"),
                env.getProperty("app.default.superadmin.username", "superadmin"),
                env.getProperty("app.default.superadmin.password", "changeme"),
                Set.of(roles.get(ERole.ROLE_SUPER_ADMIN))
        );
    }

    private void createUserIfNotExists(String email, String username, String password, Set<Role> roles) {
        this.userRepository.findUserByUsername(username)
                .ifPresentOrElse(
                        existingUser -> {
                            logger.debug("Updating existing user: {}", email);
                            existingUser.setRoles(roles);
                            this.userRepository.save(existingUser);
                        },
                        () -> {
                            logger.debug("Creating new user: {}", email);
                            this.userRepository.save(User.builder()
                                    .email(email)
                                    .username(username)
                                    .password(passwordEncoder.encode(password))
                                    .roles(roles)
                                    .build());
                        }
                );
    }
}
