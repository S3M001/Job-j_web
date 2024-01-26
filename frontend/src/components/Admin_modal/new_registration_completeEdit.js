import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../../css/Admin_modal/new_registration_complete.css';
import Stack from '@mui/material/Stack';
import AdminService from  '../../service/api/adminService';
import { useContext } from 'react'
import {CompanyListContext} from "../../pages/Admin/AdminCompanyList"

export default function AlertDialog5({ event,onClick}) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        if(onClick){
            onClick()
        }
        setOpen(false);
    };
    const methodReflesh = useContext(CompanyListContext)


    const register = async (e) => {
        if(event.start.length > 0 && event.deadline.length > 0 && event.name.length > 0){
            // 会社名と時間が入力されているならば、会社情報と説明会情報を作成
            e.preventDefault();
            setOpen(true);
            const date = event.start.split("T")
            const deadline = event.deadline.split("T")
            event.start_date = date[0].replace(/-/g, "/")
            event.start_time = date[1]
            event.deadline = deadline[0].replace(/-/g, "/")
            //test
            console.log(event)
            try {
                const reponseEvent = await AdminService.updateEvent(event)
                console.log(reponseEvent)
            } catch (e) {
                console.error(e);
            }
        }
        else {
            alert("時間と会社名は必須です。");
        }
        methodReflesh.changeR()
    }

    return (
        <React.Fragment>
        <Stack direction="row" spacing={2}>
            <Button className="new_registration_complete_button" variant="contained" color="primary" type="submit" onClick={(e)=>register(e)}>変更</Button>   
        </Stack>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <div className="new_registration_completes">
                    <h1 className="new_registration_complete_message">登録変更完了</h1>
                    <br/>
                    <Button className="new_registration_complete_ok" variant="contained" color="inherit" onClick={handleClose} >完了</Button>
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
