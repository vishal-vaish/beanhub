package org.skytel.beanhub.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PrivilegeRepository extends JpaRepository<Privilege, String> {
    Optional<Privilege> findByName(EPrivilege ePrivilege);
}