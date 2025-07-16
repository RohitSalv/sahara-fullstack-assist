package com.DomVoilence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DomVoilence.entity.User;
import com.DomVoilence.model.UserLogin;
import com.DomVoilence.service.UserService;


@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:4200")
public class UserController {
	@Autowired
	UserService userService;
	
	@PostMapping("/register-user")
	public String registerUser(@RequestBody User user) {
		return userService.registerUser(user);	
	}
	
	
	@PostMapping("/login-user")
	public User loginUser(@RequestBody UserLogin request) {
		User user = userService.loginUser(request);
		if(user!=null) {
			return user;
		}else {
			return null;
		}
	}
	
	@GetMapping("/users")
	public List<User> getUsers() {
	    return userService.getAllUsers();
	}

	@DeleteMapping("/users/{mob}")
	public String deleteUser(@PathVariable String mob) {
	    userService.deleteUser(mob);
	    return "User deleted successfully.";
	}


}
