package com.example.DiscountsOnServices.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Builder
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id_seq")
    @SequenceGenerator(name = "user_id_seq", sequenceName = "user_id_seq", allocationSize = 1)
    private Integer id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    public User() {}

    public User(Integer id, String username, String email, String passwordHash) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = passwordHash;
    }

}
