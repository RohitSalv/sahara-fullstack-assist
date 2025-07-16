package com.DomVoilence.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.DomVoilence.entity.IncidentMedia;

@Repository
public class IncidentMediaDAO {
	@PersistenceContext
    private EntityManager entityManager;

    public IncidentMedia save(IncidentMedia media) {
        entityManager.persist(media);
        return media;
    }

    public IncidentMedia findById(Long id) {
        return entityManager.find(IncidentMedia.class, id);
    }

}
