import React from "react";
import TopVarA from "../../components/TopVar/TopVarAdmin";
import '../../css/pages/Admin/admin_Main.css';
import DeadLine from "../../components/parts/deadLineCompanyAlert";
import NewCompanyAlert from "../../components/parts/NewCompanyAlert";
import { Scheduler} from "@aldabil/react-scheduler";
import ja from 'date-fns/locale/ja'
import '../../css/pages/Admin/AdminHome.css';
import CopyRight from "../../components/parts/CopyRight";
const rows = [
    {
        event_id: 1,
        title: "[締切]株式会社マリーアントワネット",
        start: new Date("2022/5/2 09:30"),
        end: new Date("2022/5/2 10:30"),
        type: "締切",
    },
    {
        event_id: 2,
        title: "❤株式会社ナポレオン",
        start: new Date("2022/5/4 10:00"),
        end: new Date("2022/5/4 11:00"),
        type: "お気に入り"
    },
    {
        event_id: 3,
        title: "[締切]株式会社マリーアントワネット",
        start: new Date("2023/12/4 10:00"),
        end: new Date("2023/12/4 11:00"),
        type: "締切",
    },
    {
        event_id: 4,
        title: "[締切]株式会社織田信長",
        start: new Date("2023/12/4 09:30"),
        end: new Date("2023/12/5 10:30"),
        type: "締切",
    },
    {
        event_id: 4,
        title: "❤株式会社ペリー",
        start: new Date("2023/12/27 09:30"),
        end: new Date("2023/12/27 10:30"),
        type: "お気に入り"
    },
    {
        event_id: 4,
        title: "[申請済み]株式会社✖✖",
        start: new Date("2023/12/25 09:30"),
        end: new Date("2023/12/25 10:30"),
        type: "申請"
    },
    {
        event_id: 4,
        title: "[申請済み]株式会社○○",
        start: new Date("2023/12/23 09:30"),
        end: new Date("2023/12/23 10:30"),
        type: "申請"
    },
];

const formats = {
    dateFormat: 'D',
    dayFormat: 'D(ddd)',
    monthHeaderFormat: 'YYYY年M月',
    dayHeaderFormat: 'M月D日(ddd)',
    dayRangeHeaderFormat: 'YYYY年M月',
    }

const AdminHome = () => {
    return (
        <div>
            <TopVarA title="ホーム画面"/>
            <div className="page_main_css">
                <div className="Admin_HomePage_main">
                    <div className="Adimin_HomePage_sideVar">
                        <p>掲示板</p>
                        <div className="Admin_HomePage_msgBox">
                            <div className="Admin_HomePage_msgFlex">
                                <a href="/admin/home">
                                    <DeadLine/>
                                    <p className="Admin_HomePage_p">株式会社SCC 12/08まで!!</p>
                                </a>
                            </div>
                            <div className="Admin_HomePage_msgFlex">
                                <a href="/admin/home">
                                    <DeadLine/>
                                    <p className="Admin_HomePage_p">株式会社SOD 12/10まで!!</p>
                                </a>
                            </div>
                            <div className="Admin_HomePage_msgFlex">
                                <a href="/admin/home">
                                    <NewCompanyAlert/>
                                    <p className="Admin_HomePage_p">株式会社SOC</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Admin_HomePage_scheduler">
                        <Scheduler
                            locale={ja}
                            view="month"
                            stickyNavigation="true"
                            formats={formats}
                            month={{
                                weekDays: [0, 1, 2, 3, 4, 5, 6],
                                weekStartOn: 0,
                                startHour: 0,
                                endHour: 23,
                                cellRenderer: () => <></>
                            }}
                            week={{
                                weekDays: [0, 1, 2, 3, 4, 5, 6],
                                weekStartOn: 0,
                                startHour: 0,
                                endHour: 23,
                                step: 120,
                                cellRenderer: () => <></>
                            }}
                                day={{
                                startHour: 0,
                                endHour: 23,
                                step: 120,
                                cellRenderer: () => <></>
                            }}
                            editable={false}
                            deletable={false}
                            events={rows}
                        />
                    </div>
                </div>
            </div>
            <footer>
                <CopyRight/>
                </footer>
        </div>
    );
};
export default AdminHome;