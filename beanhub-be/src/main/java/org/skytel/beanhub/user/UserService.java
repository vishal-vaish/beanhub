package org.skytel.beanhub.user;

import org.skytel.beanhub.exception.InvalidCredentialsException;
import org.skytel.beanhub.exception.InvalidPasswordException;
import org.skytel.beanhub.exception.RoleNotFoundException;
import org.skytel.beanhub.exception.UsernameAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PreAuthorize("hasAuthority('SCOPE_USER_READ')")
    public User fetchCurrentUser(Principal principal) {
        var username = principal.getName();
        return this.userRepository.findUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("Username not found: %s", username)));
    }

    @PreAuthorize("hasAuthority('SCOPE_USER_WRITE')")
    @Transactional
    public User createUser(CreateUserRequest createUserRequest) {
        if (this.userRepository.findUserByUsername(createUserRequest.username()).isPresent()) {
            throw new UsernameAlreadyExistsException(String.format("Username %s already exists", createUserRequest.username()));
        }

        var user = User.builder()
                .username(createUserRequest.username())
                .password(this.passwordEncoder.encode(createUserRequest.username()))
                .build();

        var adminRole = this.roleRepository.findByName(ERole.ROLE_ADMIN)
                .orElseThrow(() -> new RoleNotFoundException("ROLE_ADMIN not found"));

        user.setRoles(Set.of(adminRole));
        return this.userRepository.save(user);
    }

    @PreAuthorize("hasAuthority('SCOPE_USER_READ')")
    @Transactional
    public boolean resetPassword(Principal principal, String oldPassword, String newPassword) {
        return Optional.ofNullable(fetchCurrentUser(principal))
                .filter(user -> passwordEncoder.matches(oldPassword, user.getPassword()))
                .map(user -> {
                    if (passwordEncoder.matches(newPassword, user.getPassword())) {
                        throw new InvalidPasswordException("New password must be different from the old password");
                    }
                    user.setPassword(passwordEncoder.encode(newPassword));
                    userRepository.save(user);
                    return true;
                })
                .orElseThrow(() -> new InvalidCredentialsException("Old password is incorrect"));
    }

}
