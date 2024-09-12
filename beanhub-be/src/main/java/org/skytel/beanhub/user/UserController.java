package org.skytel.beanhub.user;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(Principal principal) {
        return ResponseEntity.ok(this.userService.fetchCurrentUser(principal));
    }

    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody CreateUserRequest createUserRequest) {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.userService.createUser(createUserRequest));
    }

}
