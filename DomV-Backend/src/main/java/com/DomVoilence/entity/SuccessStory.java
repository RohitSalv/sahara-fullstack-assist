package com.DomVoilence.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "success_story")
public class SuccessStory {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(length = 3000)
    private String content;
    private String authorName;
    private LocalDateTime datePosted;
    private Boolean approved;
    @Column(length = 500)
    private String link; // new optional link field

    
    SuccessStory(){}

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

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public LocalDateTime getDatePosted() {
		return datePosted;
	}

	public void setDatePosted(LocalDateTime datePosted) {
		this.datePosted = datePosted;
	}

	public Boolean getApproved() {
		return approved;
	}

	public void setApproved(Boolean approved) {
		this.approved = approved;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public SuccessStory(Long id, String title, String content, String authorName, LocalDateTime datePosted,
			Boolean approved, String link) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.authorName = authorName;
		this.datePosted = datePosted;
		this.approved = approved;
		this.link = link;
	}

	@Override
	public String toString() {
		return "SuccessStory [id=" + id + ", title=" + title + ", content=" + content + ", authorName=" + authorName
				+ ", datePosted=" + datePosted + ", approved=" + approved + ", link=" + link + "]";
	}

	
    

}
