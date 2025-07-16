package com.DomVoilence.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DomVoilence.dao.SupportGroupDAO;
import com.DomVoilence.entity.SupportGroup;

@Service
public class SupportGroupService {
	
	@Autowired
    private SupportGroupDAO repo;

    public List<SupportGroup> getAllGroups() {
        return repo.findAll();
    }

    @Transactional
    public SupportGroup addGroup(SupportGroup group) {
        return repo.save(group);
    }

}
