package com.DomVoilence.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.DomVoilence.entity.RecoveryTool;

@Repository
public class RecoveryToolDAO {
	
	 @PersistenceContext
	    private EntityManager entityManager;

	    public List<RecoveryTool> findAll() {
	        return entityManager.createQuery("FROM RecoveryTool", RecoveryTool.class).getResultList();
	    }

	    public RecoveryTool save(RecoveryTool tool) {
	        entityManager.persist(tool);
	        return tool;
	    }

}
