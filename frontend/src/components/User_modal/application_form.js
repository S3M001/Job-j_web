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
import '../../css/Admin_modal/new_registration.css';
//import companyService from '../../service/api/companyService'

// イベント区分の選択
//urlのターゲットとかがエラーを出している
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
export default function AlertDialog2({ className1, disabled, icon, cardInfo, handleCloseDetail,nextCompanyName,nextApply}) {
    const [open, setOpen] = React.useState(false);

    const [flg, setFlg] = React.useState(false);

    // const today = new Date()

    // const year = today.getFullYear()
    // const month = ('0' + (today.getMonth() + 1)).slice(-2)
    // const day = ('0' + today.getDate()).slice(-2)
    // const hours = ('0' + today.getHours()).slice(-2)
    // const hoursEnd = ('0' + (today.getHours() + 1)).slice(-2)
    // const minutes = ('0' + today.getMinutes()).slice(-2)
    // const todayStart = (year + '-' + month + '-' + day + 'T' + hours + ':' + minutes)
    // const todayEnd = (year + '-' + month + '-' + day + 'T' + hoursEnd + ':' + minutes)

    const auth = useAuth()

    const [applyInfo, setApplyInfo] = React.useState({
        student_number: auth.user.student_number,
        //eventFormat: optionsEvent[0],
        eventFormat: "",
        //locationClassification: optionsPlace[0],
        locationClassification: "",
        application: false,
        companyName: "",
        place_of_implementation: "",
        startDate: "",
        endDate: "",
        eventClassification: "",
        registrationDate:"",
        updateDate:"",
        information: "",
    })
    console.log(applyInfo)

    const handleClickOpen = () => {
        setOpen(true);
        // setApplyInfo({
        //     ...applyInfo, application: true
        // })
        if (cardInfo) {
            setApplyInfo(
                {   // 1/25
                    //checked={applyInfo.app;lication}を消して、上のapplicationをtrueからfalseへ変更、小林君のを追加、cardInfoをどうするかの途中で終わった
                    ...applyInfo,
                    application: true,
                    companyName: cardInfo.company.name,
                    place_of_implementation: cardInfo.place.trim(),
                    startDate: cardInfo.event_date.trim().replace("/", "-").replace("/", "-") + "T" + cardInfo.date_and_time.trim(),
                    endDate: "",
                }
            )
        }
        //追加したやつ
        if (nextCompanyName){
            setApplyInfo(
                {
                    ...applyInfo,
                    companyName: nextCompanyName,
                    application:nextApply
                   
                }
            )
        }
    };

    // //申請ボタンを押した
    // const coporateinsert = (e) => {
    //     //e.preventDefault();
    //     //insertに遷移しない 1/16
    //     console.log("test")
    //     companyService.coporateinsert(applyInfo)
    //     .then(response => {
    //         if (response.data) {
    //             alert("申請が完了しました")
    //         } else {
    //             alert("項目が足りません")
    //         }
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });
    // }

    const handleClose = () => {
        setOpen(false);
    };

    // 入力
    const applyInformationChange = (e) => {
        setApplyInfo({
            ...applyInfo, [e.target.name]: e.target.value
        });
        // console.log(applyInfo)
    }
    // チェックのON OFF
    const applicationSw = (e) => {
        console.log(e)
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
        // console.log(applyInfo)
        // console.log(auth.user)
        // console.log(cardInfo)
    }
    // 区分の入れ替え
    const EventClassChange = (e, targetName) => {
        setApplyInfo({
            ...applyInfo, [targetName]: e.label
            //...applyInfo, [targetName]: { value: e.value, target: e.label }
        })
        //console.log(applyInfo)
    }


    return (
        <React.Fragment>
            <Stack direction="row" spacing={2}>
                <Button className={className1} variant="contained" disabled={disabled} color="primary" onClick={handleClickOpen}>{icon}</Button>
            </Stack>
            {/* <Button className="application_form_modal_button" variant="outlined" onClick={handleClickOpen}>
            申請する
        </Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <div className="application_form_top">
                        <div className="application_form_title">
                            {"申請フォーム"}
                        </div>
                        <div className="application_form_user">
                            <p className="application_form_user_font">あなたの学籍番号:{auth.user.student_number}</p>
                            <p className="application_form_user_font">あなたのクラス番号:{auth.user.year}{auth.user.group}{auth.user.attendance_number}</p>
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
                                placeholder="イベント形態 *"
                            />
                            <Select className="application_form_text2"
                                id="alert-dialog-description"
                                options={optionsPlace}
                                defaultValue={applyInfo.locationClassification}
                                onChange={(e) => EventClassChange(e, "locationClassification")}
                                placeholder="場所区分 *"
                            />
                        </div>

                        <div className="application_form_toggle-buttons">
                            <h5 className="application_form_toggle-button-margin">学校（担任）を通じて申し込み</h5>
                            <label className="application_form_toggle-button">
                                <input type="checkbox" name="application" checked={applyInfo.application} defaultValue={applyInfo.application} onChange={(e) => applicationSw(e)} />
                            </label>
                        </div>

                        <label>
                            <span>
                                会社(正式名称,省略不可)<span className='new_registration_indispensable'>＊</span>
                            </span><br />
                            <input type="text" defaultValue={applyInfo.companyName} name='companyName' onChange={(e) => applyInformationChange(e)} className="application_form_text3" id="alert-dialog-description" placeholder="株式会社〇〇〇" ></input><br />
                        </label>
                        <label>
                            <span>実施場所<span className='new_registration_indispensable'>＊</span></span><br />
                            {/* <input defaultValue={applyInfo.place_of_implementation} name='place' onChange={(e) => applyInformationChange(e)} type="text" className="application_form_text3" id="alert-dialog-description" placeholder="901教室"></input><br /> */}
                            <input defaultValue={applyInfo.place_of_implementation} name='place_of_implementation' onChange={(e) => applyInformationChange(e)} type="text" className="application_form_text3" id="alert-dialog-description" placeholder="901教室"></input><br />
                        </label>

                        <div className="application_form_time">
                            <label className="application_form_time-margin3">
                                <span>開始日時<span className='new_registration_indispensable'>＊</span></span><br />
                                <SimpleDatePicker name="startDate" data={applyInfo.startDate} setDate={applyInformationChange} />
                                <br />

                            </label>
                            <h3 className="application_form_time-margin2">～</h3>
                            <label>
                                <span>終了日時<span className='new_registration_indispensable'>＊</span></span><br />

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
                        <Button className="detail_button_no" variant="contained" color="error" onClick={handleClose}>キャンセル</Button>
                        <AlertDialog3 handleCloseDetail={handleCloseDetail} handleCloseApplicationForm={handleClose} appllyInfo={applyInfo}  flg={flg}/>
                    </div>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}
