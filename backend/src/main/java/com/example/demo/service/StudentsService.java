package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Students;
import com.example.demo.respository.StudentsRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class StudentsService {
	
	@Autowired
	private StudentsRepository repository;
	
	public void save(
			String studentNumber, String email, String password, String name,
			String year, String cls, String attendanceNumber
			) {
		Students student = new Students();
		
		student.setStudent_number(Integer.valueOf(studentNumber));
		student.setEmail(email);
		student.setPassword(password);
		student.setName(name);
		student.setYear(year);
		student.setGroup(cls);
		student.setAttendance_number(attendanceNumber);
		
		repository.save(student);
	}
}