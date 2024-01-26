//package com.example.demo.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.mapper.ApplicationInformation2;
//import com.example.demo.mapper.ReportForm;
//import com.example.demo.respository.ReportRepository;
//
//import jakarta.transaction.Transactional;
//
//@Service
//@Transactional
//public class ReportService {
//	@Autowired
//	ReportRepository repository;
//	    public void update(ReportForm ReportForm) {
//	        // データベースに登録する値を保持するインスタンス
//	    	ApplicationInformation2 applicationinformation2 = new ApplicationInformation2();
//
//	        // 画面から受け取った値をデータベースに保存するインスタンスに渡す
//	    	
//	    	
//	    	applicationinformation2.setStudent_number(ReportForm.getStudent_number());
//	    	applicationinformation2.setSituation("申請中");
//	    	applicationinformation2.setEventFormat(ReportForm.getEventFormat());
//	    	applicationinformation2.setLocationClassification(ReportForm.getLocationClassification());
//	    	applicationinformation2.setApplication(ReportForm.getApplication());
//	    	applicationinformation2.setCompanyName(ReportForm.getCompanyName());
//	    	applicationinformation2.setPlaceOfImplementation(ReportForm.getPlace_of_implementation());
//	    	
//	    	//時間のフォーマットを直す
//	    	applicationinformation2.setStartDate((ReportForm.getStartDate()).replace('-', '/'));
//	    	String sub=(ReportForm.getEndDate()).replace('-', '/');
//	    	sub=sub.replace('T', ' ');
//	    	applicationinformation2.setEndDate(sub);
//	    	
//	    	
//	    	applicationinformation2.setConfirmation(ReportForm.getConfirmation());
//	    	applicationinformation2.setEventClassification(ReportForm.getEventClassification());
//	    	applicationinformation2.setInformation(ReportForm.getInformation());
//	    	
//	    	
//	    	//以下のはデーターベースのnotnullをなくすようにしなければならない
//	    	
//	    	applicationinformation2.setCompatibleForm(ReportForm.getCompatibleForm());
//	    	
//	    	applicationinformation2.setNumber(ReportForm.getNumber());
//	    	
//	    	applicationinformation2.setPosition(ReportForm.getPosition());
//	    
//	    	//applicationinformation2.setReport(coporateapplicationform.getReport());
//	    	applicationinformation2.setReport("a");
//	    	
//	    	applicationinformation2.setResult(ReportForm.getResult());
//	  
//	    	//applicationinformation2.setSchedule(coporateapplicationform.getSchedule());
//	    	applicationinformation2.setSchedule("a");
//	    	
//	    	//applicationinformation2.setComments(coporateapplicationform.getComments());
//	    	applicationinformation2.setComments("a");
//	    	
//	    	applicationinformation2.setRegistrationDate(ReportForm.getRegistrationDate());
//	    	
//	    	applicationinformation2.setUpdateDate(ReportForm.getUpdateDate());
//	    	
//	    	
//	        
//	    	
//	        // データベースに登録する
//	        repository.save(applicationinformation2);
//	    }
//}
