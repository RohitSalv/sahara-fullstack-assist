package com.DomVoilence.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.DomVoilence.entity.Helpline;

@Repository
public class HelplineDAO {

	@PersistenceContext
    private EntityManager entityManager;

    public List<Helpline> findAll() {
        return entityManager.createQuery("FROM Helpline", Helpline.class).getResultList();
    }

    public Helpline save(Helpline helpline) {
        entityManager.persist(helpline);
        return helpline;
    }
}
