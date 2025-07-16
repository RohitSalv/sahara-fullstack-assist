package com.DomVoilence.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.DomVoilence.dao.CategoryDao;
import com.DomVoilence.dao.ResourceDao;
import com.DomVoilence.dao.SubcategoryDao;
import com.DomVoilence.entity.Category;
import com.DomVoilence.entity.Resource;
import com.DomVoilence.entity.Subcategory;

@Service
public class ResourceService {

	@Autowired
    private CategoryDao categoryDao;

    @Autowired
    private SubcategoryDao subcategoryDao;

    @Autowired
    private ResourceDao resourceDao;

    public List<Category> getAllCategories() {
        return categoryDao.getAllCategories();
    }

    public List<Subcategory> getSubcategoriesByCategoryId(Long categoryId) {
        return subcategoryDao.getSubcategoriesByCategoryId(categoryId);
    }

    public List<Resource> getResourcesBySubcategoryId(Long subcategoryId) {
        return resourceDao.getResourcesBySubcategoryId(subcategoryId);
    }
    
    public void addResource(Resource resource) {
        resourceDao.saveResource(resource);
    }

   
}
