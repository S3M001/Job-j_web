import React from "react";
import TopVarA from "../../components/TopVar/TopVarAdmin";
// import CompanyCard from "../../components/CompanyCard";
import '../../css/pages/Admin/AdminCompanyList.css';
// import Grid from '@mui/material/Grid';
import '../../css/pages/Admin/admin_Main.css';
import CopyRight from "../../components/parts/CopyRight";
import AdminCompanyDash from "../../components/AdminCompanyDash";
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import EditIcon from '@mui/icons-material/Edit';
import AlertDialog4 from "../../components/Admin_modal/new_registration";
import { useEffect,useState } from "react";
import CompanyService from "../../service/api/companyService"
import { createContext } from 'react'

export const CompanyListContext = createContext(null)

const AdminUserList = () => {
    const [re, setRender] = React.useState(0)
    const [companyRow, setCompanyRow] = useState([]);
    console.log(companyRow)
    const changeR = () => {
        setRender(re+1)
    }

    useEffect(() => {
        //企業情報取得
        CompanyService.getBriefingSession()
            .then((company) => {
                const ProcessingData = []
                company.data.forEach((data) => {
                    //idのkey名を変更
                    data.id = data.briefing_session_id
                    delete data.briefing_session_id
                    data.companyName = data.company.name
                    data.hp = data.company.website
                    //申込先を文字に変更
                    if(data.apply){
                        data.apply2="学校"
                    }else{
                        data.apply2="校外"
                    }
                    //削除フラグがFalseなら格納する
                    if(!data.deleteFlg){
                        ProcessingData.push(data)
                    }
                });
                setCompanyRow(ProcessingData)
                // console.log(ProcessingData)
            })
            .catch((error) => {
                console.error(error)
            })
        //Todo 共通データ(1週間以内に登録された企業情報)や登録した説明会情報の締め切り or 人気説明会テーブルの締め切り表示

    }, [re])

    return (
        <div>
            <CompanyListContext.Provider value={{changeR}}>
                <TopVarA title="説明会一覧"/>
                <div className="Admin_CompanyaSerch-flex admin_main_css">
                    <AdminCompanyDash companyRow={companyRow}/>
                </div>
                <footer>
                    <CopyRight/>
                </footer>
                <div className="Admin_application_form_button_serch">
                    
                    <AlertDialog4
                        className1="application_CompanySearch" icon={<SpeedDialIcon/>} openIcon={<EditIcon />} 
                    />
                </div>
            </CompanyListContext.Provider>
        </div>
    )
}
export default AdminUserList;