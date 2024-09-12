package org.skytel.beanhub.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class InvalidCredentialsException extends ResponseStatusException {

    public InvalidCredentialsException(String reason) {
        super(HttpStatus.UNAUTHORIZED, reason);
    }
}
