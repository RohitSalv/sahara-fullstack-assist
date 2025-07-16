package com.DomVoilence.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SupportGroup {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String schedule;
    private String location;
    private String onlineOption;
    private String description;
    
    SupportGroup(){
    	
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

	public String getSchedule() {
		return schedule;
	}

	public void setSchedule(String schedule) {
		this.schedule = schedule;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getOnlineOption() {
		return onlineOption;
	}

	public void setOnlineOption(String onlineOption) {
		this.onlineOption = onlineOption;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public SupportGroup(Long id, String name, String schedule, String location, String onlineOption,
			String description) {
		super();
		this.id = id;
		this.name = name;
		this.schedule = schedule;
		this.location = location;
		this.onlineOption = onlineOption;
		this.description = description;
	}

	@Override
	public String toString() {
		return "SupportGroup [id=" + id + ", name=" + name + ", schedule=" + schedule + ", location=" + location
				+ ", onlineOption=" + onlineOption + ", description=" + description + "]";
	}
    
}
