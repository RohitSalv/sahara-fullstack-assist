package com.DomVoilence.controller;

import org.springframework.http.MediaType;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.DomVoilence.entity.IncidentMedia;
import com.DomVoilence.entity.IncidentReport;
import com.DomVoilence.service.IncidentReportService;

@RestController
@RequestMapping("/support-recovery/reports")
@CrossOrigin(origins = "http://localhost:4200")
public class IncidentReportController {
	
	@Autowired
    private IncidentReportService service;

    @PostMapping
    public ResponseEntity<IncidentReport> addReport(@RequestBody IncidentReport report) {
        return ResponseEntity.ok(service.addReport(report));
    }

    @GetMapping
    public List<IncidentReport> getReports() {
        return service.getAllReports();
    }

    @PostMapping("/{reportId}/upload")
    public ResponseEntity<String> uploadMedia(@PathVariable Long reportId, @RequestParam("file") MultipartFile file) {
        try {
            IncidentMedia saved = service.uploadMedia(reportId, file);
            return ResponseEntity.ok("Media uploaded successfully with ID: " + saved.getId());
        } catch (IOException | IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Upload failed: " + e.getMessage());
        }
    }

    @GetMapping("/media/{mediaId}")
    public ResponseEntity<byte[]> getMedia(@PathVariable Long mediaId) {
        IncidentMedia media = service.getMedia(mediaId);
        if (media == null) {
            return ResponseEntity.notFound().build();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(media.getFileType()));
        headers.setContentDisposition(ContentDisposition.builder("inline").filename(media.getFileName()).build());

        return new ResponseEntity<>(media.getData(), headers, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteReport(@PathVariable Long id) {
        service.deleteReport(id);
        return ResponseEntity.ok("Report deleted");
    }

}
