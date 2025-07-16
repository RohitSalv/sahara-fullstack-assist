package com.DomVoilence.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.DomVoilence.entity.Subcategory;

@Repository
public class SubcategoryDao {
	
	 @PersistenceContext
	    private EntityManager entityManager;
	 
	 @Transactional
	 public void saveSubcategory(Subcategory subcategory) {
	        entityManager.persist(subcategory);
	    }

	    public List<Subcategory> getSubcategoriesByCategoryId(Long categoryId) {
	        return entityManager.createQuery("FROM Subcategory s WHERE s.category.id = :categoryId", Subcategory.class)
	                .setParameter("categoryId", categoryId)
	                .getResultList();
	    }
	    public Subcategory getSubcategoryById(Long id) {
	        return entityManager.find(Subcategory.class, id);
	    }
	    
	    public List<Subcategory> getAllSubcategories() {
	        return entityManager.createQuery("FROM Subcategory", Subcategory.class).getResultList();
	    }

	    @Transactional
	    public void updateSubcategory(Long id, Subcategory updatedSubcategory) {
	        Subcategory existing = entityManager.find(Subcategory.class, id);
	        if (existing != null) {
	            existing.setName(updatedSubcategory.getName());
	            existing.setDescription(updatedSubcategory.getDescription());
	            existing.setCategory(updatedSubcategory.getCategory());
	            entityManager.merge(existing);
	        }
	    }

	    @Transactional
	    public void deleteSubcategory(Long id) {
	        Subcategory subcategory = entityManager.find(Subcategory.class, id);
	        if (subcategory != null) {
	            entityManager.remove(subcategory);
	        }
	    }
}
