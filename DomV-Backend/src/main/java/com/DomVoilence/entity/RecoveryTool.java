package com.DomVoilence.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RecoveryTool {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String iconUrl;
    private String buttonText;
    private String link;
    
    RecoveryTool(){
    	
    }
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getIconUrl() {
		return iconUrl;
	}
	public void setIconUrl(String iconUrl) {
		this.iconUrl = iconUrl;
	}
	public String getButtonText() {
		return buttonText;
	}
	public void setButtonText(String buttonText) {
		this.buttonText = buttonText;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public RecoveryTool(Long id, String title, String description, String iconUrl, String buttonText, String link) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.iconUrl = iconUrl;
		this.buttonText = buttonText;
		this.link = link;
	}
	@Override
	public String toString() {
		return "RecoveryTool [id=" + id + ", title=" + title + ", description=" + description + ", iconUrl=" + iconUrl
				+ ", buttonText=" + buttonText + ", link=" + link + "]";
	}
    
    

}
