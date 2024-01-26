import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../../css/User_modal/application_form.css';
import AlertDialog3 from './application_complete'
import SimpleDatePicker from '../parts/date';
import Stack from '@mui/material/Stack';
import { useAuth } from '../../service/store/auth';
import Select from "react-select";

// イベント区分の選択
const optionsEvent = [
    { value: "1", label: "説明会_単", }, { value: "2", label: "説明会_合", }, { value: "3", label: "説明会_面接", },
    { value: "4", label: "試験_面接", }, { value: "5", label: "試験_適正", }, { value: "6", label: "試験_その他", },
    { value: "7", label: "インターン", }, { value: "8", label: "セミナー", }, { value: "9", label: "研修", },
    { value: "10", label: "他", },
];
// 場所区分の選択
const optionsPlace = [
    { value: "1", label: "学校", }, { value: "2", label: "自宅", },
    { value: "3", label: "市内", }, { value: "4", label: "道内", }, { value: "5", label: "道外", },
    { value: "6", label: "他", },

]
export default function AlertDialog2(props) {
    //日付選択
    const today = new Date()
    const year = today.getFullYear()
    const month = ('0' + (today.getMonth() + 1)).slice(-2)
    const day = ('0' + today.getDay()).slice(-2)
    const hours = ('0' + today.getHours()).slice(-2)
    const hoursEnd = ('0' + (today.getHours() + 1)).slice(-2)
    const minutes = ('0' + today.getMinutes()).slice(-2)
    const todayStart = (year + '-' + month + '-' + day + 'T' + hours + ':' + minutes)
    const todayEnd = (year + '-' + month + '-' + day + 'T' + hoursEnd + ':' + minutes)

    const auth = useAuth()

    //ホームからの申請はtrue
    const [flg, setFlg] = React.useState(true);

    const [applyInfo, setApplyInfo] = React.useState({
        id:props.rowData.id,
        student_number: auth.user.student_number,
        //eventFormat: optionsEvent[0],
         eventFormat: "",
        //locationClassification: optionsPlace[0],
         locationClassification: "",
        application: false,
        companyName: "",
        place_of_implementation: "",
        startDate: todayStart,
        endDate: todayEnd,
        eventClassification: "",
        information: "",
    })

    // 入力
    const applyInformationChange = (e) => {
        setApplyInfo({
            ...applyInfo, [e.target.name]: e.target.value
        });
        console.log(applyInfo)
    }
    // チェックのON OFF
    const applicationSw = (e) => {
        if (applyInfo.application) {
            setApplyInfo({
                ...applyInfo, [e.target.name]: false
            });
        }
        else if (!applyInfo.application) {
            setApplyInfo({
                ...applyInfo, [e.target.name]: true
            });
        }
        console.log(applyInfo)
        console.log(auth.user)
    }
    // 区分の入れ替え
    const EventClassChange = (e, targetName) => {
        setApplyInfo({
            ...applyInfo, [targetName]: e.label
        })
    }


    return (
        <React.Fragment>
            <Stack direction="row" spacing={2}>
            </Stack>
            {/* <Button className="application_form_modal_button" variant="outlined" onClick={handleClickOpen}>
            申請する
        </Button> */}
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <div className="application_form_top">
                        <div className="application_form_title">
                            {"申請フォーム"}
                        </div>
                        <div className="application_form_user">
                            <p className="application_form_user_font">あなたの学籍番号:{auth.user.attendance_number}</p>
                            <p className="application_form_user_font">あなたのクラス番号:?{auth.user.year}{auth.user.group}?{auth.user.student_number}</p>
                            <p className="application_form_user_font">あなたの名前:{auth.user.name}</p>
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent>
                    {/* <DialogContentText id="alert-dialog-description"> */}
                    <div className="application_form_main">
                        <div className='application_form_select'>
                            <Select id="alert-dialog-description"
                                className="application_form_text1"
                                options={optionsEvent}
                                defaultValue={applyInfo.eventFormat}
                                onChange={(e) => EventClassChange(e, "eventFormat")}
                            />
                            <Select className="application_form_text2"
                                id="alert-dialog-description"
                                options={optionsPlace}
                                defaultValue={applyInfo.locationClassification}
                                onChange={(e) => EventClassChange(e, "locationClassification")}
                            />
                        </div>

                        <div className="application_form_toggle-buttons">
                            <h5 className="application_form_toggle-button-margin">学校（担任）を通じて申し込み</h5>
                            <label className="application_form_toggle-button">
                                <input type="checkbox" name="application" value={applyInfo.application} onChange={(e) => applicationSw(e)} />
                            </label>
                        </div>

                        <label>
                            <span>
                                会社(正式名称,省略不可)
                            </span><br />
                            <input type="text" defaultValue={applyInfo.companyName} name='companyName' onChange={(e) => applyInformationChange(e)} className="application_form_text3" id="alert-dialog-description" placeholder="株式会社〇〇〇" ></input><br />
                        </label>
                        <label>
                            <span>実施場所</span><br />
                            <input defaultValue={applyInfo.place_of_implementation} name='place_of_implementation' onChange={(e) => applyInformationChange(e)} type="text" className="application_form_text3" id="alert-dialog-description" placeholder="901教室"></input><br />
                        </label>

                        <div className="application_form_time">
                            <label className="application_form_time-margin3">
                                <span>開始日時</span><br />
                                <SimpleDatePicker name="startDate" data={applyInfo.startDate} setDate={applyInformationChange} />
                                <br />

                            </label>
                            <h3 className="application_form_time-margin2">～</h3>
                            <label>
                                <span>終了日時</span><br />

                                <SimpleDatePicker name="endDate" data={applyInfo.endDate} setDate={applyInformationChange} /><br />

                            </label>
                        </div>
                        <label>
                            <span>遅刻/欠席/早退予定（必要最低限）</span><br />
                            <textarea onChange={(e) => applyInformationChange(e)} defaultValue={applyInfo.eventClassification} className="application_form_textarea" name="eventClassification" wrap="hard" placeholder='なし / 14:00から早退(遅刻) / 終日欠席'></textarea>
                        </label>
                        <label>
                            <span>申請時補足事項（移動手段や詳細情報など）</span><br />
                            <textarea onChange={(e) => applyInformationChange(e)} defaultValue={applyInfo.information} className="application_form_textarea" name="information" wrap="hard" placeholder='なし / ANAXXX新千歳→羽田 〇〇時発 / その他の補足事項'></textarea>
                        </label>
                    </div>
                    {/* </DialogContentText> */}
                </DialogContent>
                <DialogActions>

                    <div className="application_form_button_center">
                        <Button className="detail_button_no" variant="contained" color="error" onClick={props.handleClose}>キャンセル</Button>
                        <AlertDialog3 handleCloseApplicationForm={props.handleClose} appllyInfo={applyInfo} flg={flg}/>
                    </div>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}
