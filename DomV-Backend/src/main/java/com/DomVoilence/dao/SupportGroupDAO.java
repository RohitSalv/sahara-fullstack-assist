package com.DomVoilence.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.DomVoilence.entity.SupportGroup;

@Repository
public class SupportGroupDAO {
	@PersistenceContext
    private EntityManager entityManager;

    public List<SupportGroup> findAll() {
        return entityManager.createQuery("FROM SupportGroup", SupportGroup.class).getResultList();
    }

    public SupportGroup save(SupportGroup group) {
        entityManager.persist(group);
        return group;
    }

}
