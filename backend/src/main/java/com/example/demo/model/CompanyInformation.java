package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "company_information")
@Data
public class CompanyInformation implements Serializable {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "company_id")
	private long id;
	
	@Column(name = "company_name")
	private String name;
	
	@Column(name = "number_of_employees")
	private String number;
	
	@Column(name = "head_office_location")
	private String location;
	
	@Column(name = "website")
	private String website;
	
	public CompanyInformation() {
		
	}
	
	public CompanyInformation(long id, String name, String number, String location, String website) {
		super();
		this.id = id;
		this.name = name;
		this.number = number;
		this.location = location;
		this.website = website;
	}

}
