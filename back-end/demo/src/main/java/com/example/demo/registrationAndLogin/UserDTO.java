package com.example.demo.registrationAndLogin;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserDTO {
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;

    @Size(min = 3, max = 20) // Remove @NotBlank to allow blank for name
    private String name;

    @NotBlank
    @Size(min = 6, max = 100)
    private String password;

    public UserDTO() {}

    public UserDTO(String username, String password, String name) {
        this.username = username;
        this.password = password;
        this.name = name;
    }

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
