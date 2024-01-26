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

export default function AlertDialog5({company, event,onClick,initData}) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        if(onClick){
            onClick()
        }
        setOpen(false);
    };
    const methodReflesh = useContext(CompanyListContext)

    const register = async (e) => {
            // 会社名と時間が入力されているならば、会社情報と説明会情報を作成
        e.preventDefault();
        const date = event.start.split("T")
        const deadline = event.deadline.split("T")
        event.start_date = date[0].replace(/-/g, "/")
        event.start_time = date[1]
        event.deadline = deadline[0].replace(/-/g, "/")
        try {
            const responseCompany = await AdminService.registerCompany(company)
            const responseEvent = await AdminService.registerEvent(event)
            if(!(responseCompany.data && responseEvent.data)){
                alert("必須項目の入力をしてください")
            }else {
                setOpen(true);
            }
        } catch (e) {
            console.error(e);
        }
        if(initData){
            initData()
        }
        methodReflesh.changeR()
    }

    return (
        <React.Fragment>
        <Stack direction="row" spacing={2}>
            <Button className="new_registration_complete_button" variant="contained" color="primary" type="submit" onClick={(e)=>register(e)}>登録</Button>   
        </Stack>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <div className="new_registration_completes">
                    <h1 className="new_registration_complete_message">新規登録完了</h1>
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
