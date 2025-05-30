package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.BrowsingHistory;
import com.example.demo.respository.BrowsingHistoryRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class BrowsingHistoryController{
	
	@Autowired
	private BrowsingHistoryRepository browsingHistoryRepository;
	
	@GetMapping("/browsingHistory")
	public List<BrowsingHistory> getBrowsingHistory(){
		return  browsingHistoryRepository.findAll();
	}
}
