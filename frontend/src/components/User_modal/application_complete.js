import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../../css/User_modal/application_complete.css';
import Stack from '@mui/material/Stack';
import companyService from '../../service/api/companyService'

export default function AlertDialog3({ handleCloseDetail, handleCloseApplicationForm, appllyInfo, flg }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        if (handleCloseDetail) {
            handleCloseDetail()
        }
        handleCloseApplicationForm()
        setOpen(false);
    };

    const handleClickApply = () => {
        console.log(appllyInfo)
        //申請ボタンを押した
            
        //flgがtrue→ホームからの申請 false→企業申請からの申請
            if(flg){
                companyService.coporateupdate(appllyInfo)
                .then(response => {
                    if (response.data) {
                        //alert("申請が完了しました")
                        handleClickOpen()
                    } else {
                        alert("項目が足りません")
                    }
                })
                .catch(error => {
                    console.error(error);
                });
            }else{
                const today = new Date()

                const year = today.getFullYear()
                const month = ('0' + (today.getMonth() + 1)).slice(-2)
                const day = ('0' + today.getDate()).slice(-2)
                const hours = ('0' + today.getHours()).slice(-2)
                const minutes = ('0' + today.getMinutes()).slice(-2)

                const registration_date = (year + '-' + month + '-' + day + 'T' + hours + ':' + minutes)
                appllyInfo.registrationDate = registration_date
                //登録日時と更新日時は同じ
                appllyInfo.updateDate = registration_date
                companyService.coporateinsert(appllyInfo)
                .then(response => {
                    // if (response.data) {
                    //     //alert("申請が完了しました")
                    //     handleClickOpen()
                    // } else {
                    //     alert("項目が足りません")
                    // }
                    if(response.data === "ok"){
                        handleClickOpen()
                    }else if(response.data === "no"){
                        alert("エラー")
                    }else if(response.data === "開始日時の年が終了日時の年より大きいです"){
                        alert(response.data)
                    }else if(response.data === "開始日時の月が終了日時の月より大きいです"){
                        alert(response.data)
                    }else if(response.data === "開始日時の日付が終了日時の日付より大きいです"){
                        alert(response.data)
                    }else if(response.data === "開始日時の時間が終了日時の時間より大きいです"){
                        alert(response.data)
                    }else if(response.data === "開始日時の分数が終了日時の分数より大きいです"){
                        alert(response.data)
                    }else{
                        //項目が足りない場合
                        alert(response.data)
                    }
                })
                .catch(error => {
                    console.error(error);
                });
            }
        console.log("申し込み完了")
        //handleClickOpen()
    }

    return (
        <React.Fragment>
            <Stack direction="row" spacing={2}>
                <Button onClick={() => handleClickApply()} className="application_form_modal_button" variant="contained" color="primary">申請する</Button>
            </Stack>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <div className="application_completes">
                        <h1 className="application_complete_message" onClick={handleClose}>申請完了</h1>
                        <br />
                        <Button className="application_complete_button" variant="contained" color="inherit" onClick={handleClose}>完了</Button>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
