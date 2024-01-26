import React, { useEffect, useState } from "react";
import TopVarU from "../../components/TopVar/TopVarUser";
import DeadLine from "../../components/parts/deadLineCompanyAlert";
import NewCompanyAlert from "../../components/parts/NewCompanyAlert";
import { Scheduler } from "@aldabil/react-scheduler";
import ja from 'date-fns/locale/ja'
import '../../css/pages/User/Home.css';
import '../../css/pages/User/page_main.css';
import CopyRight from "../../components/parts/CopyRight";
import ApplyService from "../../service/api/applyService";
import { useAuth } from "../../service/store/auth";
import axios from "axios";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../../css/pages/User/Calender.css";
import AlertDialog1 from "../../components/User_modal/BbsDetail";
import { createContext } from 'react';
import applyService from '../../service/api/applyService';

export const HomeContext = createContext(null)

const CalenderUser = () => {
    const [applyRow, setApplyRow] = useState([]);
    const auth = useAuth() //←ユーザ情報の取得(useContext)
    const [rows, setRows] = useState([]);
    //掲示板絞り込み
    const [sports, setSports] = useState([]);
    const [openDetail ,setOpenDetail] = useState(false);
    const [event ,setEvent] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {    
        axios.get('http://localhost:8080/api/v1/briefingSession')
            .then((response) => {
                // stonesStore.chengestones(response.data)
                setApplyRow(response.data)
            }).catch(console.log("↑説明会情報がないときのエラーです"))

        //ユーザ単位の申請情報の取得処理
        // const interval = setInterval(() => {
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
                        }
                        //ユーザIDが一致していれば格納
                        if (auth.user.student_number === data.student.student_number) {
                            ProcessingData.push(data)
                        }
                    });
                    let row = []
                    ProcessingData.forEach((data) => {
                        row.push({
                            event_id: 1,
                            title: data.companyName,
                            start: new Date(data.startDate),
                            end: new Date(data.endDate),
                            type: data.situation,
                            data: data
                        });
                    });
                    setRows(row);
                    })
                .catch((error) => {
                    console.log("not Apply Info")
            })
            // }, 1000);
        // return () => clearInterval(interval);
            
    }, 500);
    return () => clearInterval(interval);

    }, [auth])

    const newAndDeadlineClick = (data) => {
        console.log(data)
        setEvent(data)
        setOpenDetail(true);
    }

    const handleClose = () => {
        setOpenDetail(false)
    }

    const changeR = () => {
        setRefreshKey(refreshKey+1)
    }

    //締め切り掲示板
    const today = new Date(Date.now());
    const year = today.getFullYear()
    const month = ('0' + (today.getMonth() + 1)).slice(-2)
    const day = ('0' + (today.getDay()+21)).slice(-2)
    const todayStart = (year + '/' + month + '/' + day)
    let todaychange = new Date(todayStart)

    const today2 = new Date(Date.now());
    today2.setDate(today2.getDate() +7)
    const todayStart2 = (today2.getFullYear() + '/' + today2.getMonth()+1 + '/' + today2.getDate())
    let todaychange2 = new Date(todayStart2)
    console.log(todaychange2)

    let narrowingdowndatas = []
    applyRow.forEach((data) => {
        let todaychange3  = new Date(data.deadline)
        if( todaychange3 >= todaychange && todaychange3 <= todaychange2){
            narrowingdowndatas.push({
                id: narrowingdowndatas.length+1,
                type: "1",
                data: data,
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

    applyRow.forEach((data) => {
        let todaychange5 = new Date(data.registration_date)
        if( todaychange5  <= todaychange && todaychange5  >= todaychaneg4  ){
            narrowingdowndatas.push({
                id: narrowingdowndatas.length+1,
                type: "2",
                data: data,
            }) 
        }
    });

     //掲示板絞り込み
    const onChangeSport = (event) => event.target.checked//チェック項目
    ? setSports([...sports, event.target.value])
    : setSports(sports.filter((type) =>  type.match(event.target.value) === null)) 

    let datas 
    datas = narrowingdowndatas
    if (sports.length !== 0) {
         // datas2 = datas.filter((data) => data.companyName.match(dates))
        datas = datas.filter((data) => sports.includes(data.type))
    }

    let nodata
    nodata = 0
    if (datas.length === 0) {
        nodata = "お知らせはありません"
    }

    

    const formats = {
        dateFormat: 'D',
        dayFormat: 'D(ddd)',
        monthHeaderFormat: 'YYYY年M月',
        dayHeaderFormat: 'M月D日(ddd)',
        dayRangeHeaderFormat: 'YYYY年M月',
    }

    //メモ
    const changeMemo = (e,event) => {
        


        const sendData = {
            id: event.data.id,
            memo: e.target.value,
            updateDate: todayStart
        }
        applyService.updateMemo(sendData)
        .then((res) => {
            if(res){
                console.log("メモの更新が完了しました。")
            }
        })
        .catch((err) => {
            console.error(err)
        })
    }

    console.log(rows)


    return (
        <>

            <>
                <div className="HomePage_wrrpar">
                    <div>
                        <TopVarU title={"カレンダー"} />
                    </div>
                    <div className="page_main_css">
                        <div className="HomePage_main">
                            <div className="HomePage_sideVar">
                                <div className="HomePage_dashboard">
                                </div>
                                <p className="HomePage_narrowingdown_parts">掲示板</p>
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
                                            <div className="HomePage_flex"  onClick={() => newAndDeadlineClick(data.data)}>
                                                <DeadLine />
                                                <p className="HomePage_p" >{data.data.companyName} {data.data.deadline.substring(5,10 )}まで!!</p>
                                            </div>
                                            }
                                            {}
                                            {data.type === "2" &&
                                            <div className="HomePage_flex"  onClick={() => newAndDeadlineClick(data.data)}>
                                                <NewCompanyAlert />
                                                <p className="HomePage_p" >{data.data.company.name}</p>
                                            </div>
                                            }
                                        </>
                                    </div>
                                    </div>
                                )}
                                </section>
                            </div>
                            <div className="HomePage_scheduler">
                                <Scheduler
                                    locale={ja}
                                    view="month"
                                    stickyNavigation="true"
                                    formats={formats}
                                    height="550"
                                    hourFormat="24"
                                    month={{
                                        weekDays: [0, 1, 2, 3, 4, 5, 6],
                                        weekStartOn: 0,
                                        startHour: 0,
                                        endHour: 24,
                                        cellRenderer: () => <></>
                                    }}
                                    week={{
                                        weekDays: [0, 1, 2, 3, 4, 5, 6],
                                        weekStartOn: 0,
                                        startHour: 0,
                                        endHour: 24,
                                        cellRenderer: () => <></>
                                    }}
                                    day={{
                                        startHour: 0,
                                        endHour: 24,
                                        cellRenderer: () => <></>
                                    }}
                                    editable={false}
                                    deletable={false}
                                    events={rows}
                                    
                                    viewerExtraComponent={(fields, event) => {
                                    
                                        return (
                                            <div>
                                                <p>申請状態: {event.data.situation}</p>
                                                <p>開始時間: {event.data.startDate}</p>
                                                <p>実施場所: {event.data.placeOfImplementation}</p>
                                                <p>実施方式: {event.data.eventFormat}</p>
                                                <p>メモ</p>
                                                <textarea className="Calender_textarea" name="eventClassification" wrap="hard" 
                                                            placeholder="〇〇〇を持参/〇〇〇証明書提出" defaultValue={event.data.memo} onChange={(e,rows) => changeMemo(e,event,rows)}>
                                                </textarea>
                                            </div>
                                        );
                                        }}
                                />
                            </div>
                        </div>
                    </div>
                    <footer>
                        <CopyRight />
                    </footer>
                    <HomeContext.Provider value={{changeR}}>
                        {/* モーダル各種 */}
                        {openDetail && <AlertDialog1 rowData={event} open={openDetail} handleClose={handleClose} />}
                    </HomeContext.Provider>
                </div>
            </>

        </>
    );
};
export default CalenderUser;