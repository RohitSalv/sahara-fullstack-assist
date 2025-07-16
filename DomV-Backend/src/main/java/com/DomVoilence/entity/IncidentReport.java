package com.DomVoilence.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class IncidentReport {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String incidentType;
    private LocalDate incidentDate;
    private String incidentLocation;

    @Column(length = 2000)
    private String description;

    private String contactName;
    private String contactMethod;
    private String contactEmail;
    private String contactPhone;
    private boolean mediaConsent;
    private boolean anonymous;

    // New: OneToMany relation to media
    @OneToMany(mappedBy = "incidentReport", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<IncidentMedia> mediaFiles = new ArrayList<>();

    
    IncidentReport(){
    	
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIncidentType() {
		return incidentType;
	}

	public void setIncidentType(String incidentType) {
		this.incidentType = incidentType;
	}

	public LocalDate getIncidentDate() {
		return incidentDate;
	}

	public void setIncidentDate(LocalDate incidentDate) {
		this.incidentDate = incidentDate;
	}

	public String getIncidentLocation() {
		return incidentLocation;
	}

	public void setIncidentLocation(String incidentLocation) {
		this.incidentLocation = incidentLocation;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getContactName() {
		return contactName;
	}

	public void setContactName(String contactName) {
		this.contactName = contactName;
	}

	public String getContactMethod() {
		return contactMethod;
	}

	public void setContactMethod(String contactMethod) {
		this.contactMethod = contactMethod;
	}

	public String getContactEmail() {
		return contactEmail;
	}

	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}

	public String getContactPhone() {
		return contactPhone;
	}

	public void setContactPhone(String contactPhone) {
		this.contactPhone = contactPhone;
	}

	public boolean isMediaConsent() {
		return mediaConsent;
	}

	public void setMediaConsent(boolean mediaConsent) {
		this.mediaConsent = mediaConsent;
	}

	public boolean isAnonymous() {
		return anonymous;
	}

	public void setAnonymous(boolean anonymous) {
		this.anonymous = anonymous;
	}

	public List<IncidentMedia> getMediaFiles() {
		return mediaFiles;
	}

	public void setMediaFiles(List<IncidentMedia> mediaFiles) {
		this.mediaFiles = mediaFiles;
	}

	public IncidentReport(Long id, String incidentType, LocalDate incidentDate, String incidentLocation,
			String description, String contactName, String contactMethod, String contactEmail, String contactPhone,
			boolean mediaConsent, boolean anonymous, List<IncidentMedia> mediaFiles) {
		super();
		this.id = id;
		this.incidentType = incidentType;
		this.incidentDate = incidentDate;
		this.incidentLocation = incidentLocation;
		this.description = description;
		this.contactName = contactName;
		this.contactMethod = contactMethod;
		this.contactEmail = contactEmail;
		this.contactPhone = contactPhone;
		this.mediaConsent = mediaConsent;
		this.anonymous = anonymous;
		this.mediaFiles = mediaFiles;
	}

	@Override
	public String toString() {
		return "IncidentReport [id=" + id + ", incidentType=" + incidentType + ", incidentDate=" + incidentDate
				+ ", incidentLocation=" + incidentLocation + ", description=" + description + ", contactName="
				+ contactName + ", contactMethod=" + contactMethod + ", contactEmail=" + contactEmail
				+ ", contactPhone=" + contactPhone + ", mediaConsent=" + mediaConsent + ", anonymous=" + anonymous
				+ ", mediaFiles=" + mediaFiles + "]";
	}
    
    
}
