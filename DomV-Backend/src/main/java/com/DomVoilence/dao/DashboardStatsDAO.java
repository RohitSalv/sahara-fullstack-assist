package com.DomVoilence.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

@Repository
public class DashboardStatsDAO {
	@PersistenceContext
    private EntityManager entityManager;

    public long countUsers() {
        return (long) entityManager.createQuery("SELECT COUNT(u) FROM User u").getSingleResult();
    }

    public long countReports() {
        return (long) entityManager.createQuery("SELECT COUNT(r) FROM IncidentReport r").getSingleResult();
    }

    public long countStories() {
        return (long) entityManager.createQuery("SELECT COUNT(s) FROM SuccessStory s").getSingleResult();
    }

    public long countHelplines() {
        return (long) entityManager.createQuery("SELECT COUNT(h) FROM Helpline h").getSingleResult();
    }

}
