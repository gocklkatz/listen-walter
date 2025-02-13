package io.gocklkatz.thebackend.controller;

import io.gocklkatz.thebackend.model.Login;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Login login) {
        System.out.println(login);

        if(login.getLogin().equals("a") && login.getPassword().equals("b")) {
            System.out.println("Login successful");
            return new ResponseEntity<>("passt", HttpStatus.OK);
        } else {
            System.out.println("Login failed");
            return new ResponseEntity<>("passt ned", HttpStatus.UNAUTHORIZED);
        }
    }
}
