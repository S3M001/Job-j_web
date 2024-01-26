// import React from "react";
// import TopVarU from "../../components/TopVar/TopVarUser";
// import DeadLine from "../../components/parts/deadLineCompanyAlert";
// import NewCompanyAlert from "../../components/parts/NewCompanyAlert";
// import '../../css/pages/User/page_main.css';
// import Button from '@mui/material/Button';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import { Link } from "react-router-dom";
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import '../../css/pages/User/DashBoard.css';
// import CopyRight from "../../components/parts/CopyRight";

// const rows = [
//     {
//         id: 1,
//         状態: '7.報告完了',
//         開催日時: '2023/09/07 14:30',
//         会社名: "株式会社マリーアントワネット",
//         イベント区分: "試験_面接",
//         結果: '結果待ち',
//         終了日時: '2023/09/07 16:30',
//         申請ID: '1',
//     },
//     {
//         id: 2,
//         状態: "7.報告完了",
//         開催日時: '2023/09/022 16:30',
//         会社名: "株式会社デモ",
//         イベント区分: "試験_面接",
//         結果: '結果待ち',
//         終了日時: '2023/09/22 18:30',
//         "✅": "✅",
//         申請ID: '2',
//     },
//     {
//         id: 3,
//         状態: "7.報告完了",
//         開催日時: '2023/09/022 16:30',
//         会社名: "株式会社デモ",
//         イベント区分: "試験_面接",
//         結果: '結果待ち',
//         終了日時: '2023/09/22 18:30',
//         "✅": "✅",
//         申請ID: '2',
//     },
//     {
//         id: 4,
//         状態: "7.報告完了",
//         開催日時: '2023/09/022 16:30',
//         会社名: "株式会社デモ",
//         イベント区分: "試験_面接",
//         結果: '結果待ち',
//         終了日時: '2023/09/22 18:30',
//         "✅": "✅",
//         申請ID: '2',
//     },
//     {
//         id: 5,
//         状態: "7.報告完了",
//         開催日時: '2023/09/022 16:30',
//         会社名: "株式会社デモ",
//         イベント区分: "試験_面接",
//         結果: '結果待ち',
//         終了日時: '2023/09/22 18:30',
//         "✅": "✅",
//         申請ID: '2',
//     },
//     {
//         id: 6,
//         状態: "7.報告完了",
//         開催日時: '2023/09/022 16:30',
//         会社名: "株式会社デモ",
//         イベント区分: "試験_面接",
//         結果: '結果待ち',
//         終了日時: '2023/09/22 18:30',
//         "✅": "✅",
//         申請ID: '2',
//     },
//     {
//         id: 7,
//         状態: "7.報告完了",
//         開催日時: '2023/09/022 16:30',
//         会社名: "株式会社デモ",
//         イベント区分: "試験_面接",
//         結果: '結果待ち',
//         終了日時: '2023/09/22 18:30',
//         "✅": "✅",
//         申請ID: '2',
//     },
//     {
//         id:8,
//         状態: "7.報告完了",
//         開催日時: '2023/09/022 16:30',
//         会社名: "株式会社デモ",
//         イベント区分: "試験_面接",
//         結果: '結果待ち',
//         終了日時: '2023/09/22 18:30',
//         "✅": "✅",
//         申請ID: '2',
//     },
//     {
//         id: 9,
//         状態: "7.報告完了",
//         開催日時: '2023/09/022 16:30',
//         会社名: "株式会社デモ",
//         イベント区分: "試験_面接",
//         結果: '結果待ち',
//         終了日時: '2023/09/22 18:30',
//         "✅": "✅",
//         申請ID: '2',
//     },
//     {
//         id: 10,
//         状態: "7.報告完了",
//         開催日時: '2023/09/022 16:30',
//         会社名: "株式会社デモ",
//         イベント区分: "試験_面接",
//         結果: '結果待ち',
//         終了日時: '2023/09/22 18:30',
//         "✅": "✅",
//         申請ID: '2',
//     },
//     {
//         id: 11,
//         状態: "7.報告完了",
//         開催日時: '2023/09/022 16:30',
//         会社名: "株式会社デモ",
//         イベント区分: "試験_面接",
//         結果: '結果待ち',
//         終了日時: '2023/09/22 18:30',
//         "✅": "✅",
//         申請ID: '2',
//     },
//     {
//         id: 12,
//         状態: "7.報告完了",
//         開催日時: '2023/09/022 16:30',
//         会社名: "株式会社デモ",
//         イベント区分: "試験_面接",
//         結果: '結果待ち',
//         終了日時: '2023/09/22 18:30',
//         "✅": "✅",
//         申請ID: '2',
//     },
// ];


// const DashboardUser = () => {
//     return (
//         <div className="HomePage_wrrpar">
//             <div>
//                 <TopVarU　title="ホーム画面>ダッシュボード"/>
//             </div>
//             <div className="page_main_css">
//                 <div className="HomePage_main">
//                     <div className="HomePage_sideVar">
//                         <div className="HomePage_dashboard">
//                             <Link to="/home">                               
//                                 <Button variant="outlined" startIcon={<CalendarMonthIcon />}>
//                                     カレンダー表示に切り替える
//                                 </Button>
//                             </Link>
//                         </div>
//                         <p>掲示板</p>
//                         <div className="HomePage_msgBox">
//                             <div className="HomePage_msgFlex">
//                                 <a href="/">
//                                     <DeadLine/>
//                                     <p className="HomePage_p">株式会社SCC 12/08まで!!</p>
//                                 </a>
//                             </div>
//                             <div className="HomePage_msgFlex">
//                                 <a href="/">
//                                     <DeadLine/>
//                                     <p className="HomePage_p">株式会社SOD 12/10まで!!</p>
//                                 </a>
//                             </div>
//                             <div className="HomePage_msgFlex">
//                                 <a href="/">
//                                     <NewCompanyAlert/>
//                                     <p className="HomePage_p">株式会社SOC</p>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div style={{ height: 600, width: '100%',}} className="DashBoard_list">
//                         <DataGrid
//                             columns={[
//                             { field: '状態', hideable: true ,width: 100,},
//                             { field: '開催日時' ,width: 180,},
//                             { field: '会社名' ,width: 300,},
//                             { field: '終了日時' ,width: 180,},
//                             { field: 'イベント区分' ,width: 100,},
//                             { field: '結果' ,width: 100,},
//                             { field: '✅' ,width: 50,},
//                             { field: '申請ID' ,align: 'center',},
//                             ]}
//                             rows={rows}
//                             slots={{
//                             toolbar: GridToolbar,
//                             }}
//                         />
//                     </div>
//                 </div>
//             </div>
//             <footer>
//             <CopyRight/>
//         </footer>
//         </div>
//     );
// };
// export default DashboardUser;