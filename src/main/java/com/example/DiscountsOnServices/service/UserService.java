package com.example.DiscountsOnServices.service;

import com.example.DiscountsOnServices.dto.UserLoginRequest;
import com.example.DiscountsOnServices.dto.UserRegisterRequest;
import com.example.DiscountsOnServices.entity.User;
import com.example.DiscountsOnServices.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public String login(UserLoginRequest request) {
        return userRepository.findByEmail(request.getEmail())
                .map(user -> passwordEncoder.matches(request.getPassword(), user.getPassword())
                ? "Login succesful for " + user.getEmail()
                : "Invalid password")
                .orElse("Invalid email or password " + request.getPassword() + " - " + request.getEmail());
    }

    public User register(UserRegisterRequest userRegisterInfo) {
        User user = new User();
        user.setUsername(userRegisterInfo.getUsername());
        user.setEmail(userRegisterInfo.getEmail());
        user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
        return userRepository.save(user);
    }
}
