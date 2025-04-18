package com.LoginRegister.example.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LoginRegister.example.entity.Users;
import com.LoginRegister.example.repository.UsersRepo;
import com.LoginRegister.example.requests.LoginRequest;

@Service
public class UserService {

	@Autowired
	private UsersRepo usersRepo;

	public Users addUser(Users user) {
		return usersRepo.save(user);
	}

	public Boolean loginUser(LoginRequest loginRequest) {
		Users user = usersRepo.findByEmail(loginRequest.getEmail());

		if (user == null) {
			return false;
		}

		return user.getPassword().equals(loginRequest.getPassword());

		}

	}
