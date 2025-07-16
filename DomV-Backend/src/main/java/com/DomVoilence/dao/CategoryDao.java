package com.DomVoilence.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.DomVoilence.entity.Category;

@Repository
public class CategoryDao {
	 @PersistenceContext
	    private EntityManager entityManager;
	 
	 @Transactional
	 public void saveCategory(Category category) {
	        entityManager.persist(category);
	    }

	    public List<Category> getAllCategories() {
	        return entityManager.createQuery("FROM Category", Category.class).getResultList();
	    }
	    
	    @Transactional
	    public void deleteCategory(Long id) {
	        Category category = entityManager.find(Category.class, id);
	        if (category != null) {
	            entityManager.remove(category);
	        }
	    }

	    @Transactional
	    public void updateCategory(Category updatedCategory) {
	        entityManager.merge(updatedCategory);
	    }

	    public Category getCategoryById(Long id) {
	        return entityManager.find(Category.class, id);
	    }

}
