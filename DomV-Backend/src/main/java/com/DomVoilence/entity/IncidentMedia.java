package com.DomVoilence.entity;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class IncidentMedia {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fileName;
    private String fileType;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] data;

    // Relation to report
    @ManyToOne
    @JoinColumn(name = "report_id")
    @JsonBackReference
    private IncidentReport incidentReport;

    
    public IncidentMedia(){}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public IncidentReport getIncidentReport() {
		return incidentReport;
	}

	public void setIncidentReport(IncidentReport incidentReport) {
		this.incidentReport = incidentReport;
	}

	public IncidentMedia(Long id, String fileName, String fileType, byte[] data, IncidentReport incidentReport) {
		super();
		this.id = id;
		this.fileName = fileName;
		this.fileType = fileType;
		this.data = data;
		this.incidentReport = incidentReport;
	}

	@Override
	public String toString() {
		return "IncidentMedia [id=" + id + ", fileName=" + fileName + ", fileType=" + fileType + ", data="
				+ Arrays.toString(data) + ", incidentReport=" + incidentReport + "]";
	}
    
    

}
