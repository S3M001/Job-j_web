import React from "react";
import TopVarA from "../../components/TopVar/TopVarAdmin";
import Dashboard from "../../components/AdminapplyListDashboard";
import '../../css/pages/Admin/admin_Main.css';
import CopyRight from "../../components/parts/CopyRight";
import { useEffect, useState } from "react";
import ApplyService from "../../service/api/applyService"
import { createContext } from 'react'
import { useAuth } from "../../service/store/adminAuth";

export const DashBoardContext = createContext(null)

const AdminApplyList = () => {
    //教師データ
    const adminAuth = useAuth()
    const [applyRow, setApplyRow] = useState([]);
    const [re, setRender] = React.useState(0)
    const [title,setTitle] = useState("　　　")

    //リフレッシュ用
    const changeR = () => {
        setRender(re+1)
    }

    useEffect(() => {
        //すべての申請情報の取得処理
        ApplyService.getApplyInfomation()
            .then((admin) => {
                const ProcessingData = []
                admin.data.forEach((data) => {
                    //idのkey名を変更
                    data.id = data.application_id
                    data.student_number=data.student.student_number
                    data.name=data.student.name
                    delete data.application_id;
                    //application(学校申し込み)をtrue/falseから✅に変更
                    if (data.application) {
                        data = { ...data, application: "✅" }
                    }
                    //confirmation(授業担当確認)をtrue/falseから✅に変更
                    if (data.confirmation) {
                    data = { ...data, confirmation: "✅" }
                    }
                    // console.log(adminAuth)
                    let AdminGroup = adminAuth.admin.class.group.trim()
                    let AdminYear = adminAuth.admin.class.school_year.trim()
                    setTitle(AdminYear+AdminGroup+"の")
                    // console.log(AdminGroup)
                    let UserGroup = data.student.group.trim()
                    let UserYear = data.student.year.trim()
                    // console.log(UserGroup)
                    if(AdminGroup === UserGroup && UserYear === AdminYear){
                        ProcessingData.push(data)
                    }
                });
                setApplyRow(ProcessingData)
            })
            .catch((error) => {
                console.error(error)
            })
            
        }, [re,adminAuth]);
    
    return (
        <div>
            <DashBoardContext.Provider value={{changeR}}>
                <TopVarA title={title+"申請一覧"}/>
                <div className="CompanyaSerch-flex admin_main_css">
                <Dashboard applyRow={applyRow}/>
                </div>
                <footer>
                    <CopyRight/>
                </footer>
            </DashBoardContext.Provider>
        </div>
    );
};
export default AdminApplyList;