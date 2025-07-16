package com.DomVoilence.service;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.DomVoilence.dao.IncidentMediaDAO;
import com.DomVoilence.dao.IncidentReportDAO;
import com.DomVoilence.entity.IncidentMedia;
import com.DomVoilence.entity.IncidentReport;

@Service
public class IncidentReportService {
	@Autowired
    private IncidentReportDAO reportDAO;

    @Autowired
    private IncidentMediaDAO mediaDAO;

    @Transactional
    public IncidentReport addReport(IncidentReport report) {
        return reportDAO.save(report);
    }

    public List<IncidentReport> getAllReports() {
        return reportDAO.findAll();
    }
    
    @Transactional
    public IncidentMedia uploadMedia(Long reportId, MultipartFile file) throws IOException {
        IncidentReport report = reportDAO.findById(reportId);
        if (report == null) {
            throw new IllegalArgumentException("Report not found");
        }

        IncidentMedia media = new IncidentMedia();
        media.setFileName(file.getOriginalFilename());
        media.setFileType(file.getContentType());
        media.setData(file.getBytes());
        media.setIncidentReport(report);

        return mediaDAO.save(media);
    }

    public IncidentMedia getMedia(Long mediaId) {
        return mediaDAO.findById(mediaId);
    }
    @Transactional
    public void deleteReport(Long id) {
        reportDAO.deleteReport(id);
    }


}
