package com.DomVoilence.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.DomVoilence.entity.SuccessStory;

@Repository
@Transactional
public class SuccessStoryDao {
	 @PersistenceContext
	    private EntityManager entityManager;

	    public SuccessStory saveStory(SuccessStory story) {
	        entityManager.persist(story);
	        return story;
	    }

	    public List<SuccessStory> getAllStories() {
	        return entityManager.createQuery("from SuccessStory", SuccessStory.class).getResultList();
	    }

	    public List<SuccessStory> getApprovedStories() {
	        return entityManager.createQuery("from SuccessStory where approved=true", SuccessStory.class).getResultList();
	    }

	    public SuccessStory getStoryById(Long id) {
	        return entityManager.find(SuccessStory.class, id);
	    }

	    public void deleteStory(Long id) {
	        SuccessStory story = getStoryById(id);
	        if (story != null) {
	            entityManager.remove(story);
	        }
	    }

	    public SuccessStory approveStory(Long id) {
	        SuccessStory story = getStoryById(id);
	        if (story != null) {
	            story.setApproved(true);
	            entityManager.merge(story);
	        }
	        return story;
	    }

}
