//package com.example.demo.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.mapper.ApplicationInformation2;
//import com.example.demo.mapper.CorporateApplicationForm;
//import com.example.demo.respository.CoporateApplicationRepository;
//
//import jakarta.transaction.Transactional;
//
//// 1/16川崎
//@Service
//@Transactional
//public class CoporateApplicationService{
//	@Autowired
//	CoporateApplicationRepository repository;
//	    public void insert(CorporateApplicationForm coporateapplicationform) {
//	        // データベースに登録する値を保持するインスタンス
//	    	ApplicationInformation2 applicationinformation2 = new ApplicationInformation2();
//
//	        // 画面から受け取った値をデータベースに保存するインスタンスに渡す
//	    	
//	    	
//	    	applicationinformation2.setStudent_number(coporateapplicationform.getStudent_number());
//	    	applicationinformation2.setSituation("申請中");
//	    	applicationinformation2.setEventFormat(coporateapplicationform.getEventFormat());
//	    	applicationinformation2.setLocationClassification(coporateapplicationform.getLocationClassification());
//	    	applicationinformation2.setApplication(coporateapplicationform.getApplication());
//	    	applicationinformation2.setCompanyName(coporateapplicationform.getCompanyName());
//	    	applicationinformation2.setPlaceOfImplementation(coporateapplicationform.getPlace_of_implementation());
//	    	
//	    	//時間のフォーマットを直す
//	    	applicationinformation2.setStartDate((coporateapplicationform.getStartDate()).replace('-', '/'));
//	    	String sub=(coporateapplicationform.getEndDate()).replace('-', '/');
//	    	sub=sub.replace('T', ' ');
//	    	applicationinformation2.setEndDate(sub);
//	    	
//	    	
//	    	applicationinformation2.setConfirmation(coporateapplicationform.getConfirmation());
//	    	applicationinformation2.setEventClassification(coporateapplicationform.getEventClassification());
//	    	applicationinformation2.setInformation(coporateapplicationform.getInformation());
//	    	
//	    	
//	    	//以下のはデーターベースのnotnullをなくすようにしなければならない
//	    	
//	    	//applicationinformation2.setCompatibleForm(coporateapplicationform.getCompatibleForm());
//	    	applicationinformation2.setCompatibleForm("a");
//	    	
//	    	//applicationinformation2.setNumber(coporateapplicationform.getNumber());
//	    	applicationinformation2.setNumber("a");
//	    	
//	    	
//	    	//applicationinformation2.setPosition(coporateapplicationform.getPosition());
//	    	applicationinformation2.setPosition("a");
//	    	
//	    	
//	    	//applicationinformation2.setReport(coporateapplicationform.getReport());
//	    	applicationinformation2.setReport("a");
//	    	
//	    	
//	    	//applicationinformation2.setResult(coporateapplicationform.getResult());
//	    	applicationinformation2.setResult("a");
//	    	
//	    	
//	    	//applicationinformation2.setSchedule(coporateapplicationform.getSchedule());
//	    	applicationinformation2.setSchedule("a");
//	    	
//	    	
//	    	//applicationinformation2.setComments(coporateapplicationform.getComments());
//	    	applicationinformation2.setComments("a");
//	    	
//	    	
//	    	//applicationinformation2.setRegistrationDate(coporateapplicationform.getRegistrationDate());
//	    	applicationinformation2.setRegistrationDate("a");
//	    	
//	    	//applicationinformation2.setUpdateDate(coporateapplicationform.getUpdateDate());
//	    	applicationinformation2.setUpdateDate("a");
//	    	
//	        
//	    	
//	        // データベースに登録する
//	        repository.save(applicationinformation2);
//	    }
//	
//	
//}
