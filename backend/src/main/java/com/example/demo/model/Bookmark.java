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
@Table(name = "bookmark")
@Data
public class Bookmark implements Serializable{
	
	@Id
	@Column(name = "bookmark_id")
	private long id;

	@OneToOne
	//@PrimaryKeyJoinColumn
	@JoinColumn(name = "student_number")
	private Students student;
	
	@OneToOne
	//@PrimaryKeyJoinColumn
	@JoinColumn(name = "briefing_session_id")
	private BriefingSession briefingSession;
	
	public Bookmark() {
		
	}
	
	public Bookmark(long id, Students student, BriefingSession briefingSession) {
		super();
		this.id = id;
		this.student = student;
		this.briefingSession = briefingSession;
	}
}
