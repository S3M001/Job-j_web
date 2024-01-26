--ユーザーマスタ

INSERT INTO students(student_number,mailaddress,password,student_name,school_year,class,attendance_number) VALUES(1,'ito@hcs.com', '1234','伊藤 真理','J1','A1','01');
INSERT INTO students(student_number,mailaddress,password,student_name,school_year,class,attendance_number) VALUES(2,'matuura@hcs.com', '2238','松浦 宏樹','J1','A2','17');
--教員マスタ
INSERT INTO teachers(teacher_number,mailaddress,password,teacher_name) VALUES(1,'oota@hcs.com', '4567','太田 春香');
INSERT INTO teachers(teacher_number,mailaddress,password,teacher_name) VALUES(2,'endou@hcs.com', '5932','遠藤 秀人');

--教員担当クラス

INSERT INTO teacher_class(school_year,class,teacher_number) VALUES('J1','A1',1);
INSERT INTO teacher_class(school_year,class,teacher_number) VALUES('J1','A2',2);


--会社情報テーブル

INSERT INTO company_information(company_id,company_name,number_of_employees,head_office_location,website) VALUES(1,'任天堂', '2777','京都市南区上鳥羽鉾立町11番地1','https://www.nintendo.co.jp/index.html');
INSERT INTO company_information(company_id,company_name,number_of_employees,head_office_location,website) VALUES(2,'富士通', '124000','東京都港区東新橋一丁目5番2号','https://global.fujitsu/ja-jp/');


--説明会テーブル

INSERT INTO briefing_session(briefing_session_id,company_id,occupation,work_location,where_to_apply,eventdate,date_and_time,place_of_implementation,implementation_method,registration_date,deadline,notes,delete_flg) VALUES(1,1,'PG,SE','京都',true,'2023/12/15','15:00','901','対面','2023/12/10 ','2023/12/13','',false);
INSERT INTO briefing_session(briefing_session_id,company_id,occupation,work_location,where_to_apply,eventdate,date_and_time,place_of_implementation,implementation_method,registration_date,deadline,notes,delete_flg) VALUES(2,2,'PG,SE','東京',false,'2023/12/18','14:30','901','対面','2023/12/11','2023/12/14','',false);

--申請情報テーブル

INSERT INTO application_information(application_id,student_number,situation,event_format,location_classification,application,company_name,place_of_implementation,start_date_and_time,end_date_and_time,confirmation,event_classification,additional_information,compatible_form,number_of_people_supported,corresponding_position,report,result,schedule,comments,registration_date,update_date,memo) VALUES(1,1,'1.申請作成中','説明会','学校',true,'SCC株式会社','901','2023/12/15 15:00','2023/12/15 16:00',false,'','','','','','','','','','2023/12/13','2023/12/13','');
INSERT INTO application_information(application_id,student_number,situation,event_format,location_classification,application,company_name,place_of_implementation,start_date_and_time,end_date_and_time,confirmation,event_classification,additional_information,compatible_form,number_of_people_supported,corresponding_position,report,result,schedule,comments,registration_date,update_date,memo) VALUES(2,1,'2.申請承認待ち','面接','自宅',true,'サイバーエージェント','901','2023/12/18 14:30','2023/12/18 15:15',true,'','','','','','','','','','2023/12/13','2023/12/13','');
INSERT INTO application_information(application_id,student_number,situation,event_format,location_classification,application,company_name,place_of_implementation,start_date_and_time,end_date_and_time,confirmation,event_classification,additional_information,compatible_form,number_of_people_supported,corresponding_position,report,result,schedule,comments,registration_date,update_date,memo) VALUES(3,1,'3.申請承認済み','説明会','学校',true,'LINE株式会社','901','2023/12/15 15:00','2023/12/15 16:00',false,'','','','','','','','','','2023/12/13','2023/12/13','');
INSERT INTO application_information(application_id,student_number,situation,event_format,location_classification,application,company_name,place_of_implementation,start_date_and_time,end_date_and_time,confirmation,event_classification,additional_information,compatible_form,number_of_people_supported,corresponding_position,report,result,schedule,comments,registration_date,update_date,memo) VALUES(4,1,'4.申請完了','面接','自宅',true,'Google','901','2023/12/18 14:30','2023/12/18 15:15',true,'','','','','','','','','','2023/12/13','2023/12/13','');
INSERT INTO application_information(application_id,student_number,situation,event_format,location_classification,application,company_name,place_of_implementation,start_date_and_time,end_date_and_time,confirmation,event_classification,additional_information,compatible_form,number_of_people_supported,corresponding_position,report,result,schedule,comments,registration_date,update_date,memo) VALUES(5,1,'5.報告作成中','説明会','学校',true,'Amazon','901','2023/12/15 15:00','2023/12/15 16:00',false,'','','','','','','','','','2023/12/13','2023/12/13','');
INSERT INTO application_information(application_id,student_number,situation,event_format,location_classification,application,company_name,place_of_implementation,start_date_and_time,end_date_and_time,confirmation,event_classification,additional_information,compatible_form,number_of_people_supported,corresponding_position,report,result,schedule,comments,registration_date,update_date,memo) VALUES(6,1,'6.報告承認待ち','面接','自宅',true,'NHK','901','2023/12/18 14:30','2023/12/18 15:15',true,'','','','','','','','','','2023/12/13','2023/12/13','');
INSERT INTO application_information(application_id,student_number,situation,event_format,location_classification,application,company_name,place_of_implementation,start_date_and_time,end_date_and_time,confirmation,event_classification,additional_information,compatible_form,number_of_people_supported,corresponding_position,report,result,schedule,comments,registration_date,update_date,memo) VALUES(7,1,'7.報告完了','説明会','学校',true,'株式会社HDC','901','2023/12/15 15:00','2023/12/15 16:00',false,'','','','','','','','','','2023/12/13','2023/12/13','');



--閲覧履歴テーブル
INSERT INTO browsing_history(browsing_history_id,student_number,briefing_session_id) VALUES(1,1,1);
INSERT INTO browsing_history(browsing_history_id,student_number,briefing_session_id) VALUES(2,1,2);


--お気に入り登録
INSERT INTO bookmark(bookmark_id,student_number,briefing_session_id) VALUES(1,1,1);
INSERT INTO bookmark(bookmark_id,student_number,briefing_session_id) VALUES(2,1,2);


--管理者テーブル
INSERT INTO admin(admin_id,teacher_number) VALUES(1,1);





