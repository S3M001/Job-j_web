import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../../css/Admin_modal/Admin_comment.css';
import Stack from '@mui/material/Stack';
import applyService from '../../service/api/applyService';


export default function AlertDialog10(props) {
    const [open, setOpen] = React.useState(false);
    const [comment, setComment] = React.useState(props.comment);

    //現在時刻
    const today = new Date()

    const year = today.getFullYear()
    const month = ('0' + (today.getMonth() + 1)).slice(-2)
    const day = ('0' + (today.getDay()+14)).slice(-2)
    const hours = ('0' + today.getHours()).slice(-2)
    const minutes = ('0' + today.getMinutes()).slice(-2)
    const todayStart = (year + '-' + month + '-' + day + 'T' + hours + ':' + minutes)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onClickSendComments = () => {
        //Todo OKで変更したメモの内容をそのままデータベースに登録する
        const sendData = {
            id: props.rowData.id,
            comments: comment,
            updateDate: todayStart
        }
        props.changeComment(comment)
        applyService.updateComments(sendData)
        .then((res) => {
            if(res){
                console.log("コメントの更新が完了しました。")
            }
        })
        .catch((err) => {
            console.error(err)
        })
        handleClose()
    }

    const changeComment = (e) => {
        setComment(e.target.value);
    }

    return (
        <React.Fragment>
        <Stack direction="row" spacing={2}>
            <Button className="Admin_comment_button"variant="contained" color="inherit" onClick={handleClickOpen}><h5 className="Admin_comment_button_h5">コメント入力・変更</h5></Button>   
        </Stack>   
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            <p className="Admin_comment_title">コメント入力・変更</p>
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <textarea className="Admin_comment_textarea" defaultValue={comment} onChange={(e) => changeComment(e)}></textarea>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <div className="Admin_comment_right">
                <Button variant="contained" color="primary" onClick={onClickSendComments}>ok</Button>
                {/* <Button className="detail_button_no" onClick={handleClose}>キャンセル</Button> */}
            </div>
            </DialogActions>
        </Dialog>
        </React.Fragment>
    );
}
