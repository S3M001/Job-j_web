package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "teacher_class")
@IdClass(value=TeacherClassKey.class)
@Data
public class TeacherClass implements Serializable{
	
	@Id
	@Column(name = "school_year")
	private String school_year;
	
	@Id
	@Column(name = "class")
	private String group;
	
	@OneToOne
	@JoinColumn(name = "teacher_number")
	private Teachers teacher;
	
	public TeacherClass() {
		
	}
	
	public TeacherClass(String school_year, String group, Teachers teacher) {
		super();
		this.school_year = school_year;
		this.group = group;
		this.teacher = teacher;
	}
}
