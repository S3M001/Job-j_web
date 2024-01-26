package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "students")
@Data
public class Students implements Serializable{
	
	@Id
	@Column(name = "student_number")
	private long student_number;
	
	@Column(name = "mailaddress")
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "student_name")
	private String name;
	
	@Column(name = "school_year")
	private String year;
	
	@Column(name = "class")
	private String group;
	
	@Column(name = "attendance_number")
	private String attendance_number;

	
	public Students() {
		
	}
	public Students(long student_number, String email, String password, String name, String year, String group, String attendance_number) {
		super();
		this.student_number = student_number;
		this.email = email;
		this.password = password;
		this.name = name;
		this.year = year;
		this.group = group;
		this.attendance_number = attendance_number;
	}
	
}
