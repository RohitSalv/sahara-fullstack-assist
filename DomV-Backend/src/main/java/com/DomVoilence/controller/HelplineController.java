package com.DomVoilence.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DomVoilence.entity.Helpline;
import com.DomVoilence.service.HelplineService;

@RestController
@RequestMapping("/support-recovery/helplines")
@CrossOrigin(origins = "http://localhost:4200")

public class HelplineController {
	
	 @Autowired
	    private HelplineService service;

	    @GetMapping
	    public List<Helpline> getAll() {
	        return service.getAllHelplines();
	    }

	    @PostMapping
	    public Helpline add(@RequestBody Helpline helpline) {
	        return service.addHelpline(helpline);
	    }

}
