package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.mapper.Bookmark2;
import com.example.demo.model.Bookmark;
import com.example.demo.respository.BookmarkRepository;
import com.example.demo.respository.BookmarkRepository2;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class BookmarkController {
	
	@Autowired
	private BookmarkRepository bookmarkRepository;
	@Autowired
	private BookmarkRepository2 bookmarkRepository2;
	
	//	すべての申請情報を取得
	@GetMapping("/bookmark")
	public List<Bookmark> getBookmark(){
		return  bookmarkRepository.findAll();
	}
	
	@GetMapping("/insertbookmark")
	public boolean Bookmark(@RequestParam("student_number") long student_number,@RequestParam("briefing_session_id") long briefing_session_id){
		Bookmark2 bookmark2 = new Bookmark2();
		
		//dbに保存
		
		bookmark2.setStudent_number(student_number);
		bookmark2.setBriefing_session_id(briefing_session_id);
		bookmarkRepository2.save(bookmark2);
		
		
		
		return true;
	}
	
	@GetMapping("/deletebookmark")
	public boolean deleteBookmark(@RequestParam("student_number") long student_number,@RequestParam("briefing_session_id") long briefing_session_id){
		//Bookmark2 bookmark2 = new Bookmark2();
		
		//dbから削除
		
		List<Bookmark2> bookmark2 = bookmarkRepository2.findAll();
		for(Bookmark2 Bookmark2 : bookmark2) {
			if(Bookmark2.getStudent_number()== student_number) {
				if(Bookmark2.getBriefing_session_id()== briefing_session_id) {
					bookmarkRepository2.deleteById(Bookmark2.getBookmark_id());
					return true;
				}
				
			}
		}
		
		
		return false;
	}
}
