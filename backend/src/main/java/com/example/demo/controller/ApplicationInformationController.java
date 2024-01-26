package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ApplicationInformation;
import com.example.demo.respository.ApplicationInformationRepository;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class ApplicationInformationController {

	@Autowired
	private ApplicationInformationRepository applicationInformationRepository;
//	@Autowired
//	private CoporateApplicationService CoporateApplicationService;
	
	//	すべての申請情報を取得
	@GetMapping("/applicationInformation")
	public List<ApplicationInformation> getApplicationInformation(){
		return  applicationInformationRepository.findAll();
	}
	
	 // 申請情報の変更
    @GetMapping("/updateApplyInfo")
    public boolean updateApply(@RequestParam("id") long id ,@RequestParam("confirmation") boolean confirmation ,
    		@RequestParam("situation") String situation ,@RequestParam(name="compatibleForm",defaultValue="") String compatibleForm,
    		@RequestParam(name="number",defaultValue="") String number,@RequestParam(name="position",defaultValue="") String position,@RequestParam("report") String report,
    		@RequestParam(name="result",defaultValue="") String result,@RequestParam("schedule") String schedule,@RequestParam("registrationDate") String registrationDate,
    		@RequestParam("updateDate") String updateDate
    		 ) {
    	//,@RequestParam("comments") String comments,
    	
    	//必要な項目が埋まっているか判定
    	if(compatibleForm.equals("") || compatibleForm.length() == 0) {
			return false;
		}
		if(number.equals("") || number.length() == 0) {
			return false;
		}
		if(result.equals("") || result.length() == 0) {
			return false;
		}
		
    	ApplicationInformation applicationinformation2 = null;
    	
    	List<ApplicationInformation> applicationInformation = applicationInformationRepository.findAll();
		for(ApplicationInformation ApplicationInformation : applicationInformation) {
			if(ApplicationInformation.getApplication_id() == id) {
				applicationinformation2 = ApplicationInformation;
				 // 画面から受け取った値をデータベースに保存するインスタンスに渡す
				applicationinformation2.setSituation(situation);
				//時間フォーマットを直す
				String sub=(updateDate).replace('-', '/');
		    	sub=sub.replace('T', ' ');
				applicationinformation2.setUpdateDate(sub);
				applicationinformation2.setConfirmation(confirmation);
				applicationinformation2.setCompatibleForm(compatibleForm);
				applicationinformation2.setNumber(number);
				applicationinformation2.setPosition(position);
				applicationinformation2.setReport(report);
				applicationinformation2.setResult(result);
				applicationinformation2.setSchedule(schedule);
				
				//applicationinformation2.setComments(comments);
				applicationinformation2.setRegistrationDate(registrationDate);
				
				// データベースに登録する
				applicationInformationRepository.save(applicationinformation2);
				return true;
			}
		}
		
        return false; 
    }
    
    //担当確認の更新
    @GetMapping("/updateApplyInfo/confirmation")
    public boolean updateApply(@RequestParam("id") long id ,@RequestParam("confirmation") boolean confirmation ,@RequestParam("situation") String situation ,@RequestParam("updateDate") String updateDate) {
    	ApplicationInformation applicationinformation2 = null;
    	
    	List<ApplicationInformation> applicationInformation = applicationInformationRepository.findAll();
		for(ApplicationInformation ApplicationInformation : applicationInformation) {
			if(ApplicationInformation.getApplication_id() == id) {
				applicationinformation2 = ApplicationInformation;
				 // 画面から受け取った値をデータベースに保存するインスタンスに渡す
				applicationinformation2.setSituation(situation);
				applicationinformation2.setConfirmation(confirmation);
				//時間フォーマットを直す
				String sub=(updateDate).replace('-', '/');
		    	sub=sub.replace('T', ' ');
				applicationinformation2.setUpdateDate(sub);
				// データベースに登録する
				applicationInformationRepository.save(applicationinformation2);
				return true;
			}
		}
		
        return false; 
    }
    
    
 // 申請情報の中のコメントの変更
    @GetMapping("/updateComment")
    public boolean updateComment(@RequestParam("id") long id ,@RequestParam("comments") String comments, @RequestParam("updateDate") String updateDate) {
    	ApplicationInformation applicationinformation2 = null;
    	
    	List<ApplicationInformation> applicationInformation = applicationInformationRepository.findAll();
		for(ApplicationInformation ApplicationInformation : applicationInformation) {
			if(ApplicationInformation.getApplication_id() == id) {
				applicationinformation2 = ApplicationInformation;
				 // 画面から受け取った値をデータベースに保存するインスタンスに渡す
				//時間フォーマットを直す
				String sub=(updateDate).replace('-', '/');
		    	sub=sub.replace('T', ' ');
				applicationinformation2.setUpdateDate(sub);
				applicationinformation2.setComments(comments);

				// データベースに登録する
				applicationInformationRepository.save(applicationinformation2);
				return true;
			}
		}
		
        return false; 
    }
    
    // 申請情報の中のコメントの変更
    @GetMapping("/updateMemo")
    public boolean updateMemo(@RequestParam("id") long id ,@RequestParam("memo") String memo, @RequestParam("updateDate") String updateDate) {
    	ApplicationInformation applicationinformation2 = null;
    	
    	List<ApplicationInformation> applicationInformation = applicationInformationRepository.findAll();
		for(ApplicationInformation ApplicationInformation : applicationInformation) {
			if(ApplicationInformation.getApplication_id() == id) {
				applicationinformation2 = ApplicationInformation;
				 // 画面から受け取った値をデータベースに保存するインスタンスに渡す
				//時間フォーマットを直す
				String sub=(updateDate).replace('-', '/');
		    	sub=sub.replace('T', ' ');
				applicationinformation2.setUpdateDate(sub);
				applicationinformation2.setMemo(memo);

				// データベースに登録する
				applicationInformationRepository.save(applicationinformation2);
				return true;
			}
		}
		
        return false; 
    }
    
    // 承認の更新処理
    @GetMapping("/application/approval")
    public boolean applicationApproval(@RequestParam("id") long id , String comments,@RequestParam("situation") String situation, @RequestParam("updateDate") String updateDate) {
    	ApplicationInformation applicationinformation2 = null;
    	
    	List<ApplicationInformation> applicationInformation = applicationInformationRepository.findAll();
		for(ApplicationInformation ApplicationInformation : applicationInformation) {
			if(ApplicationInformation.getApplication_id() == id) {
				applicationinformation2 = ApplicationInformation;
				 // 画面から受け取った値をデータベースに保存するインスタンスに渡す
				//時間フォーマットを直す
				String sub=(updateDate).replace('-', '/');
		    	sub=sub.replace('T', ' ');
				applicationinformation2.setUpdateDate(sub);
				applicationinformation2.setSituation(situation);

				// データベースに登録する
				applicationInformationRepository.save(applicationinformation2);
				return true;
			}
		}
		
        return false; 
    }
}