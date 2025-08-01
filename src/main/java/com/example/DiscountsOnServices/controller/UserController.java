package com.example.DiscountsOnServices.controller;

import com.example.DiscountsOnServices.dto.UserLoginRequest;
import com.example.DiscountsOnServices.dto.UserRegisterRequest;
import com.example.DiscountsOnServices.entity.User;
import com.example.DiscountsOnServices.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
@AllArgsConstructor
public class UserController {

    private UserService userService;

    @GetMapping
    public List<User> getUsers() {
        return userService.findAll();
    }

    @PostMapping("/login")
    public String login(@RequestBody UserLoginRequest userLoginRequest) {
        return userService.login(userLoginRequest);
    }

    @PostMapping("/register")
    public User createUser(@RequestBody UserRegisterRequest userRegisterRequest) {
        return userService.register(userRegisterRequest);
    }
}
