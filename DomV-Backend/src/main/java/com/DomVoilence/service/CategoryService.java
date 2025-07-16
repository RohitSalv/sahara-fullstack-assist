package com.DomVoilence.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DomVoilence.dao.CategoryDao;
import com.DomVoilence.entity.Category;

@Service
public class CategoryService {
	@Autowired
    private CategoryDao categoryDao;

    public void addCategory(Category category) {
        categoryDao.saveCategory(category);
    }

    public List<Category> getAllCategories() {
        return categoryDao.getAllCategories();
    }

    public void deleteCategory(Long id) {
        categoryDao.deleteCategory(id);
    }

    public void updateCategory(Category category) {
        categoryDao.updateCategory(category);
    }

    public Category getCategoryById(Long id) {
        return categoryDao.getCategoryById(id);
    }

}
