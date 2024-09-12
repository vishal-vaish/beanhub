package org.skytel.beanhub.user;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.Set;

@Entity
@Table(name = "privileges")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Privilege {
    @Id
    @UuidGenerator
    private String id;

    @Enumerated(EnumType.STRING)
    @Column(unique = true, nullable = false)
    private EPrivilege name;

    @ManyToMany(mappedBy = "privileges", fetch = FetchType.EAGER)
    private Set<Role> roles;
}