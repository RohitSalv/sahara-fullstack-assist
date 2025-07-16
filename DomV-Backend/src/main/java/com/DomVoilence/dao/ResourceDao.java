package com.DomVoilence.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.DomVoilence.entity.Resource;

@Repository
public class ResourceDao {
	 @PersistenceContext
	    private EntityManager entityManager;
	 
	 @Transactional
	 public void saveResource(Resource resource) {
	        entityManager.persist(resource);
	    }

	 public List<Resource> getResourcesBySubcategoryId(Long subcategoryId) {
	        return entityManager.createQuery("FROM Resource r WHERE r.subcategory.id = :subcategoryId", Resource.class)
	                .setParameter("subcategoryId", subcategoryId)
	                .getResultList();
	    }

}
