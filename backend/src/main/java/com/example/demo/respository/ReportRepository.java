package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.mapper.ApplicationInformation2;

public interface ReportRepository extends JpaRepository<ApplicationInformation2, Integer> {

}
