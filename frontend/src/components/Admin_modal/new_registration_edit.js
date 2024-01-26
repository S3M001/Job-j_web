import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../../css/Admin_modal/new_registration.css';
import AlertDialog5 from './new_registration_completeEdit'
import SimpleDatePicker from '../parts/date';
import Stack from '@mui/material/Stack';


export default function AlertDialog6(props) {

    // const [condition, setCondition] = useState(props.rowData.apply);
    const date = props.rowData.event_date.trim().replace("/","-").replace("/","-")+'T'+props.rowData.date_and_time

    const [event, setEvent] = useState({
        id: props.rowData.id,
        companyId: props.rowData.company.id,
        name: props.rowData.companyName,
        location: props.rowData.company.location,
        employee: props.rowData.company.number,
        HP: props.rowData.company.website,
        occupation: props.rowData.occupation.trim(),
        event_location: props.rowData.location.trim(),
        start:date,
        place: props.rowData.place.trim(),
        method: props.rowData.method.trim(),
        note: "",
        deadline: props.rowData.deadline.trim(),
        condition : props.rowData.apply
    })

    const eventInformationChange = (e) => {
        setEvent({
            ...event,  [e.target.name]: e.target.value
        })
    }

    const onClickChange = () => {
        setEvent({
            ...event,  ["condition"]: !event.condition
        })
        console.log(event)
    }
    return (
        <React.Fragment>
        <Stack direction="row" spacing={2}>
        </Stack>
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <div className="new_registration_title">
                    {"登録情報変更画面"}
                </div>
            </DialogTitle>
            <DialogContent>
            {/* <DialogContentText id="alert-dialog-description"> */}
            <div className="new_registration_label">
                    <div className="new_registration_texts">
                        <label>
                            <span>会社(正式名称,省略不可)</span><br/>
                            <input type="text" className="new_registration_text1" id="alert-dialog-description" name="name"defaultValue={props.rowData.companyName} placeholder="" onChange={(e) => eventInformationChange(e)} required></input><br/>
                        </label>
                        <label className="new_registration_label_none1">
                            <span>本社所在地</span><br/>
                            <input type="text" className="new_registration_text1" id="alert-dialog-description" name="location" defaultValue={props.rowData.company.location} placeholder="" onChange = {(e) => eventInformationChange(e)} ></input><br/>
                        </label>
                    </div>
                    <div className="new_registration_texts">
                        <label>
                            <span>職種</span><br/>
                            <input type="text" className="new_registration_text5" id="alert-dialog-description" name="occupation" defaultValue={props.rowData.occupation.trim()} placeholder="" onChange = {(e) => eventInformationChange(e)}></input><br/>
                        </label>
                        <label>
                            <span>従業員数</span><br/>
                            <input type="number" className="new_registration_text2" id="alert-dialog-description" name="employee" defaultValue={props.rowData.company.number} placeholder="" onChange = {(e) => eventInformationChange(e)}></input><br/>
                        </label>
                    </div>
                    <div className="new_registration_time">
                        <label className="new_registration_time-margin1">
                            <span>開始日時</span><br/>
                            <SimpleDatePicker name="start" data={props.rowData.event_date.trim().replace("/","-").replace("/","-")+'T'+props.rowData.date_and_time} setDate = {eventInformationChange} onChange = {(e) => eventInformationChange(e)}/><br/>
                        </label>
                    </div>
                    <div className="new_registration_texts">''
                        <label>
                            <span>募集勤務地</span><br/>
                            <input type="text" className="new_registration_text6" id="alert-dialog-description" name="event_location" defaultValue={props.rowData.location.trim()} placeholder="" onChange = {(e) => eventInformationChange(e)}></input><br/>
                        </label>
                        <label className="new_registration_toggle-button_margin">
                            <span>申し込み先（学校）</span><br/>
                            <label className="new_registration_toggle-button">
                                <input type="checkbox" name="conditon" defaultChecked={event.condition} onChange = {() => onClickChange()}/>
                            </label>
                        </label>
                    </div>
                    <label>
                        <span>ホームページ</span><br/>
                        <input type="text" className="new_registration_text3" id="alert-dialog-description" name="HP"  defaultValue={props.rowData.company.website} placeholder="" onChange = {(e) => eventInformationChange(e)}></input><br/>
                    </label>
                    <label>
                        <span>説明</span><br/>
                        <input type="text" className="new_registration_text4" id="alert-dialog-description" name="note" defaultValue={props.rowData.notes} placeholder="" onChange = {(e) => eventInformationChange(e)}></input><br/>
                    </label>
                    <div className="new_registration_texts">
                        <label>
                            <span>実施教室</span><br/>
                            <input type="text" className="new_registration_text7" id="alert-dialog-description" name="place" defaultValue={props.rowData.place.trim()} placeholder="" onChange = {(e) => eventInformationChange(e)}></input><br/>
                        </label>
                        <label>
                            <span>実施方式</span><br/>
                            <input type="text" className="new_registration_text8" id="alert-dialog-description" name="method" defaultValue={props.rowData.method} placeholder="" onChange = {(e) => eventInformationChange(e)}></input><br/>
                        </label>
                    </div>
                    <label className="new_registration_time2">
                        <span>締め切り</span><br/>
                        <SimpleDatePicker name="deadline" data={props.rowData.deadline.trim().replace("/","-").replace("/","-")+'T23:59'} setDate = {eventInformationChange} onChange = {(e) => eventInformationChange(e)}/><br/>
                    </label>
            </div>
            {/* </DialogContentText> */}
            </DialogContent>
            <DialogActions>
            <div className="new_registration_button_center">
                <Button className="new_registration_button_no" variant="contained" color="error" onClick={props.handleClose}>キャンセル</Button>
                <AlertDialog5 event={event} start={event.start} onClick={props.handleClose}/>
            </div>
            </DialogActions>
        </Dialog>
        </React.Fragment>
    );
}