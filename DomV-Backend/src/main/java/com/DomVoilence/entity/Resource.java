package com.DomVoilence.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Resource {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String title;
    private String description;
    private String contactNumber;
    private String address;
    private String websiteUrl;
    private String imageUrl;
    private String documentUrl;
    private String videoUrl;

    @ManyToOne
    @JoinColumn(name = "subcategory_id")
    private Subcategory subcategory;

    Resource(){
    	
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

	public Subcategory getSubcategory() {
		return subcategory;
	}

	public void setSubcategory(Subcategory subcategory) {
		this.subcategory = subcategory;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getWebsiteUrl() {
		return websiteUrl;
	}

	public void setWebsiteUrl(String websiteUrl) {
		this.websiteUrl = websiteUrl;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getDocumentUrl() {
		return documentUrl;
	}

	public void setDocumentUrl(String documentUrl) {
		this.documentUrl = documentUrl;
	}

	public String getVideoUrl() {
		return videoUrl;
	}

	public void setVideoUrl(String videoUrl) {
		this.videoUrl = videoUrl;
	}

	public Resource(Long id, String title, String description, String contactNumber, String address, String websiteUrl,
			String imageUrl, String documentUrl, String videoUrl, Subcategory subcategory) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.contactNumber = contactNumber;
		this.address = address;
		this.websiteUrl = websiteUrl;
		this.imageUrl = imageUrl;
		this.documentUrl = documentUrl;
		this.videoUrl = videoUrl;
		this.subcategory = subcategory;
	}

	@Override
	public String toString() {
		return "Resource [id=" + id + ", title=" + title + ", description=" + description + ", contactNumber="
				+ contactNumber + ", address=" + address + ", websiteUrl=" + websiteUrl + ", imageUrl=" + imageUrl
				+ ", documentUrl=" + documentUrl + ", videoUrl=" + videoUrl + ", subcategory=" + subcategory + "]";
	}

	
    
    

}
