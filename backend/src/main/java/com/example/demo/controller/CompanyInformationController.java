package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CompanyInformation;
import com.example.demo.respository.CompanyInformationRepository;
import com.example.demo.service.CompanyInformationService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class CompanyInformationController {
	
	@Autowired
	private CompanyInformationRepository companyInformationRepository;
	@Autowired
	private CompanyInformationService service;
	
	@GetMapping("/companyInformation")
	public List<CompanyInformation> getCompanyInformation(){
		return companyInformationRepository.findAll();
	}
	
	@GetMapping("/admin/save/company")
	public boolean saveCompanyInformation(
			@RequestParam(name = "name" ,defaultValue="") String name, @RequestParam(name = "location" ,defaultValue="") String location, 
			@RequestParam(name = "employee" ,defaultValue="") String employee, @RequestParam(name = "HP" ,defaultValue="") String HP
			) {
		boolean sw = true;
		if(name.equals("") || name.length() == 0) {
			sw = false;
		}
		
		try {
			if(sw) {
				service.insert(name, location, employee, HP);		
			}
		} catch(Exception e) {
			
			
            e.printStackTrace();
		}
		
		return sw;
	}
	
	@GetMapping("/admin/update/company")
	public boolean updateCompanyInformation(@RequestParam(name = "id") int id,
			@RequestParam(name = "name" ,defaultValue="") String name, @RequestParam(name = "location" ,defaultValue="") String location, 
			@RequestParam(name = "number" ,defaultValue="") String employee, @RequestParam(name = "website" ,defaultValue="") String HP
			) {
		boolean sw = true;
		if(name.equals("") || name.length() == 0) {
			sw = false;
		}
		
		try {
			if(sw) {
				CompanyInformation companyInformation = new CompanyInformation();
				
				companyInformation.setId(id);
				companyInformation.setName(name);
				companyInformation.setLocation(location);
				companyInformation.setNumber(employee);
				companyInformation.setWebsite(HP);
				
				companyInformationRepository.save(companyInformation);	
				System.out.print(companyInformation);
			}
		} catch(Exception e) {
			
			
            e.printStackTrace();
		}
		
		return sw;
	}
}	
