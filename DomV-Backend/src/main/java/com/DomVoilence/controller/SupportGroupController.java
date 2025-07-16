package com.DomVoilence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DomVoilence.entity.SupportGroup;
import com.DomVoilence.service.SupportGroupService;

@RestController
@RequestMapping("/support-recovery/support-groups")
@CrossOrigin(origins = "http://localhost:4200")
public class SupportGroupController {
	
	@Autowired
    private SupportGroupService service;

    @GetMapping
    public List<SupportGroup> getAll() {
        return service.getAllGroups();
    }

    @PostMapping
    public SupportGroup add(@RequestBody SupportGroup group) {
        return service.addGroup(group);
    }

}
