package com.example.demo.mapper;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Table(name = "bookmark")
@Data
	
public class Bookmark2 implements Serializable{
	
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "bookmark_id")
		private long bookmark_id;

		@Column(name = "student_number")
		private long student_number;
		
		@Column(name = "briefing_session_id")
		private long briefing_session_id;
		
//		public Bookmark() {
//			
//		}
		
//		public Bookmark(long id, Students student, BriefingSession briefingSession) {
//			super();
//			this.id = id;
//			this.student = student;
//			this.briefingSession = briefingSession;
//		}
}
