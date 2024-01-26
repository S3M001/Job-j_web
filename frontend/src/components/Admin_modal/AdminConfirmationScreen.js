import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../../css/Admin_modal/Admin_comment.css';
import '../../css/User_modal/confirmation.css';
import '../../css/Admin_modal/Admin_report_confitmation.css';
import AlertDialog10 from '../Admin_modal/Admin_comment';

export default function AlertDialog9(props) {
    const [, rernder] = React.useState("")
    const changeComments = (comment) => {
        props.rowData.row.comments = comment
        rernder(comment)
    }
    console.log(props)

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
            {props.rowData.situation === "2.申請承認待ち" && <p className="confirmation_title">申請承認待ち画面</p>}
            {props.rowData.situation === "7.報告完了" && <p className="confirmation_title">確認画面</p>}
            {props.rowData.situation === "6.報告承認待ち" && <p className="confirmation_title">報告承認待ち画面</p>}
            </DialogTitle>
            <DialogContent>
            {/* <DialogContentText id="alert-dialog-description"> */}
            <div className="confirmation_card">
                <div className="confirmation_top"/>
                <div className="confirmation_card_texts">
                    <label className="confirmation_card_label">
                        <h5 className="confirmation_card_text_name">申請番号</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.id}</h5>
                    </label>
                    <label>
                        <h5 className="confirmation_card_text_name">状態</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.situation}</h5>
                    </label>
                </div>
                <div className="confirmation_card_texts">
                    <label className="confirmation_card_label2">
                        <h5 className="confirmation_card_text_name">学籍番号</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.student_number}</h5>
                    </label>
                    <label className="confirmation_card_label3">
                        <h5 className="confirmation_card_text_name">クラス番号</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.student.year.trim()}{props.rowData.row.student.group}{props.rowData.row.student.student_number}</h5>
                    </label>
                    <label className="confirmation_card_label4">
                        <h5 className="confirmation_card_text_name">氏名</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.student.name}</h5>
                    </label>
                </div>
                <label className="confirmation_card_label4_none">
                    <h5 className="confirmation_card_text_name">氏名</h5>
                    <h5 className="confirmation_card_text_name2">{props.rowData.row.student.name}</h5>
                </label>
                <hr className="confirmation_card_hrs"/>
                <div className="confirmation_card_texts">
                    <label className="confirmation_card_label5">
                        <h5 className="confirmation_card_text_name">イベント形態</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.eventFormat}</h5>
                    </label>
                    <label className="confirmation_card_label6">
                        <h5 className="confirmation_card_text_name">場所区分</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.locationClassification}</h5>
                    </label>
                    <label className="confirmation_card_label9">
                        <h5 className="confirmation_card_text_name">学校申し込み</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.application}</h5>
                    </label>
                </div>
                <label className="confirmation_card_label9_none">
                    <h5 className="confirmation_card_text_name">学校申し込み</h5>
                    <h5 className="confirmation_card_text_name2">{props.rowData.row.application}</h5>
                </label>
                <div className="confirmation_card_texts">
                    <label className="confirmation_card_label7">
                        <h5 className="confirmation_card_text_name">会社名</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.companyName}</h5>
                    </label>
                    <label>
                        <h5 className="confirmation_card_text_name">場所</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.placeOfImplementation}</h5>
                    </label>
                </div>
                <div className="confirmation_card_texts">
                    <label className="confirmation_card_label11">
                        <h5 className="confirmation_card_text_name">開始日時</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.startDate}</h5>
                    </label>
                    <label className="confirmation_card_label8">
                        <h5 className="confirmation_card_text_name">終了日時</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.endDate}</h5>
                    </label>
                    <label className="confirmation_card_label10">
                        <h5 className="confirmation_card_text_name">授業担当確認</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.confirmation}</h5>
                    </label>
                </div>
                <label className="confirmation_card_label10_none">
                    <h5 className="confirmation_card_text_name">授業担当確認</h5>
                    <h5 className="confirmation_card_text_name2">{props.rowData.row.confirmation}</h5>
                </label>
                <label>
                    <h5 className="confirmation_card_text_name">遅刻/欠席/早退</h5>
                    <h5 className="confirmation_card_text_name2">{props.rowData.row.eventClassification}</h5>
                </label>
                <label>
                    <h5 className="confirmation_card_text_name">申請時補足事項</h5>
                    <h5 className="confirmation_card_text_name2">{props.rowData.row.information}</h5>
                </label>
                <hr className="Admin_report_confitmation_hr"/>
                {props.rowData.situation !== "2.申請承認待ち" &&
                    <>
                        <div className="confirmation_card_texts">
                            <label className="Admin_report_confitmation_label">
                                <h5 className="Admin_report_confitmation_text">対応形態</h5>
                                {props.rowData.row.compatibleForm
                            ? <h5>{props.rowData.row.compatibleForm}</h5>
                            : <p>未入力...</p>
                        }
                            </label>
                            <label className="Admin_report_confitmation_label6">
                                <h5 className="Admin_report_confitmation_text">対応人数</h5>
                                {props.rowData.row.number
                            ? <h5>{props.rowData.row.number}</h5>
                            : <p>未入力...</p>
                        }
                            </label>
                            <label className="Admin_report_confitmation_label2">
                                <h5 className="Admin_report_confitmation_text">主な対応役職</h5>
                                {props.rowData.row.position
                            ? <h5>{props.rowData.row.position}</h5>
                            : <p>未入力...</p>
                        }
                            </label>
                        </div>
                        <label className="Admin_report_confitmation_label3">
                            <h5 className="Admin_report_confitmation_text3">主な対応役職</h5>
                            {props.rowData.row.position
                            ? <h5>{props.rowData.row.position}</h5>
                            : <p>未入力...</p>
                        }
                        </label>
                        <label>
                            <h5 className="Admin_report_confitmation_text2">報告内容</h5>
                            {props.rowData.row.report
                            ? <h5>{props.rowData.row.report}</h5>
                            : <p>未入力...</p>
                        }
                        </label>
                        <div className="confirmation_card_texts">
                            <label className="Admin_report_confitmation_label4">
                                <h5 className="Admin_report_confitmation_text">結果区分</h5>
                                {props.rowData.row.result
                            ? <h5>{props.rowData.row.result}</h5>
                            : <p>未入力...</p>
                        }
                            </label>
                            <label className="Admin_report_confitmation_label5">
                                <h5 className="Admin_report_confitmation_text">今後の動き</h5>
                                {props.rowData.row.schedule
                            ? <h5>{props.rowData.row.schedule}</h5>
                            : <p>未入力...</p>
                        }
                            </label>
                        </div>
                        <hr className="Admin_report_confitmation_hr2"/>
                    </>
                }
                <label>
                    <h5 className="confirmation_card_text_name">コメント</h5>
                    <h5 className="confirmation_card_text_name2">{props.rowData.row.comments}</h5>
                    <AlertDialog10 changeComment={changeComments} comment={props.rowData.row.comments} rowData={props.rowData.row} reflesh={props.reflesh}/>
                </label>
                <hr className="Admin_report_confitmation_hr3"/>
                <div className="confirmation_card_texts">
                    <label className="confirmation_card_label7">
                        <h5 className="confirmation_card_text_name">登録日時</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.registrationDate}</h5>
                    </label>
                    <label>
                        <h5 className="confirmation_card_text_name">更新日時</h5>
                        <h5 className="confirmation_card_text_name2">{props.rowData.row.updateDate}</h5>
                    </label>
                </div>
		    </div>
            {/* </DialogContentText> */}
            </DialogContent>
            <DialogActions>

            <div className="Admin_report_confitmation_button_center">
                <Button className="confirmation_button_ok" variant="contained" color="primary" onClick={() => {props.handleClose()}} >閉じる</Button>   
            </div>
            </DialogActions>
            </div>
        </Dialog>
        </React.Fragment>
    );
}
