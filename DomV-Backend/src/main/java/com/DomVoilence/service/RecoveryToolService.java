package com.DomVoilence.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DomVoilence.dao.RecoveryToolDAO;
import com.DomVoilence.entity.RecoveryTool;

@Service
public class RecoveryToolService {
	 @Autowired
	    private RecoveryToolDAO repo;

	    public List<RecoveryTool> getAllTools() {
	        return repo.findAll();
	    }
	    
	    @Transactional
	    public RecoveryTool addTool(RecoveryTool tool) {
	        return repo.save(tool);
	    }

}
