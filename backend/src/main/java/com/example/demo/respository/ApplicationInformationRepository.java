package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.ApplicationInformation;

@Repository
public interface ApplicationInformationRepository extends JpaRepository<ApplicationInformation, Long> {

}