package com.DomVoilence.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DomVoilence.dao.SuccessStoryDao;
import com.DomVoilence.entity.SuccessStory;

@Service
public class SuccessStoryService {
	 @Autowired
	    private SuccessStoryDao dao;

	    public SuccessStory saveStory(SuccessStory story) {
	        return dao.saveStory(story);
	    }

	    public List<SuccessStory> getAllStories() {
	        return dao.getAllStories();
	    }

	    public List<SuccessStory> getApprovedStories() {
	        return dao.getApprovedStories();
	    }

	    public SuccessStory getStoryById(Long id) {
	        return dao.getStoryById(id);
	    }

	    public void deleteStory(Long id) {
	        dao.deleteStory(id);
	    }

	    public SuccessStory approveStory(Long id) {
	        return dao.approveStory(id);
	    }

}
