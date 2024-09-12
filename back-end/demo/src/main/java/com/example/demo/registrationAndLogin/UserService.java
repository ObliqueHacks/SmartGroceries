package com.example.demo.registrationAndLogin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User registerUser(UserDTO userDTO) throws Exception {
        // Check if the username or email already exists
        Optional<User> existingUserByUsername = userRepository.findByUsername(userDTO.getUsername());

        if (existingUserByUsername.isPresent()) {
            throw new Exception("Username already exists!");
        }

        // Encrypt the password
        String encodedPassword = passwordEncoder.encode(userDTO.getPassword());

        // Create a new User object and save it
        User newUser = new User(userDTO.getUsername(), encodedPassword, userDTO.getName());
        return userRepository.save(newUser);
    }
}
