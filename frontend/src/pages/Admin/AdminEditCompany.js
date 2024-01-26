import React from "react";
import TopVarA from "../../components/TopVar/TopVarAdmin";
import CopyRight from "../../components/parts/CopyRight";
import CompanyService from "../../service/api/companyService"
import { useEffect,useState } from "react";
import { DataGrid} from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AlertDialog1 from "../../components/Admin_modal/Admin_editCompany";

const AdminEditCompany = () => {
    const [companyList, setCompanyList] = useState([]);
    const [companyRow, setCompanyRow] = useState();
    const [re,reflesh] = useState();

    const refle = () => {
        reflesh(re+"a")
    }
    //モーダルオープン状態管理
    const [openEdit ,setOpenEdit] = useState(false);

    //モーダルオープン関数
    const onClickEditOpen = (row) => {
        setCompanyRow(row)
        setOpenEdit(true);
    }

    //モーダルクローズ関数
    const handleClose = () => {
        setOpenEdit(false)
    }

    useEffect(() => {
        //企業情報取得
        CompanyService.getAllCompany()
        .then((company) => {
            setCompanyList(company.data)
            console.log(company.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [re])

    return (
        <div>
            <TopVarA title="企業一覧"/>
            <div className="Admin_CompanyaSerch-flex admin_main_css">
            <DataGrid
                columns={[
                    { field: 'id', headerName: 'ID', hideable: true, width: 20, align: 'center' },
                    { field: 'name', headerName: '会社名', hideable: true, width: 300, },
                    { field: 'location', headerName: '本社所在地', hideable: true, width: 450, },
                    { field: 'number', headerName: '従業員数', hideable: true, width: 100, },
                    {
                        field: 'website',
                        renderCell: (params) => (
                            <Link to={`${params.value}`} target='_blank'>
                                HP
                            </Link>
                        ),
                        headerName: 'HP', hideable: true, width: 70,
                    },

                    //編集ボタン
                    {
                        field: 'editBtn',
                        headerName: '編集',
                        sortable: false,
                        width: 90,
                        disableClickEventBubbling: true,
                        renderCell: (params) => <Button className="detail_modal_button" variant="outlined" color="primary" size="small" onClick={()=>onClickEditOpen(params.row)}> 編集</Button>
                    },
                    //削除ボタン
                    {
                    field: 'deleteBtn',
                    headerName: '削除',
                    sortable: false,
                    width: 90,
                    disableClickEventBubbling: true,
                    renderCell: (params) => <Button className="detail_modal_button" variant="outlined" color="error" size="small" >削除</Button>},
                    // onClick={() => onClickDelete(params.row)}
                ]}  
                rows={companyList}
                density='compact'
            />
            </div>
            <footer>
                <CopyRight/>
            </footer>
            {openEdit && <AlertDialog1 open={openEdit}  handleClose={handleClose} row={companyRow} reflesh={refle}/>}
        </div>
    )
    }
export default AdminEditCompany;