package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.mapper.ApplicationInformation2;
import com.example.demo.respository.CoporateApplicationRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class CorporateApplicationController {// 1/16川崎
	
//	@Autowired
//	private CoporateApplicationService CoporateApplicationService;
	@Autowired
	CoporateApplicationRepository repository;
	
	//申請をDBに保存する
	@GetMapping("/corporateApplication")
	public String corporateApplication_insert(
			@RequestParam("student_number") long student_number,@RequestParam(name="eventFormat",defaultValue="") String eventFormat,
			@RequestParam(name="locationClassification",defaultValue="") String locationClassification,@RequestParam("application") boolean application,
			@RequestParam(name="companyName",defaultValue="") String companyName,@RequestParam(name="place_of_implementation",defaultValue="") String place_of_implementation,
			@RequestParam(name="startDate",defaultValue="") String startDate,@RequestParam(name="endDate",defaultValue="") String endDate,@RequestParam("eventClassification") String eventClassification,
			@RequestParam("registrationDate") String registrationDate,@RequestParam("information") String information,@RequestParam("updateDate") String updateDate){
		
		//表記を直してlistへ追加
		String startDatelist[] =startDate.split("[-T:]");
		String endDatelist[] = endDate.split("[-T:]");
	
		int miss=0;
		boolean flg = false;
		//パラメーターがnull状態であれば画面に戻す
		if(companyName.equals("") || companyName.length() == 0) {
			flg=true;
			miss+=1;
		}
		if(place_of_implementation.equals("") || place_of_implementation.length() == 0) {
			flg=true;
			miss+=1;
		}
		if(eventFormat.equals("") || eventFormat.length() == 0) {
			flg=true;
			miss+=1;
		}
		if(locationClassification.equals("") || locationClassification.length() == 0) {
			flg=true;
			miss+=1;
		}
		if(startDate.equals("") || startDate.length() == 0) {
			flg=true;
			miss+=1;
		}
		if(endDate.equals("") || endDate.length() == 0) {
			flg=true;
			miss+=1;
		}
		if(flg==true) {
			String misss=String.valueOf(miss);
			return misss+"項目入力されていません";
		}
		
		//日時の判定
		for(int i=0;i<startDatelist.length;i++) {
//			System.out.println(startDatelist[i]);
//			System.out.println(endDatelist[i]);
			int startDateint= Integer.parseInt(startDatelist[i]);
			int endDateint= Integer.parseInt(endDatelist[i]);
			if(i==0) {
				//startの年が大きい時点でfalseへ
				if(startDateint>endDateint) {
					return "開始日時の年が終了日時の年より大きいです";
						//startが小さい場合
				}else if(startDateint<endDateint) {
					break;
				}
			}else if(i==1) {
				//月
				if(startDateint>endDateint) {
					//startの年が同じ場合でstartの月が大きければfalseへ、それ以外はスルー
					return "開始日時の月が終了日時の月より大きいです";
				}else if(startDateint<endDateint) {
					break;
				}
				//ここまでで、年が同じでかつ月が小さいまたは同じ月しかない
			}else if(i==2) {
				//日付
				if(startDateint>endDateint) {
					//startの年が同じ場合でstartの月が大きければfalseへ、それ以外はスルー
					return "開始日時の日付が終了日時の日付より大きいです";
				}
				if(startDateint<endDateint) {
					break;
				}
			}else if(i==3) {
				//時間
				if(startDateint>endDateint) {
					return "開始日時の時間が終了日時の時間より大きいです";
				}else if(startDateint<endDateint) {
					break;
				}
			}else if(i==4) {
				//分
				if(startDateint>endDateint) {
					return "開始日時の分数が終了日時の分数より大きいです";
				}else if(startDateint<endDateint) {
					break;
				}
			}
		}
		
		ApplicationInformation2 applicationinformation2 = new ApplicationInformation2();
		//@RequestParam("situation") String situation,@RequestParam("confirmation") boolean confirmation
		//@RequestParam("compatible_form") String compatible_form,@RequestParam("number_of_people_supported") String number_of_people_supported,@RequestParam("corresponding_position") String corresponding_position,@RequestParam("report") String report,@RequestParam("result") String result,@RequestParam("schedule") String schedule,@RequestParam("comments") String comments,
		applicationinformation2.setApplication_id(repository.findAll().size()+1);
		applicationinformation2.setStudent_number(student_number);
    	applicationinformation2.setSituation("2.申請承認待ち");
    	applicationinformation2.setEventFormat(eventFormat);
    	applicationinformation2.setLocationClassification(locationClassification);
    	applicationinformation2.setApplication(application);
    	applicationinformation2.setCompanyName(companyName);
    	applicationinformation2.setPlaceOfImplementation(place_of_implementation);

    	//時間のフォーマットを直す
    	applicationinformation2.setStartDate((startDate).replace('-', '/').replace('T', ' '));
    	String sub=(endDate).replace('-', '/');
    	sub=sub.replace('T', ' ');
    	applicationinformation2.setEndDate(sub);


    	applicationinformation2.setConfirmation(false);
    	applicationinformation2.setEventClassification(eventClassification);
    	//時間のフォーマットを直す
    	applicationinformation2.setRegistrationDate((registrationDate).replace('-', '/').replace('T', ' '));
    	applicationinformation2.setUpdateDate((updateDate).replace('-', '/').replace('T', ' '));
    	applicationinformation2.setInformation(information);

    	System.out.println(applicationinformation2);

        // データベースに登録する
        repository.save(applicationinformation2);

        return "ok";

	}
	
	//申請が拒否された時のホームからの再申請
	@GetMapping("/corporateApplicationup")
	public String corporateApplication_update(@RequestParam("id") long id,@RequestParam("student_number") long student_number,@RequestParam(name="eventFormat",defaultValue="") String eventFormat,
			@RequestParam(name="locationClassification",defaultValue="") String locationClassification,@RequestParam("application") boolean application,
			@RequestParam(name="companyName",defaultValue="") String companyName,@RequestParam(name="place_of_implementation",defaultValue="") String place_of_implementation,
			@RequestParam(name="startDate",defaultValue="") String startDate,@RequestParam(name="endDate",defaultValue="") String endDate,@RequestParam(name="eventClassification",defaultValue="") String eventClassification,
			@RequestParam(name="information",defaultValue="") String information) {
		
		//表記を直してlistへ追加
		String startDatelist[] =startDate.split("[-T:]");
		String endDatelist[] = endDate.split("[-T:]");
		
		
		int miss=0;
		boolean flg = false;
		//パラメーターがnull状態であれば画面に戻す
		if(companyName.equals("") || companyName.length() == 0) {
			flg=true;
			miss+=1;
		}
		if(place_of_implementation.equals("") || place_of_implementation.length() == 0) {
			flg=true;
			miss+=1;
		}
		if(eventFormat.equals("") || eventFormat.length() == 0) {
			flg=true;
			miss+=1;
		}
		if(locationClassification.equals("") || locationClassification.length() == 0) {
			flg=true;
			miss+=1;
		}
		if(startDate.equals("") || startDate.length() == 0) {
			flg=true;
			miss+=1;
		}
		if(endDate.equals("") || endDate.length() == 0) {
			flg=true;
			miss+=1;
		}
		if(flg==true) {
			String misss=String.valueOf(miss);
			return misss+"項目入力されていません";
		}
		//日時の判定	
		for(int i=0;i<startDatelist.length;i++) {
//			System.out.println(startDatelist[i]);
//			System.out.println(endDatelist[i]);
			int startDateint= Integer.parseInt(startDatelist[i]);
			int endDateint= Integer.parseInt(endDatelist[i]);
			if(i==0) {
				//startの年が大きい時点でfalseへ
				if(startDateint>endDateint) {
					return "開始日時の年が終了日時の年より大きいです";
						//startが小さい場合
				}else if(startDateint<endDateint) {
					break;
				}
			}else if(i==1) {
				//月
				if(startDateint>endDateint) {
					//startの年が同じ場合でstartの月が大きければfalseへ、それ以外はスルー
					return "開始日時の月が終了日時の月より大きいです";
				}else if(startDateint<endDateint) {
					break;
				}
				//ここまでで、年が同じでかつ月が小さいまたは同じ月しかない
			}else if(i==2) {
				//日付
				if(startDateint>endDateint) {
					//startの年が同じ場合でstartの月が大きければfalseへ、それ以外はスルー
					return "開始日時の日付が終了日時の日付より大きいです";
				}
				if(startDateint<endDateint) {
					break;
				}
			}else if(i==3) {
				//時間
				if(startDateint>endDateint) {
					return "開始日時の時間が終了日時の時間より大きいです";
				}else if(startDateint<endDateint) {
					break;
				}
			}
		}
		
			
				
		ApplicationInformation2 applicationinformation2 = new ApplicationInformation2();
    	
    	List<ApplicationInformation2> applicationinformation = repository.findAll();
		for(ApplicationInformation2 ApplicationInformation2 : applicationinformation) {
			//appidが一致している拒否された申請を上書きする
			if(ApplicationInformation2.getApplication_id() == id) {
				applicationinformation2.setApplication_id(id);
				applicationinformation2.setStudent_number(student_number);
		    	applicationinformation2.setSituation("2.申請承認待ち");
		    	applicationinformation2.setEventFormat(eventFormat);
		    	applicationinformation2.setLocationClassification(locationClassification);
		    	applicationinformation2.setApplication(application);
		    	applicationinformation2.setCompanyName(companyName);
		    	applicationinformation2.setPlaceOfImplementation(place_of_implementation);

		    	//時間のフォーマットを直す
		    	applicationinformation2.setStartDate((startDate).replace('-', '/').replace('T', ' '));
		    	String sub=(endDate).replace('-', '/');
		    	sub=sub.replace('T', ' ');
		    	applicationinformation2.setEndDate(sub);


		    	applicationinformation2.setConfirmation(false);
		    	applicationinformation2.setEventClassification(eventClassification);
		    	applicationinformation2.setInformation(information);
		    	
		    	repository.save(applicationinformation2);
		    	return "ok";
		    	
			}
		}
		return "no";
	
	}
		
}
