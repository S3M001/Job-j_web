package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.BriefingSession;
import com.example.demo.model.CompanyInformation;
import com.example.demo.respository.BriefingSessionRepository;
import com.example.demo.respository.CompanyInformationRepository;
import com.example.demo.service.BriefingSessionService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class BriefingSessionController {
	
	@Autowired
	private BriefingSessionRepository briefingSessionRepository;
	@Autowired
	private BriefingSessionService service;
	@Autowired
	private CompanyInformationRepository companyInformationRepository;
	
	
	@GetMapping("/briefingSession")
	public List<BriefingSession> getBriefingSession(){
		return briefingSessionRepository.findAll();
	}
	
	@GetMapping("/admin/save/event")
	public boolean saveBriefingSession(
			@RequestParam(name = "occupation", defaultValue="") String occupation, @RequestParam(name = "condition" ,defaultValue="") boolean flg, 
			@RequestParam(name = "event_location" ,defaultValue="") String location, @RequestParam(name = "start_date" ,defaultValue="") String date,
			@RequestParam(name = "start_time" ,defaultValue="") String time, @RequestParam(name = "place" ,defaultValue="") String place, @RequestParam(name = "method" ,defaultValue="") String method, 
			@RequestParam(name = "note" ,defaultValue="") String note, @RequestParam(name = "deadline" ,defaultValue="") String deadline,
			@RequestParam(name = "name" ,defaultValue="") String name
			) {
		boolean sw = true;
		CompanyInformation company = new CompanyInformation();
		List<CompanyInformation> companyList = companyInformationRepository.findAll();
		for(CompanyInformation companys: companyList) {
			if(companys.getName().equals(name)) {
				company = companys;
			}else { 
				company.setName("");
			}
		}
		
		if(company.getName().equals("") || company.getName().length() == 0) {
			sw = false;
		}
		if(date.equals("") || date.length() == 0) {
			sw = false;
		}
		if(deadline.equals("") || deadline.length() == 0) {
			sw = false;
		}
		
		try {
			if(sw) {				
				service.insert(
						occupation, location, flg,
						date, time, place, 
						method, note, deadline, 
						company
						);
			} else {
				companyInformationRepository.deleteById(company.getId());
			}
		} catch(Exception e) {
			e.printStackTrace();
		}
		return sw;
	}
	
	@GetMapping("/admin/save/eventAll")
	public void saveBriefingSessionAll(
			@RequestParam("occupation") String occupation, @RequestParam("condition") boolean flg, 
			@RequestParam("event_location") String location, @RequestParam("start_date") String date,
			@RequestParam("start_time") String time, @RequestParam("place") String place, @RequestParam("method") String method, 
			@RequestParam("note") String note, @RequestParam("deadline") String deadline,
			@RequestParam("name") String name ,@RequestParam("location") String location2, 
			@RequestParam("employee") String employee, @RequestParam("HP") String HP,
			@RequestParam("id") int id,
			@RequestParam("companyId") int companyId
			) {
		CompanyInformation company = new CompanyInformation();
		List<CompanyInformation> companyList = companyInformationRepository.findAll();
		for(CompanyInformation companys: companyList) {
			if(companys.getId() == companyId) {
				company = companys;
			}
		}
		//会社情報の変更
//		company.setLocation(location2);
//		company.setName(name);
//		company.setNumber(employee);
//		company.setWebsite(HP);
		
		try {
			service.insertAll(
					occupation, location2, flg,
					date, time, place, location,
					method, note, deadline, 
					company,id
					);
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	@GetMapping("/admin/delete/event")
	public boolean deleteBriefingSession(@RequestParam("id") long id) {
		BriefingSession briefingSession = new BriefingSession();
		List<BriefingSession> briefingSessionList = briefingSessionRepository.findAll();
		for(BriefingSession briefingSessionN: briefingSessionList) {
			if(briefingSessionN.getBriefing_session_id() == id) {
				briefingSession = briefingSessionN;
				briefingSession.setDeleteFlg(true);
				briefingSessionRepository.save(briefingSession);
				return true;
			}
		}
		return false;
	}
}
