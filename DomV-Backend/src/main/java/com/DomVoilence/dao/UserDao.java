package com.DomVoilence.dao;


import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.DomVoilence.entity.User;
import com.DomVoilence.model.UserLogin;

@Repository
public class UserDao {
	@Autowired
	SessionFactory sessionFactory;

	public String registerUser(User user) {
		// TODO Auto-generated method stub
		String msg = null;
		try {
			Session session = sessionFactory.openSession();
			session.save(user);
			Transaction transaction = session.beginTransaction();
			transaction.commit();
			msg = "registered";
			session.close();
		}catch (Exception e) {
			// TODO: handle exception
			msg = null;
			e.printStackTrace();
		}
		return msg;
	}

	public User loginUser(UserLogin request) {
		// TODO Auto-generated method stub
		Session session = null;
		User user = null;
		try {
			session = sessionFactory.openSession();
			user = session.get(User.class, request.getMob());
			if (user != null) {
				if (user.getPassword().equals(request.getPassword())) {
					return user;
				}
			} else {
				return null;
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public List<User> getAllUsers() {
	    Session session = sessionFactory.openSession();
	    List<User> users = session.createQuery("FROM User", User.class).getResultList();
	    session.close();
	    return users;
	}

	@Transactional
	public void deleteUser(String mob) {
	    Session session = sessionFactory.getCurrentSession();
	    User user = session.get(User.class, mob);
	    if (user != null) {
	        session.delete(user);
	    } else {
	        throw new IllegalArgumentException("User not found.");
	    }
	}

}
