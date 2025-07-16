package com.DomVoilence.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DomVoilence.dao.SubcategoryDao;
import com.DomVoilence.entity.Subcategory;

@Service
public class SubcategoryService {
	 @Autowired
	    private SubcategoryDao subcategoryDao;

	    public void addSubcategory(Subcategory subcategory) {
	        subcategoryDao.saveSubcategory(subcategory);
	    }

	    public List<Subcategory> getSubcategoriesByCategoryId(Long categoryId) {
	        return subcategoryDao.getSubcategoriesByCategoryId(categoryId);
	    }
	    public Subcategory getSubcategoryById(Long id) {
	        return subcategoryDao.getSubcategoryById(id);
	    }

	    public List<Subcategory> getAllSubcategories() {
	        return subcategoryDao.getAllSubcategories();
	    }

	    public void updateSubcategory(Long id, Subcategory updatedSubcategory) {
	        subcategoryDao.updateSubcategory(id, updatedSubcategory);
	    }

	    public void deleteSubcategory(Long id) {
	        subcategoryDao.deleteSubcategory(id);
	    }


}
