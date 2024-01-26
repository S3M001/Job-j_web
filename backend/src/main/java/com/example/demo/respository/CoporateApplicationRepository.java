package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.mapper.ApplicationInformation2;

// 1/16川崎
public interface CoporateApplicationRepository extends JpaRepository<ApplicationInformation2, Integer> {

	}
	
