package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.TeacherClass;
import com.example.demo.model.Teachers;
import com.example.demo.respository.TeacherClassRepository;
import com.example.demo.respository.TeachersRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")
public class TeacherController {
	
	@Autowired
	private TeacherClassRepository teacherClassRepository;
	
	@Autowired
	private TeachersRepository teachersRepository;
	
	@GetMapping("/teacherClass")
	public TeacherClass getTeacherClass(@RequestParam("id") int id){
		List<TeacherClass> teachers = teacherClassRepository.findAll();
		for(TeacherClass Teacher : teachers) {
			if(Teacher.getTeacher().getNumber() == id) {
				return Teacher;
			}
		}
		
		return null;
	}
	
	@GetMapping("/teachers")
	public List<Teachers> getTeachers(){
		return teachersRepository.findAll();
	}
	
	@GetMapping("/login")
	public Teachers getTeachers(@RequestParam("email") String email, @RequestParam("password") String password){
		List<Teachers> teachers = teachersRepository.findAll();
		for(Teachers Teacher : teachers) {
			if(Teacher.getEmail().equals(email)) {
				if(Teacher.getPassword().equals(password)) {
					return Teacher;
				}
			}
		}
		return null;
	}
	
	@GetMapping("/getAdmin")
	public Teachers getUser(@RequestParam("adminId") int token){
		List<Teachers> teachers = teachersRepository.findAll();
		for(Teachers Teacher : teachers) {
			if(Teacher.getNumber() == token) {
				return Teacher;
			}
		}
		return null;
	}
}
