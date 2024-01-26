import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../../css/User_modal/report.css';
import '../../css/User_modal/confirmation.css';
import companyService from '../../service/api/companyService'
import { useContext } from 'react'
import {HomeContext} from "../../pages/User/Home"

export default function AlertDialog8(props) {
    const [applyReport,setApplyReport] = React.useState(props.rowData)
    console.log(applyReport)
    // 入力変更
    const applyInformationChange = (e) => {
        setApplyReport({
            ...applyReport, [e.target.name]: e.target.value
        });
    }
    const methodReflesh = useContext(HomeContext)


    const update = () => {
        // ({
        //     ...applyReport, [student_number]: props.rowData.student.student_number
        // });

        // studentの情報を削除する
        delete applyReport.student
        // 申請状態を更新する
        applyReport.situation = "6.報告承認待ち"

        const today = new Date()

                const year = today.getFullYear()
                const month = ('0' + (today.getMonth() + 1)).slice(-2)
                const day = ('0' + today.getDate()).slice(-2)
                const hours = ('0' + today.getHours()).slice(-2)
                const minutes = ('0' + today.getMinutes()).slice(-2)

                const update_date = (year + '-' + month + '-' + day + 'T' + hours + ':' + minutes)
                applyReport.updateDate = update_date
                console.log(applyReport)
        //送信データ
        // const sendData = {
        //     id:   applyReport.id,
        //     situation:   "6.報告承認待ち",
        //     compatibleForm:   applyReport.compatibleForm,
        //     position:   applyReport.position,
        //     report:   applyReport.report,
        //     schedule:   applyReport.schedule,
        //     number:   applyReport.number,
        //     result:   applyReport.result,
        //     updateDate:   todayStart,
        // }

        //報告処理を行う
        companyService.reportupdate(applyReport)
                .then(response => {
                    if (response.data) {
                        // alert("報告完了")
                    } else {
                        alert("項目が足りません")
                    }
                })
                .catch(error => {
                    console.error(error);
                });
                methodReflesh.changeR()
                props.handleClose()
    }
    return (
        <React.Fragment>
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        <div className="confirmation_width">
            <DialogTitle id="alert-dialog-title">
            <p className="confirmation_title">報告画面</p>
            </DialogTitle>
            <DialogContent>
            {/* <DialogContentText id="alert-dialog-description"> */}
            <div className="confirmation_card">
                <div className="confirmation_top"/>
                <div className="confirmation_card_texts">
                    <label className="confirmation_card_label">
                        <h5 className="confirmation_card_text_name">申請番号</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.id}</h5>
                    </label>
                    <label>
                        <h5 className="confirmation_card_text_name">状態</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.situation}</h5>
                    </label>
                </div>
                <div className="confirmation_card_texts">
                    <label className="confirmation_card_label2">
                        <h5 className="confirmation_card_text_name">学籍番号</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.student.student_number}</h5>
                    </label>
                    <label className="confirmation_card_label3">
                        <h5 className="confirmation_card_text_name">クラス番号</h5>

                        <h5 className="confirmation_card_text_name2">{props.rowData.student.year.trim()}{props.rowData.student.group}{props.rowData.student.student_number}</h5>

                    </label>
                    <label className="confirmation_card_label4">
                        <h5 className="confirmation_card_text_name">氏名</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.student.name}</h5>
                    </label>
                </div>
                <label className="confirmation_card_label4_none">
                    <h5 className="confirmation_card_text_name">氏名</h5>
                    <h5 className="confirmation_card_text_name2">{props.rowData.student.name}</h5>
                </label>
                <hr className="confirmation_card_hrs"/>
                <div className="confirmation_card_texts">
                    <label className="confirmation_card_label5">
                        <h5 className="confirmation_card_text_name">イベント形態</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.eventFormat}</h5>
                    </label>
                    <label className="confirmation_card_label6">
                        <h5 className="confirmation_card_text_name">場所区分</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.locationClassification}</h5>
                    </label>
                    <label className="confirmation_card_label9">
                        <h5 className="confirmation_card_text_name">学校申し込み</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.application}</h5>
                    </label>
                </div>
                <label className="confirmation_card_label9_none">
                    <h5 className="confirmation_card_text_name">学校申し込み</h5>
                    <h5 className="confirmation_card_text_name2">{props.rowData.application}</h5>
                </label>
                <div className="confirmation_card_texts">
                    <label className="confirmation_card_label7">
                        <h5 className="confirmation_card_text_name">会社名</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.companyName}</h5>
                    </label>
                    <label>
                        <h5 className="confirmation_card_text_name">場所</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.placeOfImplementation}</h5>
                    </label>
                </div>
                <div className="confirmation_card_texts">
                    <label className="confirmation_card_label11">
                        <h5 className="confirmation_card_text_name">開始日時</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.startDate}</h5>
                    </label>
                    <label className="confirmation_card_label8">
                        <h5 className="confirmation_card_text_name">終了日時</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.endDate}</h5>
                    </label>
                    <label className="confirmation_card_label10">
                        <h5 className="confirmation_card_text_name">授業担当確認</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.confirmation}</h5>
                    </label>
                </div>
                <label className="confirmation_card_label10_none">
                    <h5 className="confirmation_card_text_name">授業担当確認</h5>
                    <h5 className="confirmation_card_text_name2">{props.rowData.confirmation}　</h5>
                </label>
                <label>
                    <h5 className="confirmation_card_text_name">遅刻/欠席/早退</h5>
                    <h5 className="confirmation_card_text_name2">{props.rowData.eventClassification}　</h5>
                </label>
                <label>
                    <h5 className="confirmation_card_text_name">申請時補足機能</h5>
                    <h5 className="confirmation_card_text_name2">{props.rowData.information}　</h5>
                </label>
                <hr className="confirmation_card_hrs"/>
                <div className="confirmation_card_texts">
                    <label className="report_text">
                        <h5 className="report_text_name">対応形態</h5>
                        <input type="text" className="report_text_form" onChange={(e) => applyInformationChange(e)} name="compatibleForm" defaultValue={props.rowData.compatibleForm}></input>
                    </label>
                    <label className="report_margin5">
                        <h5 className="report_text_name">対応人数</h5>
                        <input type="number" className="report_text_num" onChange={(e) => applyInformationChange(e)} name="number" defaultValue={props.rowData.number}></input>人
                    </label>
                    <label className="report_label_none1">
                        <h5 className="report_text_name">主な対応役職</h5>
                        <input type="text" className="report_text_post" onChange={(e) => applyInformationChange(e)} name="position" defaultValue={props.rowData.position}></input>
                    </label>
                </div>
                    <label className="report_label_none2">
                            <h5 className="report_text_name2">主な対応役職</h5>
                            <input type="text" className="report_text_post" onChange={(e) => applyInformationChange(e)} name="position" defaultValue={props.rowData.position}></input>
                        </label>
                    <label>
                    <h5 className="report_margin">報告内容</h5>
                    <textarea type="text" className="report_textarea" onChange={(e) => applyInformationChange(e)} name="report" defaultValue={props.rowData.report}></textarea>
                </label>
                <div className="confirmation_card_texts">
                    <label className="report_margin2">
                        <h5 className="report_margin3">結果区分</h5>
                        <select  className="reoprt_select" onChange={(e) => applyInformationChange(e)} name="result">
                        <option defaultValue="" >選択必須</option>    
                            <option defaultValue="結果待ち"  >結果待ち</option>
                            <option defaultValue="辞退"  >辞退</option>
                            <option defaultValue="継続（合格）"  >継続（合格）</option>
                            <option defaultValue="不合格"  >不合格</option>
                            <option defaultValue="内定"  >内定</option>
                            <option defaultValue="内定辞退"  >内定辞退</option>
                            <option defaultValue="他"  >他</option>
                        </select>
                    </label>
                    <label className="report_margin4">
                        <h5 className="report_margin3">今後の動き</h5>
                        <textarea type="text" className="report_textarea2" onChange={(e) => applyInformationChange(e)} name="schedule" defaultValue={props.rowData.schedule}></textarea>
                    </label>
                </div>
                <hr className="confirmation_card_hrs"/>
                <label>
                    <h5 className="confirmation_card_text_name">コメント</h5>
                    <h5 className="confirmation_card_text_name4">{props.rowData.comments}　</h5>
                </label>
                <hr className="confirmation_card_hrs2"/>
                <div className="confirmation_card_texts2">
                    <label className="confirmation_card_label7">
                        <h5 className="confirmation_card_text_name">登録日時</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.registrationDate}</h5>
                    </label>
                    <label>
                        <h5 className="confirmation_card_text_name">更新日時</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.updateDate}</h5>
                </label>
            
                </div>
            <div className="report_button_center">
                {/* <Button className="report_button_ok"variant="contained" color="primary" onClick={() => {props.handleClose("報告")}} >報告</Button>
                    */}
                    <Button className="report_button_ok"variant="contained" color="primary" onClick={() => update()} >報告</Button>
            </div>
		    </div>
            {/* </DialogContentText> */}
            </DialogContent>
            <DialogActions>

            </DialogActions>
            </div>
        </Dialog>
        </React.Fragment>
    );
}
