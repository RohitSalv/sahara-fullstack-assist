package com.DomVoilence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DomVoilence.entity.RecoveryTool;
import com.DomVoilence.service.RecoveryToolService;

@RestController
@RequestMapping("/support-recovery/recovery-tools")
@CrossOrigin(origins = "http://localhost:4200")
public class RecoveryToolController {
	
	@Autowired
    private RecoveryToolService service;

    @GetMapping
    public List<RecoveryTool> getAll() {
        return service.getAllTools();
    }

    @PostMapping
    public RecoveryTool add(@RequestBody RecoveryTool tool) {
        return service.addTool(tool);
    }

}
