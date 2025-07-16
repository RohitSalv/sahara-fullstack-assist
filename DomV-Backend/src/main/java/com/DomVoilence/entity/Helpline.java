package com.DomVoilence.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Helpline {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String phoneNumber;
    private String hours;
    private String description;
    
    public Helpline() {
		// TODO Auto-generated constructor stub
	}
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getHours() {
		return hours;
	}
	public void setHours(String hours) {
		this.hours = hours;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Helpline(Long id, String name, String phoneNumber, String hours, String description) {
		super();
		this.id = id;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.hours = hours;
		this.description = description;
	}
	@Override
	public String toString() {
		return "Helpline [id=" + id + ", name=" + name + ", phoneNumber=" + phoneNumber + ", hours=" + hours
				+ ", description=" + description + "]";
	}
    
    

}
