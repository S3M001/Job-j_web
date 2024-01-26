import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../../css/User_modal/detail.css';
import AlertDialog2 from './application_form';
import Stack from '@mui/material/Stack';


export default function AlertDialog1({ rowData,open,handleClickOpen,handleClose }) {

    return (
        <React.Fragment>
            <Stack direction="row" spacing={2}>
                <Button className="detail_modal_button" variant="outlined" color="primary" size="small" onClick={handleClickOpen}>詳細({rowData.deadline.substring(5,10 )}まで)</Button>
            </Stack>
            {/* <Button className="detail_modal_button" variant="outlined" onClick={handleClickOpen}>
            詳細
        </Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="detail_width">
                    <DialogTitle id="alert-dialog-title">
                        <div className="detail_titles">
                            <div className="detail_title_top">
                                <h6 className="detail_title">SEQ:{rowData.briefing_session_id}</h6>
                                <div className='detail_title_flex'>
                                    <h3 className="detail_title">{rowData.company.name}</h3>
                                    <h6 className="detail_title_now2">new</h6>
                                </div>
                                <h6 className="detail_title">本社所在地: {rowData.company.location}</h6>
                            </div>
                        </div>


                    </DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText id="alert-dialog-description"> */}
                        <div className="detail_card">
                            <p className="detail_card_title">-募集要項-</p>
                            <p className="detail_card_text">募集職種：{rowData.occupation}</p>
                            <p className="detail_card_text">募集勤務地：{rowData.location}</p>
                            <p className="detail_card_text">募集告知：<a href={rowData.announcement}>url</a></p>
                            <p className="detail_card_text">募集文：<a href={rowData.letter}>url</a></p>
                            <p className="detail_card_text">申し込み先：{rowData.apply}</p>
                        </div>
                        <div className="detail_card">
                            <p className="detail_card_title">-実施内容-</p>
                            <p className="detail_card_text">開催日：{rowData.event_date}</p>
                            <p className="detail_card_text">開催時間：{rowData.date_and_time}</p>
                            <p className="detail_card_text">実施場所：{rowData.place}</p>
                            <p className="detail_card_text">実施方式：{rowData.method}</p>
                        </div>
                        {/* </DialogContentText> */}
                    </DialogContent>
                    <h5 className="detail_days">締切：{rowData.deadline}</h5>
                    <DialogActions>
                        <div className="detail_button_center">
                            <Button className="detail_button_no" variant="contained" color="error" onClick={handleClose}>キャンセル</Button>
                            {/* <Button className="detail_button_no" onClick={handleClose}>キャンセル</Button> */}
                            <AlertDialog2 className1="application_form_modal_button" icon="申請する" cardInfo={rowData} handleCloseDetail={handleClose} />
                        </div>
                    </DialogActions>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
