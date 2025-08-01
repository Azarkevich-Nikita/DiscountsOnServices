package com.example.DiscountsOnServices.repository;

import com.example.DiscountsOnServices.dto.UserRegisterRequest;
import com.example.DiscountsOnServices.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);

    User save(UserRegisterRequest user);

    Optional<User> findByEmail(String email);
}
