package com.example.demo.registrationAndLogin;

import java.util.Optional;

import jakarta.validation.constraints.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;



@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User registerUser(UserDTO userDTO) throws Exception {

        if (userDTO.getName() == null || userDTO.getName().trim().isEmpty()) {
            throw new Exception("Provide a Name");
        }


        // Check if the username or email already exists

        Optional<User> existingUserByUsername = userRepository.findByUsername(userDTO.getUsername());

        if (existingUserByUsername.isPresent()) {
            throw new Exception("Username already exists!");
        }

        String encodedPassword = passwordEncoder.encode(userDTO.getPassword());

        User newUser = new User(userDTO.getUsername(), encodedPassword, userDTO.getName());
        return userRepository.save(newUser);
    }

    public String loginUser(UserDTO userDTO) throws Exception {
        // Find user by username
        Optional<User> user = userRepository.findByUsername(userDTO.getUsername());

        // Check if the password matches
        if (!passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
            return "";
        }


    }

    
}
