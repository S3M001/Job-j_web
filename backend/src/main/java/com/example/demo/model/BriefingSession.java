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
@Table(name = "briefing_session")
@Data
public class BriefingSession implements Serializable{
	
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "briefing_session_id")
	private long briefing_session_id;
	
	@Column(name = "occupation")
	private String occupation;
	
	@Column(name = "work_location")
	private String location;
	
	@Column(name = "where_to_apply")
	private boolean  apply;
	
	@Column(name = "eventdate")
	private String event_date;
	
	@Column(name = "date_and_time")
	private String date_and_time;
	
	@Column(name = "place_of_implementation")
	private String place;
	
	@Column(name = "implementation_method")
	private String method;
	
	@Column(name = "registration_date")
	private String registration_date;
	
	@Column(name = "deadline")
	private String deadline;
	
	@Column(name = "notes")
	private String notes;
	
	@Column(name = "deleteFlg")
	private boolean deleteFlg;
	
	@OneToOne
	@JoinColumn(name = "company_id")
	private CompanyInformation company;
	
	public BriefingSession() {
		
	}
	
	public BriefingSession(
			long briefing_session_id,String occupation, String location, boolean apply, String event_date, 
			String date_and_time,String place, String method, String registration_date, 
			String deadline, String notes, boolean deleteFlg ,CompanyInformation company) {
		super();
		this.briefing_session_id = briefing_session_id;
		this.occupation = occupation;
		this.location = location;
		this.apply = apply;
		this.event_date = event_date;
		this.date_and_time = date_and_time;
		this.place = place;
		this.method = method;
		this.registration_date = registration_date;
		this.deadline = deadline;
		this.notes = notes;
		this.company = company;
		this.deleteFlg = deleteFlg;
	}
	
}
