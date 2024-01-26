-------------------------------------------------------------------
--ユーザーマスタ
CREATE TABLE students
(
	student_number serial NOT NULL,
    mailaddress character varying(100) NOT NULL,
    password character varying(300) NOT NULL,
    student_name character varying(40) NOT NULL,
    school_year character(5)  NOT NULL,
    class character(5)  NOT NULL,
    attendance_number character(5)  NOT NULL,
    
    PRIMARY KEY (student_number)
    
);

--教員マスタ
CREATE TABLE teachers
(
	teacher_number serial NOT NULL,
    mailaddress character varying(100) NOT NULL,
    password character varying(300) NOT NULL,
    teacher_name character varying(40) NOT NULL,
    
    PRIMARY KEY (teacher_number)
);


--教員担当クラステーブル
CREATE TABLE teacher_class
( 
	school_year character(5) NOT NULL,
    class character(5)  NOT NULL,
    teacher_number serial NOT NULL,
   	
   	PRIMARY KEY (school_year,class),
   	FOREIGN KEY (teacher_number)
   	REFERENCES teachers(teacher_number)
);

--会社情報テーブル
CREATE TABLE company_information
(
	company_id serial NOT NULL,
	company_name character varying(40) NOT NULL,
    number_of_employees character varying(100),
    head_office_location character varying(100),
    website character varying(100),
    
    PRIMARY KEY (company_id)
);

--説明会テーブル
CREATE TABLE briefing_session
(	
	briefing_session_id  serial NOT NULL,
	company_id serial NOT NULL,
	occupation character(100),
	work_location character(100),
	where_to_apply boolean NOT NULL,
	eventdate character(100) NOT NULL,
	date_and_time character varying(100) NOT NULL,
	place_of_implementation character(100),
	implementation_method character varying(100),
    registration_date character(100) NOT NULL,
    deadline character(100) NOT NULL,
    notes character varying(300),
    
    PRIMARY KEY (briefing_session_id),
    FOREIGN KEY (company_id) REFERENCES company_information(company_id) 
);
--説明会テーブルに削除フラグの追加
ALTER TABLE IF EXISTS public.briefing_session
    ADD COLUMN "delete_flg" boolean DEFAULT false;





--申請情報テーブル
CREATE TABLE application_information
(
	application_id serial NOT NULL,
	student_number int NOT NULL,
	situation character varying(100) NOT NULL,
	event_format character varying(300) NOT NULL,
	location_classification character varying(100) NOT NULL,
	application boolean NOT NULL,
	company_name character varying(40) NOT NULL,
    place_of_implementation character varying(100) NOT NULL,
    start_date_and_time character varying(100) NOT NULL,
    end_date_and_time character varying(100) NOT NULL,
    confirmation boolean NOT NULL,
    event_classification character varying(100),
    additional_information character varying(100),
    compatible_form character varying(100) ,
    number_of_people_supported character varying(100) ,
    corresponding_position character varying(100) ,
    report character varying(100),
    result character varying(100),
    schedule character varying(100),
    comments character varying(300),
    registration_date character varying(100),
    update_date character varying(100),
    
    PRIMARY KEY (application_id),
  	FOREIGN KEY (student_number) REFERENCES teachers(teacher_number)
  	
);

--申請情報テーブルにメモ列の追加
ALTER TABLE IF EXISTS public.application_information
    ADD COLUMN memo character varying(300);


--閲覧履歴テーブル
CREATE TABLE browsing_history
(
	browsing_history_id serial NOT NULL,
   	student_number serial NOT NULL,
	briefing_session_id serial NOT NULL,
	
	PRIMARY KEY (browsing_history_id),
    FOREIGN KEY (student_number) REFERENCES teachers(teacher_number),
    FOREIGN KEY (briefing_session_id) REFERENCES briefing_session(briefing_session_id)
    
);


--お気に入り登録
CREATE TABLE bookmark
(	
	bookmark_id serial NOT NULL,
   	student_number int NOT NULL,
	briefing_session_id  int NOT NULL,
	
	PRIMARY KEY (bookmark_id),
	FOREIGN KEY (student_number) REFERENCES teachers(teacher_number),
    FOREIGN KEY (briefing_session_id) REFERENCES briefing_session(briefing_session_id)
);

--管理者テーブル
CREATE TABLE admin
(	
	admin_id serial NOT NULL,
   	teacher_number serial NOT NULL,
	
	PRIMARY KEY (admin_id),
	FOREIGN KEY (teacher_number) REFERENCES teachers(teacher_number)
);

















