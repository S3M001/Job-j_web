import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../../css/Admin_modal/new_registration.css';
import AlertDialog5 from './new_registration_complete'
import SimpleDatePicker from '../parts/date';
import Stack from '@mui/material/Stack';


export default function AlertDialog4({className1,icon,openIcon}) {
    const [open, setOpen] = React.useState(false);
    const [condition, setCondition] = useState(false);

    const [company, setCompany] = useState({ name: "", location: "", employee: "", HP: ""})
    const { name, location, employee, HP} = company

    const [event, setEvent] = useState({ 
        occupation: "", name: "", condition: "",event_location: "", start: "", start_date:"", 
        start_time: "", place: "", method: "", note: "", deadline: ""
    })
    const initData = () => {
        setEvent({occupation: "", name: "", condition: "",event_location: "", start: "", start_date:"", 
        start_time: "", place: "", method: "", note: "", deadline: ""})
        setCompany({ name: "", location: "", employee: "", HP: ""})
    }
    const { occupation, event_location, start, place, method, note, deadline} = event
    
    event.condition = condition
    event.name = name

    // console.log(typeof deadline)

    const companyInformationChange = (e) => {
        setCompany({
            ...company, [e.target.name]: e.target.value
        })
    }

    const eventInformationChange = (e) => {
        setEvent({
            ...event,  [e.target.name]: e.target.value
        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        initData()
        setOpen(false);
    };

    return (
        <React.Fragment>
        <Stack direction="row" spacing={2}>
            <Button className={className1} variant="contained" color="primary" onClick={handleClickOpen}>{icon}</Button>   
        </Stack>     
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <div className="new_registration_title">
                    {"新規登録画面"}
                </div>
            </DialogTitle>
            <DialogContent>
            {/* <DialogContentText id="alert-dialog-description"> */}
            <div className="new_registration_label">
                    <div className="new_registration_texts">
                        <label>
                            <span>会社(正式名称,省略不可)<span className='new_registration_indispensable'>＊</span></span><br/>
                            <input type="text" className="new_registration_text1" id="alert-dialog-description" name="name" value={name} placeholder="" onChange={(e) => companyInformationChange(e)} required></input><br/>
                        </label>
                        <label className="new_registration_label_none1">
                            <span>本社所在地</span><br/>
                            <input type="text" className="new_registration_text1" id="alert-dialog-description" name="location" value={location} placeholder="" onChange = {(e) => companyInformationChange(e)} ></input><br/>
                        </label>
                    </div>
                    <div className="new_registration_texts">
                        <label>
                            <span>職種</span><br/>
                            <input type="text" className="new_registration_text5" id="alert-dialog-description" name="occupation" value={occupation} placeholder="" onChange = {(e) => eventInformationChange(e)}></input><br/>
                        </label>
                        <label>
                            <span>従業員数</span><br/>
                            <input type="number" className="new_registration_text2" id="alert-dialog-description" name="employee" value={employee} placeholder="" onChange = {(e) => companyInformationChange(e)}></input><br/>
                        </label>
                    </div>
                    <div className="new_registration_time">
                        <label className="new_registration_time-margin1">
                            <span>開始日時<span className='new_registration_indispensable'>＊</span></span><br/>
                            <SimpleDatePicker name="start" value={start} setDate = {eventInformationChange} onChange = {(e) => eventInformationChange(e)}/><br/>
                        </label>
                    </div>
                    <div className="new_registration_texts">
                        <label>
                            <span>募集勤務地</span><br/>
                            <input type="text" className="new_registration_text6" id="alert-dialog-description" name="event_location" value={event_location} placeholder="" onChange = {(e) => eventInformationChange(e)}></input><br/>
                        </label>
                        <label className="new_registration_toggle-button_margin">
                            <span>申し込み先（学校）</span><br/>
                            <label className="new_registration_toggle-button">
                                <input type="checkbox" name="flg" checked={condition} onChange={() => setCondition(!condition)}/>
                            </label>
                        </label>
                    </div>
                    <label>
                        <span>ホームページ</span><br/>
                        <input type="text" className="new_registration_text3" id="alert-dialog-description" name="HP" value={HP} placeholder="" onChange = {(e) => companyInformationChange(e)}></input><br/>
                    </label>
                    <label>
                        <span>説明</span><br/>
                        <input type="text" className="new_registration_text4" id="alert-dialog-description" name="note" value={note} placeholder="" onChange = {(e) => eventInformationChange(e)}></input><br/>
                    </label>
                    <div className="new_registration_texts">
                        <label>
                            <span>実施教室</span><br/>
                            <input type="text" className="new_registration_text7" id="alert-dialog-description" name="place" value={place} placeholder="" onChange = {(e) => eventInformationChange(e)}></input><br/>
                        </label>
                        <label>
                            <span>実施方式</span><br/>
                            <input type="text" className="new_registration_text8" id="alert-dialog-description" name="method" value={method} placeholder="" onChange = {(e) => eventInformationChange(e)}></input><br/>
                        </label>
                    </div>
                    <label className="new_registration_time2">
                        <span>締め切り<span className='new_registration_indispensable'>＊</span></span><br/>
                        <SimpleDatePicker name="deadline" value={deadline} setDate = {eventInformationChange} onChange = {(e) => eventInformationChange(e)}/><br/>
                    </label>
            </div>
            {/* </DialogContentText> */}
            </DialogContent>
            <DialogActions>
            <div className="new_registration_button_center">
                <Button className="new_registration_button_no" variant="contained" color="error" onClick={handleClose}>キャンセル</Button>
                <AlertDialog5 company={company} event={event}  initData={initData}/>
            </div>
            </DialogActions>
        </Dialog>
        </React.Fragment>
    );
}
