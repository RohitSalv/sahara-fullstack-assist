package com.DomVoilence.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.DomVoilence.entity.IncidentMedia;
import com.DomVoilence.entity.IncidentReport;

@Repository
public class IncidentReportDAO {

	@PersistenceContext
    private EntityManager entityManager;

    public IncidentReport save(IncidentReport report) {
        entityManager.persist(report);
        return report;
    }

    public List<IncidentReport> findAll() {
        return entityManager.createQuery("FROM IncidentReport", IncidentReport.class).getResultList();
    }

    public IncidentReport findById(Long id) {
        return entityManager.find(IncidentReport.class, id);
    }
    
    @Transactional
    public void deleteReport(Long id) {
        IncidentReport report = entityManager.find(IncidentReport.class, id);
        if (report != null) {
            entityManager.remove(report);
        }
    }

    @Transactional
    public void deleteMedia(Long id) {
        IncidentMedia media = entityManager.find(IncidentMedia.class, id);
        if (media != null) {
            entityManager.remove(media);
        }
    }

}
