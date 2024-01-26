package com.example.demo.mapper;

import lombok.Data;

@Data
// 1/16川崎
public class CorporateApplicationForm {
private long application_id;
	
	private long student_number;

	private String situation;
	
	private String eventFormat;
	
	
	private String locationClassification;
	

	private boolean application;

	private String companyName;

	private String startDate;
	
	private String endDate;

	private boolean confirmation;
	
	private String eventClassification;
	
	private String information;
	
	private String compatibleForm;
	
	private String number;
	
	private String position;
	
	private String report;
	
	private String result;
	
	private String schedule;

	private String comments;
	
	private String registrationDate;
	
	private String updateDate;
	
	private String memo;
	
	private String place_of_implementation;
	
	
	
	public boolean getApplication() {
		// TODO 自動生成されたメソッド・スタブ
		return this.application;
	}
	public void setApplication(boolean application) {
		// TODO 自動生成されたメソッド・スタブ
		this.application=application;
	}
	public boolean getConfirmation() {
		// TODO 自動生成されたメソッド・スタブ
		return this.confirmation;
	}
	public void setConfirmation(boolean confirmation) {
		// TODO 自動生成されたメソッド・スタブ
		this.confirmation=confirmation;
	}
}
