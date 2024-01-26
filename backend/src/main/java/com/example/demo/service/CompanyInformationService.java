package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.CompanyInformation;
import com.example.demo.respository.CompanyInformationRepository;

@Service
public class CompanyInformationService {
	
	@Autowired
	private CompanyInformationRepository companyInformationRepository;
	
	public void insert(String name, String location, String employee, String HP) {
		CompanyInformation companyInformation = new CompanyInformation();
		
		int company_id = companyInformationRepository.findAll().size()+1;
		
		companyInformation.setId(company_id);
		companyInformation.setName(name);
		companyInformation.setLocation(location);
		companyInformation.setNumber(employee);
		companyInformation.setWebsite(HP);
		
		companyInformationRepository.save(companyInformation);
	}
}
