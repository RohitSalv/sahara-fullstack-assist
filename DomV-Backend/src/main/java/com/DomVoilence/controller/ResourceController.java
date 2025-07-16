package com.DomVoilence.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DomVoilence.entity.Category;
import com.DomVoilence.entity.Resource;
import com.DomVoilence.entity.Subcategory;
import com.DomVoilence.service.CategoryService;
import com.DomVoilence.service.ResourceService;
import com.DomVoilence.service.SubcategoryService;

@RestController
@RequestMapping("/resource")
@CrossOrigin("http://localhost:4200")

public class ResourceController {
	
    @Autowired
    private CategoryService categoryService;

    @Autowired
    private SubcategoryService subcategoryService;

	
	 @Autowired
	    private ResourceService service;
	 
	// 👉 POST Category
	    @PostMapping("/categories")
	    public ResponseEntity<String> addCategory(@RequestBody Category category) {
	        categoryService.addCategory(category);
	        return ResponseEntity.ok("Category added successfully.");
	    }

	    // 👉 POST Subcategory
	    @PostMapping("/subcategories")
	    public ResponseEntity<String> addSubcategory(@RequestBody Map<String, Object> requestData) {
	        String name = (String) requestData.get("name");
	        String description = (String) requestData.get("description");
	        Long categoryId = Long.valueOf(requestData.get("categoryId").toString());

	        Category category = categoryService.getCategoryById(categoryId);
	        if (category == null) {
	            return ResponseEntity.badRequest().body("Invalid category ID.");
	        }

	        Subcategory subcategory = new Subcategory();
	        subcategory.setName(name);
	        subcategory.setDescription(description);
	        subcategory.setCategory(category);

	        subcategoryService.addSubcategory(subcategory);
	        return ResponseEntity.ok("Subcategory added successfully.");
	    }
	    
	    
	    // 👉 POST Resource
	    @PostMapping("/resources")
	    public ResponseEntity<String> addResource(@RequestBody Resource resource) {
	    service.addResource(resource);
	    	return ResponseEntity.ok("Resource added successfully.");
	    }

	    @GetMapping("/categories")
	    public List<Category> getCategories() {
	        return service.getAllCategories();
	    }

	    @GetMapping("/categories/{id}/subcategories")
	    public List<Subcategory> getSubcategories(@PathVariable Long id) {
	        return service.getSubcategoriesByCategoryId(id);
	    }
	    
	    @DeleteMapping("/categories/{id}")
	    public ResponseEntity<String> deleteCategory(@PathVariable Long id) {
	        categoryService.deleteCategory(id);
	        return ResponseEntity.ok("Category deleted successfully.");
	    }

	    @PutMapping("/categories/{id}")
	    public ResponseEntity<String> updateCategory(@PathVariable Long id, @RequestBody Category category) {
	        category.setId(id);  // Ensure the ID is set to the path variable
	        categoryService.updateCategory(category);
	        return ResponseEntity.ok("Category updated successfully.");
	    }

	    @GetMapping("/subcategories/{id}/resources")
	    public List<Resource> getResources(@PathVariable Long id) {
	        return service.getResourcesBySubcategoryId(id);
	    }
	    @GetMapping("/all-subcategories")
	    public List<Subcategory> getAllSubcategories() {
	        return subcategoryService.getAllSubcategories();
	    }

	    @PutMapping("/subcategories/{id}")
	    public ResponseEntity<String> updateSubcategory(@PathVariable Long id, @RequestBody Map<String, Object> requestData) {
	        Subcategory existing = subcategoryService.getSubcategoryById(id);
	        if (existing == null) {
	            return ResponseEntity.notFound().build();
	        }

	        String name = (String) requestData.get("name");
	        String description = (String) requestData.get("description");
	        Long categoryId = Long.valueOf(requestData.get("categoryId").toString());

	        Category category = categoryService.getCategoryById(categoryId);
	        if (category == null) {
	            return ResponseEntity.badRequest().body("Invalid category ID.");
	        }

	        existing.setName(name);
	        existing.setDescription(description);
	        existing.setCategory(category);

	        subcategoryService.addSubcategory(existing);
	        return ResponseEntity.ok("Subcategory updated successfully.");
	    }

	    @DeleteMapping("/subcategories/{id}")
	    public ResponseEntity<String> deleteSubcategory(@PathVariable Long id) {
	        subcategoryService.deleteSubcategory(id);
	        return ResponseEntity.ok("Subcategory deleted successfully.");
	    }

	    
}
