import React, { useEffect } from "react";
import TopVarU from "../../components/TopVar/TopVarUser";
import CompanyCard from "../../components/CompanyCard";
// import Serch from "../../components/search";
import '../../css/pages/User/CompanySerch.css';
import Grid from '@mui/material/Grid';
import '../../css/pages/User/page_main.css';
import CopyRight from "../../components/parts/CopyRight";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState } from "react";
import AlertDialog2 from "../../components/User_modal/application_form";
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import axios from "axios";
// import {NarrowdownAuth} from "../../service/store/narrowdown";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import '../../css/parts/search.css'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import {useAuth} from "../../service/store/auth";
import { createContext } from 'react'

export const CompanyaSerchContext = createContext(null)

const CompanySerchPage = () => {

    //企業情報のグローバル変数の作成
    // const stonesStore = NarrowdownAuth();
    const [stones, setStones] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0)
    const [bookmark, setBookmark] = useState([]);

    //変数宣言
    const [companyname] = useState('');
    const [sports, setSports] = useState([]);
    const [sports2, setSports2] = useState([]);
    const [deadlineSW, setDeadLineSW] = useState(false);
    const [bookSW, setBookSW] = useState(false);
    const occupationdata1 = [];
    const locationdata1 = [];

    const [cpystudents, setCpystudents] = useState([]);
    const auth = useAuth()
            cpystudents.student_number=auth.user.student_number
    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/briefingSession')
            .then((response) => {
                // stonesStore.chengestones(response.data)
                setStones(response.data)
            })
            .catch(err => console.log("↑説明会情報がnullのエラーです"))
        axios.get('http://localhost:8080/api/v1/bookmark')
        .then((response) => {
            // stonesStore.chengestones(response.data)
            setBookmark(response.data)

        }
        )
        .catch(err => console.log(err))
    }, [refreshKey]);

    //リフレッシュ動作
    const changeR = () => {
        setRefreshKey(refreshKey+1)
    }

    //サイドバー絞り込み
    //occupationdata1k重複排除
    stones.forEach((data) => {
        if( data.occupation !=="                                                                                                    "){
            occupationdata1.push(data.occupation);
        }
    });
    const occupationdata2 = [...new Set(occupationdata1)];
    console.log(occupationdata2)
    //locationdata1重複排除
    stones.forEach((data) => {
        if( data.location !=="                                                                                                    "){
            locationdata1.push(data.location);
        }
    });
    const locationdata2 = [...new Set(locationdata1)];

    const onChangeSport = (event) => event.target.checked//チェック項目
        ? setSports([...sports, event.target.value])
        : setSports(sports.filter((occupation) =>  occupation.match(event.target.value) === null)) 

    const onChangeSport2 = (event) => event.target.checked
    ? setSports2([...sports2, event.target.value]) 
    : setSports2(sports2.filter((location) => location.match(event.target.value) === null)) 

    const onClickDeadLine = () => {
        if(deadlineSW){
            setDeadLineSW(false);
        }else{
            setDeadLineSW(true);
        }
    }

    //お気に入り絞り込み
    const onClickBookmark  = () => {
        if(bookSW){
            setBookSW(false);

        }else{
            setBookSW(true);
        }
    }

    console.log(bookSW)        
    //絞り込み処理
        // stonesStore.chengestones(stones)
        //絞り込み
        let datas
        // datas=stonesStore.stones
        datas=stones

        const notdeadline = []
        
        // //締め切り
        if(!deadlineSW){
            const today = new Date(Date.now());
            const year = today.getFullYear()
            const month = ('0' + (today.getMonth() + 1)).slice(-2)
            const day = ('0' + (today.getDay()+21)).slice(-2)
            const todayStart = (year + '-' + month + '-' + day)
            let todaychange = new Date(todayStart)
            stones.forEach((data) => {
                console.log(data.deadline)
                console.log(todayStart)
                let deadline = new Date(data.deadline)
                if(deadline >= todaychange){
                    notdeadline.push(data);
                }
            });
            datas = notdeadline;
        }
            
        let datas2
        if (sports.length !== 0) {
        datas2 = datas.filter((data) => data.company.name.match(companyname))
        datas = datas2.filter((data) => sports.includes(data.occupation))
        }

        //絞り込み2
        let datas3
        datas3=datas
        if (sports2.length !== 0) {
        datas3 = datas.filter((data) => data.company.name.match(companyname))
        datas = datas3.filter((data) => sports2.includes(data.location))
        }

    
    //お気に入り絞り込み
    let datas4
    datas4=datas
    if(bookSW){
        const bookmarks = []
        
        datas4.forEach((data) => {
            //学籍番号と一致するbookmarkを取り出す
            console.log(data)
            console.log(data.briefing_session_id)
            bookmark.forEach((book) => {
                console.log(book)
                if(auth.user.student_number === book.student.student_number){
                    console.log(book.briefingSession.briefing_session_id)
                    if(data.briefing_session_id === book.briefingSession.briefing_session_id){
                        console.log(data)
                        bookmarks.push(data)
                    }
                }
                
            });
                

            
        });
        datas=bookmarks
        console.log(datas)
    }

    //検索件数
    let numbers = 0
    datas.forEach((a) => {
        numbers += 1
    });


    //絞りこみサイドバーに使う変数
    const [state, setState] = React.useState();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    //お気に入りボタン
    const MaterialUISwitch = styled(Switch)(() => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            margin: 1,
            padding: 0,
            transform: 'translateX(6px)',
            '&.Mui-checked': {
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                    color: 'red',
                    content: "'♥'",
                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: "#63bf70",
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: '#fff',
            width: 32,
            height: 32,
            '&:before': {
                content: "'♡'",
                color: "black",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 10,
                top: 5,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                // backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                //     '#fff',
                // )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: "#bababa",
            borderRadius: 20 / 2,
        },
    }));

    //details募集職種
    const [isOpen, setIsOpen] = useState(
            // localstorageに保存された真偽値で判定。最初は何も入っていないのでfalse
            localStorage.getItem("openState") === "true" ? true : false
        )
        
        const toggleAccordion = (e) => {
            e.preventDefault()
            // summaryをクリックし、falseだったらtrueを、trueだったらfalseを返す
            setIsOpen((prev)=> !prev)
        }
        
        useEffect(() => {
        // toggleAccordionでisOpenの値が変更されたので変更された真偽値をlocalstorageに保存
            localStorage.setItem("openState", JSON.stringify(isOpen))
        }, [isOpen])

    const [isOpen2, setIsOpen2] = useState(
            // localstorageに保存された真偽値で判定。最初は何も入っていないのでfalse
            localStorage.getItem("openState") === "true" ? true : false
        )
        
        const toggleAccordion2 = (e) => {
            e.preventDefault()
            // summaryをクリックし、falseだったらtrueを、trueだったらfalseを返す
            setIsOpen2((prev)=> !prev)
        }
        
        useEffect(() => {
        // toggleAccordionでisOpenの値が変更されたので変更された真偽値をlocalstorageに保存
            localStorage.setItem("openState", JSON.stringify(isOpen2))
        }, [isOpen2])

    return (
        <CompanyaSerchContext.Provider value={{changeR}}>
        <div>
            <TopVarU title="企業申請" />
            <div className="CompanyaSerch-flex page_main_css">
                <div className="CompanyaSerch-phone">
                    {/* <Serch rerender={rerender}/> */}
                    <div className="left">
            <div className="search-title">
                        <h4>現在の検索条件</h4>
                <h5>企業情報で探す</h5>
            </div>
            <div className="search-select">
                <div className="search-select-flexs">
                    <div className="search-select-flex">
                    <details open={isOpen}>
                        <summary onClick={toggleAccordion}><h5 className="search-select-items">募集職種</h5></summary>
                        <ol>
                        <Grid container spacing={12} alignItems="flex-end" >
                            <FormGroup className="search-select-checkbox">
                                {
                                    occupationdata2.map(data =>
                                    <div key={data}>
                                        <FormControlLabel value={data} onChange={onChangeSport} className="search-select-checkbox2" control={<Checkbox/>}  label={data} />
                                    </div>
                                )}
                                </FormGroup>
                        </Grid>
                        </ol>
                    </details>
                    </div>
                    <div className="search-select-flex">
                        <details open={isOpen2}>
                            <summary onClick={toggleAccordion2}><h5 className="search-select-items">募集勤務地</h5></summary>
                            <ol>
                            <Grid container spacing={12} alignItems="flex-end" >
                                <FormGroup className="search-select-checkbox">                                {
                                    locationdata2.map(data =>
                                        <div key={data}>
                                        <FormControlLabel value={data} onChange={onChangeSport2} className="search-select-checkbox2" control={<Checkbox/>} label={data} />
                                        </div> 
                                    )}
                                </FormGroup>
                            </Grid>
                            </ol>
                        </details>
                    </div>
                </div>
                <h5 className="search-keyword">キーワード</h5>
            </div>
            <div className="search-text">
                <input type="text" className="search_text_width"></input>
            </div>
            {/* <hr/> */}
            <div className="search-select">
                <h5 className="search-select-items2">締切含む<input type="checkbox" onClick={onClickDeadLine}></input></h5>
                {/* <br/>
                <div className="search-select-items-margin"></div> */}
            </div>
            <div className="search-last">
                <h4>この条件の企業数<span className="search-last-numbers">{numbers}</span>社</h4>
            </div>
		</div>
                </div>
                {/* サイドバーの絞り込み */}
                <div className="CompanyaSerch-phone2">
                    {['検索'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                            <Drawer
                                // anchor={anchor}
                                open={state}
                                onClose={toggleDrawer(anchor, false)}
                                >
                                {/* <Serch /> */}
                                <div className="left">
            <div className="search-title">
                        <h4>現在の検索条件</h4>
                <h5>企業情報で探す</h5>
            </div>
            <div className="search-select">
                <div className="search-select-flexs">
                    <div className="search-select-flex">
                        <h5 className="search-select-items2">募集職種</h5>
                        <Grid container spacing={12} alignItems="flex-end" >
                            <FormGroup className="search-select-checkbox">
                                {
                                    occupationdata2.map(data =>
                                    <div key={data}>
                                        <FormControlLabel value={data} onChange={onChangeSport} className="search-select-checkbox2" control={<Checkbox/>}  label={data} />
                                    </div>
                                )}
                                </FormGroup>
                        </Grid>
                    </div>
                    <div className="search-select-flex2">
                        <h5 className="search-select-items">募集勤務地</h5>
                        <Grid container spacing={12} alignItems="flex-end" >
                            <FormGroup className="search-select-checkbox">                                {
                                locationdata2.map(data =>
                                    <div key={data}>
                                    <FormControlLabel value={data} onChange={onChangeSport2} className="search-select-checkbox2" control={<Checkbox/>} label={data} />
                                    </div> 
                                )}
                            </FormGroup>
                        </Grid>
                    </div>
                </div>
                <h5 className="search-keyword">キーワード</h5>
            </div>
            <div className="search-text">
                <input type="text" className="search_text_width"></input>
            </div>
            <div className="search-select">
                <h5 className="search-select-items">締切含む<input type="checkbox" onClick={onClickDeadLine}></input></h5>
            </div>
            <div className="search-last">
                <h4>この条件の企業数<span className="search-last-numbers">{numbers}</span>社</h4>
            </div>
		</div>
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>
                {/* メイン画面（右上表示アイコンとカード） */}
                <div className="CompanyaSerch-card-flex">
                    <div className="CompanyaSerch_all_cards">
                        <div className="CompanyaSerch_button">
                    <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked={bookSW}  onClick={onClickBookmark}/>}
                // label="MUI switch"
                />
            </div>
                        <Grid container spacing={12} alignItems="flex-end">
                            {
                                datas.map(companyInfo =>
                                    <Grid item lg={4} key={companyInfo.briefing_session_id}>
                                        <CompanyCard card={companyInfo} book={bookmark} />
                                    </Grid>
                                )}
                        </Grid>
                    </div>
                </div>
            </div>

            <div className="application_form_button_serch">
                <AlertDialog2 className1="application_CompanySearch" icon={<CreateRoundedIcon />} />
            </div>

            <footer className="copyright_footer">
                <br/>
                <CopyRight />
                <br/>
            </footer>
        </div>
    </CompanyaSerchContext.Provider>
    )
}
export default CompanySerchPage;