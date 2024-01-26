package com.example.demo.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.BriefingSession;
import com.example.demo.model.CompanyInformation;
import com.example.demo.respository.BriefingSessionRepository;

@Service
@Transactional
public class BriefingSessionService {
	
	@Autowired
	private BriefingSessionRepository briefingSessionRepository;
	
	/**
	 * データベースにデータを登録する
	 * @return
	 */
	public void insert(
			String occupation, String location, boolean flg, 
			String date, String time, String place, 
			String method, String note, String deadline, 
			CompanyInformation companyId) {
		BriefingSession briefingSession = new BriefingSession();
		 // 作成の日付を取得
        LocalDate today = LocalDate.now();
        
        int briefing_session_id = briefingSessionRepository.findAll().size()+1;
        System.out.print(briefing_session_id);

        // フォーマットの指定（任意）
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        String formattedToday = today.format(formatter);
		
        briefingSession.setBriefing_session_id(briefing_session_id);
		briefingSession.setOccupation(occupation);
		briefingSession.setLocation(location);
		briefingSession.setApply(flg);
		briefingSession.setEvent_date(date);
		briefingSession.setDate_and_time(time);
		briefingSession.setPlace(place);
		briefingSession.setMethod(method);
		briefingSession.setNotes(note);
		briefingSession.setRegistration_date(formattedToday);
		briefingSession.setDeadline(deadline);
		briefingSession.setCompany(companyId);
		
		briefingSessionRepository.save(briefingSession);
	}

	public void insertAll(String occupation, String location2, boolean flg, String date, String time, String place,
			String location, String method, String note, String deadline, CompanyInformation companyId, int id) {
		// TODO 自動生成されたメソッド・スタブ
		// TODO 自動生成されたメソッド・スタブ
		BriefingSession briefingSession = new BriefingSession();
		 // 作成の日付を取得
       LocalDate today = LocalDate.now();
       
       // フォーマットの指定（任意）
       DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
       String formattedToday = today.format(formatter);
       
		
       	briefingSession.setBriefing_session_id(id);
		briefingSession.setOccupation(occupation);
		briefingSession.setLocation(location);
		briefingSession.setApply(flg);
		briefingSession.setEvent_date(date);
		briefingSession.setDate_and_time(time);
		briefingSession.setPlace(place);
		briefingSession.setMethod(method);
		briefingSession.setNotes(note);
		briefingSession.setDeadline(deadline);
		briefingSession.setCompany(companyId);
		//not null 回避
		briefingSession.setRegistration_date(formattedToday);
		briefingSession.setApply(flg);
		
		briefingSessionRepository.save(briefingSession);
		
	}
}
