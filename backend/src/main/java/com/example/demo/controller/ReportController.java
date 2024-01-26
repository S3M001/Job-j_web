//package com.example.demo.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.mapper.ReportForm;
//import com.example.demo.service.ReportService;
//
//@CrossOrigin("*")
//@RestController
//@RequestMapping("/api/v1")
//public class ReportController {
//	
//	@Autowired
//	private ReportService ReportService;
//	
//	@GetMapping("/report")
//    public String save(@ModelAttribute ReportForm ReportForm, Model model) {
//
//        // 申請情報をDBにinsertする
//	 ReportService.update(ReportForm);
//
//        // reactにリダイレクト
//        return "";
//    }
//}
