package com.LoginRegister.example.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.LoginRegister.example.entity.Users;
import com.LoginRegister.example.requests.LoginRequest;
import com.LoginRegister.example.service.UserService;

@RestController
public class UsersController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/addUser") 
	@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8082"},
			allowedHeaders = "*",
			allowCredentials = "true")
	public Users addUser(@RequestBody Users user) {
		return userService.addUser ( user );
	}

			@PostMapping("/loginUser")
			@CrossOrigin(origins = "http://localhost:8082",
					allowedHeaders = "*",
					methods = {RequestMethod.POST}) // Explicitly allow POST
			public Boolean loginUser(@RequestBody LoginRequest loginRequest) {
				return userService.loginUser(loginRequest);
			}
		}
