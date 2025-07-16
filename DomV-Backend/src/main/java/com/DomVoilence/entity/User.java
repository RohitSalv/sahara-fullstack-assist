package com.DomVoilence.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	@Id
    private String mob;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String name;
	private int age;
	private Gender gender;
	private String trust1;
	private String trust2;
	private String password;
	private Role role;
	private MaritalStatus maritalStatus;
	
	public enum Gender{
		MALE,FEMALE,OTHER
	}
	public enum MaritalStatus{
		SINGLE,MARRIED,DIVORCED,WIDOWED
	}
	public enum Role{
		ADMIN,USER
	}
	
	User(){
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMob() {
		return mob;
	}

	public void setMob(String mob) {
		this.mob = mob;
	}

	public User(String mob, String name, int age, Gender gender, String trust1, String trust2, String password,
			Role role, MaritalStatus maritalStatus) {
		super();
		this.mob = mob;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.trust1 = trust1;
		this.trust2 = trust2;
		this.password = password;
		this.role = role;
		this.maritalStatus = maritalStatus;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getTrust1() {
		return trust1;
	}

	public void setTrust1(String trust1) {
		this.trust1 = trust1;
	}

	public String getTrust2() {
		return trust2;
	}

	public void setTrust2(String trust2) {
		this.trust2 = trust2;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public MaritalStatus getMaritalStatus() {
		return maritalStatus;
	}

	public void setMaritalStatus(MaritalStatus maritalStatus) {
		this.maritalStatus = maritalStatus;
	}

	@Override
	public String toString() {
		return "User [mob=" + mob + ", name=" + name + ", age=" + age + ", gender=" + gender + ", trust1=" + trust1
				+ ", trust2=" + trust2 + ", password=" + password + ", role=" + role + ", maritalStatus="
				+ maritalStatus + "]";
	}

		
}
