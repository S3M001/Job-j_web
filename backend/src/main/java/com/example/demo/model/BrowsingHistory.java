package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "browsing_history")
@Data
public class BrowsingHistory implements Serializable{
	
	@Id
	@Column(name = "browsing_history_id")
	private long id;
	
	@OneToOne
	@PrimaryKeyJoinColumn
	private Students student;
	
	@OneToOne
	@PrimaryKeyJoinColumn
	private BriefingSession briefing_session;
	
	public BrowsingHistory() {
		
	}
	public BrowsingHistory(long id, Students student, BriefingSession briefing_session) {
		super();
		this.id = id;
		this.student = student;
		this.briefing_session = briefing_session;
	}	
	
}
