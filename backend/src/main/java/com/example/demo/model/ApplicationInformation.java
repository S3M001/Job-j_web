package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "application_information")
@Data
public class ApplicationInformation implements Serializable {
	
	@Id
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
	
	
	
	
	@OneToOne
	@JoinColumn(name = "student_number", referencedColumnName = "student_number")
	private Students student;
	
	public ApplicationInformation() {
		
	}
	
	public ApplicationInformation(
			long application_id, String situation, String eventFormat, String locationClassification, String placeOfImplementation, boolean application, String companyName, String startDate, String endDate, 
			boolean confirmation, String eventClassification, String information, String compatibleForm, String number, String position, String report, String result, String schedule, 
			String comments, String registrationDate, String updateDate,String memo, Students student
			) {
		super();
		this.application_id = application_id;
		this.situation = situation;
		this.eventFormat = eventFormat;
		this.locationClassification = locationClassification;
		this.placeOfImplementation = placeOfImplementation;
		this.application = application;
		this.companyName = companyName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.confirmation = confirmation;
		this.eventClassification = eventClassification;
		this.information = information;
		this.compatibleForm = compatibleForm;
		this.number = number;
		this.position = position;
		this.report = report;
		this.result = result;
		this.schedule = schedule;
		this.comments = comments;
		this.registrationDate = registrationDate;
		this.updateDate = updateDate;
		this.student = student;
		this.memo = memo;
		
	}
}
