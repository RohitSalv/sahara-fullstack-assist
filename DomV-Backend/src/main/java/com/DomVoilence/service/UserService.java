package com.DomVoilence.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DomVoilence.dao.UserDao;
import com.DomVoilence.entity.User;
import com.DomVoilence.model.UserLogin;

@Service
public class UserService {
	@Autowired
	UserDao userDao;
	
	public String registerUser(User user) {
		return userDao.registerUser(user);
	}

	public User loginUser(UserLogin request) {
		// TODO Auto-generated method stub
		return userDao.loginUser(request);
	}
	public List<User> getAllUsers() {
	    return userDao.getAllUsers();
	}

	@Transactional
	public void deleteUser(String mob) {
	    userDao.deleteUser(mob);
	}

}
