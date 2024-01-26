import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import {  useState } from 'react';
// import CompanyService from "../service/api/companyService"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AlertDialog6 from "../components/Admin_modal/new_registration_edit";
import AdminService from "../service/api/adminService"
import { useContext } from 'react'
import {CompanyListContext} from "../pages/Admin/AdminCompanyList"


export default function AdminCompanyDash(props) {
    const [open, setOpen] = React.useState(false);
    //リダイレクト(リフレッシュ)用の変数
    const methodReflesh = useContext(CompanyListContext)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (anser) => {
        setOpen(false);
    };
    const onClickHandler = (e) => {
        setOpen(true);
        setEvent(e);
    };

    const onClickDelete = (e) => {
        const sendData ={
            id : e.id,
        }
        AdminService.deleteEvent(sendData)
        .then((res) => {
            if(res){
                console.log("削除成功")
            }else{
                console.log("削除失敗")
            }
        })
        .catch((err) => {
            console.error(err)
        })
        //リダイレクト(リフレッシュ)
        methodReflesh.changeR()
    };

        //列情報の保存変数
        const [event ,setEvent] = React.useState({});
    return (
        <div style={{ height: 600, width: '100%', }} className='DashBoard'>
            <DataGrid
                columns={[
                    { field: 'id', headerName: 'ID', hideable: true, width: 20, align: 'center' },
                    { field: 'companyName', headerName: '会社名', hideable: true, width: 300, },
                    { field: 'occupation', headerName: '職種', hideable: true, width: 150, },
                    { field: 'location', headerName: '勤務地', hideable: true, width: 100, },
                    {
                        field: 'hp',
                        renderCell: (params) => (
                            <Link to={`${params.value}`} target='_blank'>
                                HP
                            </Link>
                        ),
                        headerName: 'HP', hideable: true, width: 70,
                    },
                    { field: 'apply2', headerName: '申込先', hideable: true, width: 80, },
                    { field: 'event_date', headerName: '開催日', hideable: true, width: 100, },
                    { field: 'date_and_time', headerName: '開催時間', hideable: true, width: 80, },
                    { field: 'place', headerName: '実施場所', hideable: true, width: 80, },
                    { field: 'method', headerName: '実施方式', hideable: true, width: 80, },
                    //Todo ステータス情報の登録

                    //Todo 編集ボタンの追加
                    // 編集ボタン
                    {
                        field: 'editBtn',
                        headerName: '編集',
                        sortable: false,
                        width: 90,
                        disableClickEventBubbling: true,
                        renderCell: (params) => <Button className="detail_modal_button" variant="outlined" color="primary" size="small" onClick={()=>onClickHandler(params.row)}> 編集</Button>
                    },
                    // 削除ボタン()
                    {
                    field: 'deleteBtn',
                    headerName: '削除',
                    sortable: false,
                    width: 90,
                    disableClickEventBubbling: true,
                    renderCell: (params) => <Button className="detail_modal_button" variant="outlined" color="error" size="small" onClick={() => onClickDelete(params.row)}>削除</Button>},
                ]}
                slots={{
                    toolbar: GridToolbar,
                }}
                rows={props.companyRow}
                density='compact'
            />
                {open && <AlertDialog6 rowData={event} open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>}
        </div >
    );
}
