import React, { useEffect, useState } from "react";
import TopVarU from "../../components/TopVar/TopVarUser";
import DeadLine from "../../components/parts/deadLineCompanyAlert";
import NewCompanyAlert from "../../components/parts/NewCompanyAlert";
import '../../css/pages/User/page_main.css';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import '../../css/pages/User/DashBoard.css';
import CopyRight from "../../components/parts/CopyRight";
import ApplyService from "../../service/api/applyService"
import { useAuth } from "../../service/store/auth";
import AlertDialog1 from "../../components/User_modal/BbsDetail";
import AlertDialog3 from "../../components/User_modal/DashboardApplication_form"
import AlertDialog4 from "../../components/User_modal/confirmation"
import AlertDialog5 from "../../components/User_modal/report"
import AlertDialog6 from "../../components/User_modal/UserConfirmationScreen"
import axios from "axios";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createContext } from 'react'




export const HomeContext = createContext(null)

const HomePage = () => {
    const [applyRow, setApplyRow] = useState([]);
    const [dates, setDates] = useState([]);
    const auth = useAuth() //←ユーザ情報の取得(useContext)
    //掲示板絞り込み
    const [sports, setSports] = useState([]);
    //モーダルオープン状態管理
    const [openDetail ,setOpenDetail] = useState(false);
    const [openReport , setOpenReport] = useState(false);
    const [openConfirmation , setOpenConfirmation] = useState(false);
    const [openApplication_form , setOpenApplication_form] = useState(false);
    const [openConfirmationScreen, setOpenConfirmationScreen] = useState(false);
    //列情報の保存変数
    const [event ,setEvent] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/briefingSession')
            .then((response) => {
                // stonesStore.chengestones(response.data)
                setDates(response.data)
            })
            .catch(()=>{
                console.log("↑説明会情報がNullによるエラーです。")
            })
        //ユーザ単位の申請情報の取得処理
        const interval = setInterval(() => {
            ApplyService.getApplyInfomation()
                .then((apply) => {
                    const ProcessingData = []
                    apply.data.forEach((data) => {
                        //idのkey名を変更
                        data.id = data.application_id
                        delete data.application_id;
                        //application(学校申し込み)をtrue/falseから✅に変更
                        if (data.application) {
                            data = { ...data, application: "✅" }
                        }else{
                            data = { ...data, application: " " }
                        }
                        //ユーザIDが一致していれば格納
                        if (auth.user.student_number === data.student.student_number) {
                            ProcessingData.push(data)
                        }
                    });
                    setApplyRow(ProcessingData)
                })
                .catch((error) => {
                    console.log("申請情報がnullの時のエラー")
                })
        }, 500);
        return () => clearInterval(interval);
        //Todo 共通データ(1週間以内に登録された企業情報)や登録した説明会情報の締め切り or 人気説明会テーブルの締め切り表示

    }, [auth,refreshKey])

    const cellClickHandler = (event) => {
        //表の行データクリック時にモーダルを開く
        console.log(event.row)
        setEvent(event.row)
        handleClickOpen(event)
    }

    const newAndDeadlineClick = (data) => {
        console.log(data)
        setEvent(data)
        setOpenDetail(true);
    }

    const handleClickOpen = (event) => {
        //状態ごとに開くモーダルを選ぶ
        if(event.row.situation === "1.申請作成中"){
            setOpenApplication_form(true)
        }
        if(event.row.situation === "3.申請承認済み"){
            setOpenConfirmation(true)
        }
        if(event.row.situation === "4.申請完了" || event.row.situation === "5.報告作成中"){
            setOpenReport(true)
        }
        if(event.row.situation === "2.申請承認待ち" || event.row.situation === "6.報告承認待ち" || event.row.situation === "7.報告完了"){
            setOpenConfirmationScreen(true);
        }
    }

    const handleClose = () => {
        setOpenConfirmation(false)
        setOpenReport(false)
        setOpenApplication_form(false)
        setOpenConfirmationScreen(false)
        setOpenDetail(false)
    }

    const changeR = () => {
        setRefreshKey(refreshKey+1)
    }

    //締め切り掲示板
    const today = new Date(Date.now());
    const year = today.getFullYear()
    const month = ('0' + (today.getMonth() + 1)).slice(-2)
    const day = ('0' + (today.getDate())).slice(-2)
    const todayStart = (year + '/' + month + '/' + day)
    let todaychange = new Date(todayStart)
    console.log(todaychange)

    const today2 = new Date(Date.now());
    today2.setDate(today2.getDate() +7)
    const todayStart2 = (today2.getFullYear() + '/' + today2.getMonth()+1 + '/' + today2.getDate())
    let todaychange2 = new Date(todayStart2)
    console.log(todaychange2)
    
    let narrowingdowndatas = []
    dates.forEach((data) => {
        let todaychange3  = new Date(data.deadline)
        if( todaychange3 >= todaychange && todaychange3 <= todaychange2){
            narrowingdowndatas.push({
                id: narrowingdowndatas.length+1,
                type: "1",
                data:data,
            }) 
        }
    });

            

    //NEW掲示板
    const today3 = new Date(Date.now());
    const year3 = today3.getFullYear()
    const month3 = ('0' + (today3.getMonth() + 1)).slice(-2)
    const day3 = ('0' + (today3.getDay()+18)).slice(-2)
    const todayStart3 = (year3 + '/' + month3 + '/' + day3)
    let todaychaneg4= new Date(todayStart3)

    dates.forEach((data) => {
        let todaychange5 = new Date(data.registration_date)
        let todaychange3  = new Date(data.deadline)
        if( todaychange5  <= todaychange && todaychange5  >= todaychaneg4  ){
            if( todaychange3 >= todaychange && todaychange3 <= todaychange2){
                narrowingdowndatas.push({
                id: narrowingdowndatas.length+1,
                type: "2",
                data:data,
            }) 
            }
        }
    });

    //掲示板絞り込み
    const onChangeSport = (event) => event.target.checked//チェック項目
    ? setSports([...sports, event.target.value])
    : setSports(sports.filter((type) =>  type.match(event.target.value) === null)) 
    
    let datas 
    datas = narrowingdowndatas
    console.log(datas)
    if (sports.length !== 0) {
        datas = datas.filter((data) => sports.includes(data.type))
    }
    let nodata
    nodata = 0
    if (datas.length === 0) {
        nodata = "お知らせはありません"
    }
    

    return (
        <div className="HomePage_wrrpar">
            <div>
                <TopVarU title={"ダッシュボード"} />
            </div>
            <div className="page_main_css">
                <div className="HomePage_main">
                    <div className="HomePage_sideVar">
                        <div className="HomePage_dashboard">
                        </div>
                        <p className="HomePage_narrowingdown_parts" >掲示板</p>
                        <FormControlLabel value="1" onChange={onChangeSport}  control={<Checkbox/>}  label="締切" />
                        <FormControlLabel value="2" onChange={onChangeSport}  control={<Checkbox/>}  label="NEW" />
                            <section className="scroll">
                                {nodata !== 0 && 
                                <>
                                <p className="HomePage_nodata">{nodata}</p>
                                </>
                                }
                                {
                                datas.map(data =>
                                    <div className="HomePage_msgBox"  key={data.id}>
                                        <div className="HomePage_msgFlex">
                                        <>
                                            {data.type === "1" && 
                                            <div className="HomePage_flex" onClick={() => newAndDeadlineClick(data.data)}>
                                                    <DeadLine />
                                                    <p className="HomePage_p" >{data.data.company.name} {data.data.deadline.substring(5,10 )}まで!!</p>
                                            </div>
                                            }
                                            {console.log(data)}
                                            {data.type === "2" &&
                                            <div className="HomePage_flex" onClick={() => newAndDeadlineClick(data.data)}>
                                                    <NewCompanyAlert />
                                                    <p className="HomePage_p">{data.data.company.name}</p>
                                            </div>
                                            }
                                        </>
                                    </div>
                                    </div>
                                )}
                            </section>
                    </div>
                    <div style={{ height: 600, width: '100%', }} className="DashBoard_list">
                        <DataGrid
                            columns={[
                                { field: 'id', headerName: '申請ID', align: 'center', },
                                { field: 'situation', headerName: '状態', hideable: true, width: 130, },
                                { field: 'startDate', headerName: '開始日時', width: 180, },
                                { field: 'companyName', headerName: '会社名', width: 300, },
                                { field: 'endDate', headerName: '終了日時', width: 180, },
                                { field: 'eventFormat', headerName: 'イベント区分', width: 100, },
                                { field: 'result', headerName: '結果', width: 100, },
                                { field: 'application', headerName: '✅', width: 50, },
                            ]}
                            rows={applyRow}
                            slots={{
                                toolbar: GridToolbar,
                            }}
                            onCellClick={(event) => cellClickHandler(event)}
                            initialState={{
                                sorting: {
                                sortModel: [{ field: 'situation', sort: 'asc' }],
                                },
                            }}
                            className="Home_DataGrid_cursor"
                        />
                    </div>
                </div>
            </div>
            <footer>
                <CopyRight />
            </footer>
            <HomeContext.Provider value={{changeR}}>
                {/* モーダル各種 */}
                {openDetail && <AlertDialog1 rowData={event} open={openDetail}  handleClose={handleClose} />}
                {openApplication_form && <AlertDialog3 rowData={event} open={openApplication_form} handleClickOpen={handleClickOpen} handleClose={handleClose}/>}
                {openConfirmation && <AlertDialog4 rowData={event} open={openConfirmation} handleClickOpen={handleClickOpen} handleClose={handleClose} />}
                {openReport && <AlertDialog5 rowData={event} open={openReport} handleClickOpen={handleClickOpen} handleClose={handleClose} />}
                {openConfirmationScreen && <AlertDialog6 rowData={event} open={openConfirmationScreen} handleClickOpen={handleClickOpen} handleClose={handleClose}/>}
            </HomeContext.Provider>
        </div>
    );
};
export default HomePage;