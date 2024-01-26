package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Students;
import com.example.demo.respository.StudentsRepository;
import com.example.demo.service.StudentsService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class StudentsController {
	
	@Autowired
	private StudentsRepository studentsRepository;
	@Autowired
	private StudentsService service;
	
	@GetMapping("/students")
	public List<Students> getStudents(){
		return studentsRepository.findAll();
	}
	
	@GetMapping("/login")
	public Students getStudents(@RequestParam("email") String email, @RequestParam("password") String password){
		List<Students> students = studentsRepository.findAll();
		for(Students Student : students) {
			if(Student.getEmail().equals(email)) {
				if(Student.getPassword().equals(password)) {
					return Student;
				}
			}
		}
		return null;
	}
	
	@GetMapping("/getUser")
	public Students getUser(@RequestParam("userId") String token){
		List<Students> students = studentsRepository.findAll();
		for(Students Student : students) {
			if(Student.getAttendance_number().trim().equals(token)) {
				return Student;
			}
		}
		return null;
	}
//	ユーザーを一人登録
	@GetMapping("/admin/user/register")
	public boolean registerUser(
			@RequestParam("student_number") String studentNumber, @RequestParam("email") String email, @RequestParam("password") String password,
			@RequestParam("name") String name, @RequestParam("year") String year, @RequestParam("cls") String cls,
			@RequestParam("attendance") String attendanceNumber) {
		
		service.save(studentNumber, email, password, name, year, cls, attendanceNumber);
		return true;
	}
	
}
