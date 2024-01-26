import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../../css/Admin_modal/Admin_comment.css';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import "../../css/Admin_modal/Admin_editCompany.css";
import AdminService from  '../../service/api/adminService';

export default function AlertDialog10(props) {
    const [form, setForm] = React.useState(props.row)
    console.log(form)

    const changeForm = (e) => {
        console.log(form)
        setForm({
            ...form, [e.target.name] : e.target.value
        })
    }
    
    const onClickSubmit = () => {
        AdminService.updateCompany(form)
        .then((res) => {
            if(res){
                console.log("successfully updated")
            }
        })
        .catch(() => {
            console.log("Failed to register company")
        }) 
        props.handleClose()
        props.reflesh()
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
            <>企業情報変更画面  </>
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="on"
                    >
                    <div className='Admin_editCompany_textDiv'>
                        <TextField
                        required
                        id="outlined-required"
                        label="企業名"
                        name='name'
                        defaultValue={form.name}
                        onChange={(e) => changeForm(e)}
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="本社所在地"
                        name='location'
                        defaultValue={form.location}
                        onChange={(e) => changeForm(e)}
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="従業員数"
                        name='number'
                        defaultValue={form.number}
                        onChange={(e) => changeForm(e)}
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="ホームページ"
                        name='website'
                        defaultValue={form.website}
                        onChange={(e) => changeForm(e)}
                        />
                    </div>
                </Box>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <div className="Admin_comment_right">
                <Button className="detail_button_no" onClick={props.handleClose}>キャンセル</Button>
                <Button className="detail_button_no" onClick={onClickSubmit}>変更</Button>
            </div>
            </DialogActions>
        </Dialog>
        </React.Fragment>
    );
}
