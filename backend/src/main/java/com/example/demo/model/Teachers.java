package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "teachers")
@Data
public class Teachers implements Serializable{
	
	@Id
	@Column(name = "teacher_number")
	private long number;
	
	@Column(name = "mailaddress")
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "teacher_name")
	private String name;
	
	public Teachers() {
		
	}
	
	public Teachers(long number, String email, String password, String name) {
		super();
		this.number = number;
		this.email = email;
		this.password = password;
		this.name = name;
	}

	public Object getTeacher_number() {
		// TODO 自動生成されたメソッド・スタブ
		return null;
	}
}
