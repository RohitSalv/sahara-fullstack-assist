package com.DomVoilence.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DomVoilence.dao.DashboardStatsDAO;

@RestController
@RequestMapping("/admin-dashboard")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminDashboardController {
	@Autowired
    private DashboardStatsDAO statsDAO;

    @GetMapping("/stats")
    public Map<String, Long> getStats() {
        Map<String, Long> stats = new HashMap<>();
        stats.put("totalUsers", statsDAO.countUsers());
        stats.put("totalReports", statsDAO.countReports());
        stats.put("totalStories", statsDAO.countStories());
        stats.put("totalHelplines", statsDAO.countHelplines());
        return stats;
    }
}
