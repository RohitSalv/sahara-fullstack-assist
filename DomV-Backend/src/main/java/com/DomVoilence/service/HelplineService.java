package com.DomVoilence.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DomVoilence.dao.HelplineDAO;
import com.DomVoilence.entity.Helpline;

@Service
public class HelplineService {
	@Autowired
    private HelplineDAO helplineDao;

    public List<Helpline> getAllHelplines() {
        return helplineDao.findAll();
    }

    @Transactional
    public Helpline addHelpline(Helpline helpline) {
        return helplineDao.save(helpline);
    }

}
