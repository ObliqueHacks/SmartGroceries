package com.example.demo.registrationAndLogin;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;



@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private JwtUtil tokenHandler = new JwtUtil();

    public User registerUser(UserDTO userDTO) throws Exception {
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
        Optional<User> optionalUser = userRepository.findByUsername(userDTO.getUsername());

        // Check if user is present
        if (optionalUser.isEmpty()) {
            return ""; // Return empty string if user is not found
        }

        // Cast Optional to User
        User user = optionalUser.get();

        System.out.println(userDTO.getUsername());
        System.out.println(userDTO.getPassword());
        System.out.println(user.getUsername());

        // Check if the password matches
        if (!passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
            return "";
        }
        return tokenHandler.generateToken(user.getUsername());
    } 
    
}
