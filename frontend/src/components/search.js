// import '../css/parts/search.css';
// import  { useState} from "react";
// import Grid from '@mui/material/Grid';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import FormGroup from '@mui/material/FormGroup';
// import React, { useEffect } from "react";
// import axios from "axios";
// import {NarrowdownAuth} from "../service/store/narrowdown";

// const Test = ({rerender}) => {

//     //企業情報のグローバル変数の作成
//     const stonesStore = NarrowdownAuth()
//     const [stones, setStones] = useState([]);
    
//     //変数宣言
//             const [companyname] = useState('');
//             const [sports, setSports] = useState([]);
//             const [sports2, setSports2] = useState([]);
//             const occupationdata1 = [];
//             const locationdata1 = [];

//     useEffect(() => {
//         axios.get('http://localhost:8080/api/v1/briefingSession')
//                 .then((response) => {
//                     stonesStore.chengestones(response.data)
//                     setStones(response.data)
//                 }
//                 )
//                 .catch(err => console.log(err))
//             },[])
            
            
            
//             //occupationdata1k重複排除
//             stones.forEach((data) => {
//                 occupationdata1.push(data.occupation);
//             });
//             const occupationdata2 = [...new Set(occupationdata1)];
//         //locationdata1重複排除
//         stones.forEach((data) => {
//             locationdata1.push(data.location);
//         });
//         const locationdata2 = [...new Set(locationdata1)];
        
//         //募集職種
//         // const onChangeSport = (event) => {
//         //     if(event.target.checked){
//         //         setSports([...sports, event.target.value])
//         //     }else{
//         //         setSports(sports.filter((occupation) =>  occupation.match(event.target.value) === null))
//         //     }
//         //     console.log(sports)
//         //     NarrowDown()
//         // }
//         const onChangeSport = (event) => event.target.checked//チェック項目
//         ? setSports([...sports, event.target.value]) | NarrowDown()
//         : setSports(sports.filter((occupation) =>  occupation.match(event.target.value) === null)) | NarrowDown()
//         console.log(sports)

//         //募集勤務地
//         // const onChangeSport2 = (event) => {
//         //     if(event.target.checked){
//         //         setSports2([...sports2, event.target.value])
//         //     }else{
//         //         setSports2(sports2.filter((location) => location.match(event.target.value) === null))
//         //     }
//         //     console.log(sports2)
//         //     NarrowDown()
//         // }
//         const onChangeSport2 = (event) => event.target.checked
//         ? setSports2([...sports2, event.target.value]) | NarrowDown()
//         : setSports2(sports2.filter((location) => location.match(event.target.value) === null)) | NarrowDown()
//         console.log(sports2)

//         //絞り込み処理
//         const NarrowDown = () => {
//             stonesStore.chengestones(stones)
//             //絞り込み
//             let datas
//             datas=stonesStore.stones
//             if (sports.length !== 0) {
//                 datas = stonesStore.stones.filter((data) => data.company.name.match(companyname))
//             datas = datas.filter((data) => sports.includes(data.occupation))
//             stonesStore.chengestones(datas)
//             }
//             console.log(stonesStore.stones);
//             //絞り込み2
//             let datas2
//             datas2=datas
//             if (sports2.length !== 0) {
//             datas2 = datas.filter((data) => data.company.name.match(companyname))
//             datas = datas2.filter((data) => sports2.includes(data.location))
//             stonesStore.chengestones(datas)
//             }
//             console.log(stonesStore.stones)
//         }




//     return(
//         <div className="left">
//             <div className="search-title">
//                         <h4>現在の検索条件</h4>
//                         <h6>[業種]IT・通信業界</h6>
//                 <h5>企業情報で探す</h5>
//             </div>
//             <div className="search-select">
//                 <div className="search-select-flexs">
//                     <div className="search-select-flex">
//                         <h5 className="search-select-items">募集職種</h5>
//                         <Grid container spacing={12} alignItems="flex-end" >
//                             <FormGroup className="search-select-checkbox">
//                                 {
//                                 occupationdata2.map(data =>
//                                     <div key={data}>
//                                         <FormControlLabel value={data} onChange={onChangeSport} className="search-select-checkbox2" control={<Checkbox/>}  label={data} />
//                                     </div>
//                                 )}
//                                 </FormGroup>
//                         </Grid>
//                     </div>
//                     <div className="search-select-flex">
//                         <h5 className="search-select-items">募集勤務地</h5>
//                         <Grid container spacing={12} alignItems="flex-end" >
//                             <FormGroup className="search-select-checkbox">                                {
//                                 locationdata2.map(data =>
//                                     <div key={data}>
//                                     <FormControlLabel value={data} onChange={onChangeSport2} className="search-select-checkbox2" control={<Checkbox/>} label={data} />
//                                     </div> 
//                                 )}
//                             </FormGroup>
//                         </Grid>
//                     </div>
//                 </div>
//                 <div className="search-select-flexs">
//                     <div className="search-select-flex">
//                         <h5 className="search-select-items">実施場所</h5>
//                         <input type="checkbox" name=""></input>
//                         901
                        
//                         <br/>
//                         <input type="checkbox" name=""></input>
//                         自宅環境
//                     </div>
//                     <div className="search-select-flex">
//                         <h5 className="search-select-items-second">実施内容</h5>
//                         <input type="checkbox" name=""></input>
//                         選考のみ
//                     </div>
//                 </div>
//                 <h5 className="search-keyword">キーワード</h5>
//             </div>
//             <div className="search-text">
//                 <input type="text" className="search_text_width"></input>
//             </div>
//             <hr/>
//             <div className="search-select">
//                 <h5 className="search-select-items">締切含む<input type="checkbox" name=""></input></h5>
//                 <br/>
//                 <div className="search-select-items-margin"></div>
//                 <button onClick={rerender} className="search-button" >条件変更</button>
//             </div>
//             <div className="search-last">
//                 <h4>この条件の企業数<span className="search-last-numbers">15</span>社</h4>
//             </div>
// 		</div>
//     );
// };

// export default Test;