package com.example.demo.mapper;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "application_information")
@Data
// 1/16川崎
public class ApplicationInformation2 implements Serializable {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "application_id")
	private long application_id;
	
	@Column(name = "situation")
	private String situation;
	
	@Column(name = "event_format")
	private String eventFormat;
	
	@Column(name = "location_classification")
	private String locationClassification;
	
	@Column(name = "place_of_implementation")
	private String placeOfImplementation;
	
	@Column(name = "application")
	private boolean application;
	
	@Column(name = "company_name")
	private String companyName;
	
	@Column(name = "start_date_and_time")
	private String startDate;
	
	@Column(name = "end_date_and_time")
	private String endDate;
	
	@Column(name = "confirmation")
	private boolean confirmation;
	
	@Column(name = "event_classification")
	private String eventClassification;
	
	@Column(name = "additional_information")
	private String information;
	
	@Column(name = "compatible_form")
	private String compatibleForm;
	
	@Column(name = "number_of_people_supported")
	private String number;
	
	@Column(name = "corresponding_position")
	private String position;
	
	@Column(name = "report")
	private String report;
	
	@Column(name = "result")
	private String result;
	
	@Column(name = "schedule")
	private String schedule;
	
	@Column(name = "comments")
	private String comments;
	
	@Column(name = "registration_date")
	private String registrationDate;
	
	@Column(name = "update_date")
	private String updateDate;
	
	@Column(name = "memo")
	private String memo;
		
		@Column(name = "student_number")
		private long student_number;
}

