package com.DomVoilence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DomVoilence.entity.SuccessStory;
import com.DomVoilence.service.SuccessStoryService;

@RestController
@RequestMapping("/support-recovery/success-stories")
@CrossOrigin(origins = "http://localhost:4200")
public class SuccessStoryController {
	@Autowired
    private SuccessStoryService service;

    @PostMapping
    public SuccessStory addStory(@RequestBody SuccessStory story) {
        return service.saveStory(story);
    }

    @GetMapping
    public List<SuccessStory> getAllStories() {
        return service.getAllStories();
    }

    @GetMapping("/approved")
    public List<SuccessStory> getApprovedStories() {
        return service.getApprovedStories();
    }

    @GetMapping("/{id}")
    public SuccessStory getStory(@PathVariable Long id) {
        return service.getStoryById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteStory(@PathVariable Long id) {
        service.deleteStory(id);
    }

    @PutMapping("/approve/{id}")
    public SuccessStory approveStory(@PathVariable Long id) {
        return service.approveStory(id);
    }
}
