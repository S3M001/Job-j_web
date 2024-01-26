import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import '../css/AdminApplyListDashBoard.css';
import AlertDialog5 from './Admin_modal/Admin_approval';
import AlertDialog6 from './Admin_modal/Admin_report_confitmation';
import AlertDialog7 from './Admin_modal/AdminConfirmationScreen';


export default function AALDB({applyRow}) {


    const [rowData, setRowData] = React.useState({ applyId: '0000002', });

    //モーダルのオープン判定
    const [open, setOpen] = React.useState(false);
    const [openApproval, setOpenApproval] = React.useState(false);
    const [openReportConfirmation, setOpenReportConfirmation] = React.useState(false);
    const [openConfirmationScreen, setOpenConfirmationScreen] = React.useState(false);

    const cellClickHandler = (event) => {
        //状態ごとに開くモーダルを選ぶ
        if(event.row.situation === "2.申請承認待ち"){
            setOpenApproval(true)
        }else if(event.row.situation === "6.報告承認待ち"){
            setOpenReportConfirmation(true)
        }else if(event.row.situation === "1.申請作成中" || event.row.situation === "4.申請完了" || event.row.situation === "5.報告作成中" || event.row.situation === "7.報告完了" || event.row.situation === "3.申請承認済み"){
            setOpenConfirmationScreen(true);
        }else{
            alert("状態エラー")
        }
        setRowData(event);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOpenApproval(false);
        setOpenReportConfirmation(false);
        setOpenConfirmationScreen(false);
    };

    return (
        <div style={{ height: 600, width: '100%', }} className='DashBoard'>
            <DataGrid
                columns={[
                    { field: 'situation', headerName: '状態', hideable: true, width: 140, },
                    { field: 'startDate', headerName: '開催日時', hideable: true, width: 170, },
                    { field: 'companyName', headerName: '会社名', hideable: true, width: 300, },
                    { field: 'eventFormat', headerName: 'イベント区分', hideable: true, width: 100, },
                    { field: 'result', headerName: '結果', hideable: true, width: 100, },
                    { field: 'endDate', headerName: '終了日時', hideable: true, width: 170, },
                    { field: 'id', headerName: '申請ID', hideable: true, width: 100, },
                    { field: 'student_number', headerName: '学籍番号', hideable: true, width: 100, },
                    { field: 'name', headerName: '学生名', hideable: true, width: 200, },
                ]}
                slots={{
                    toolbar: GridToolbar,
                }}
                rows={applyRow}
                density='compact'
                onCellClick={(event) => cellClickHandler(event)}
            />

                {open}
                {openApproval && <AlertDialog5 rowData={rowData} open={openApproval} handleClickOpen={handleClickOpen} handleClose={handleClose} />}
                {openReportConfirmation && <AlertDialog6 rowData={rowData} open={openReportConfirmation} handleClickOpen={handleClickOpen} handleClose={handleClose} />}
                {openConfirmationScreen && <AlertDialog7 rowData={rowData} open={openConfirmationScreen} handleClickOpen={handleClickOpen} handleClose={handleClose} />}


        </div>
    );
}
