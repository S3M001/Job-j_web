import '../css/CompanyCard.css';
import Kinmu from '../images/勤務地icon.png';
import Jyugyo from '../images/従業員数icon.png';
import Syoku from '../images/職種icon.png';
import AlertDialog1 from './User_modal/detail';
import companyService from '../service/api/companyService';
import {useAuth} from "../service/store/auth";
import { useState } from "react";

import { IconButton } from "@mui/material";
import FavoriteIcon from "../../node_modules/@mui/icons-material/Favorite";
import FavoriteBorderIcon from "../../node_modules/@mui/icons-material/FavoriteBorder";

import React, { useEffect } from "react";
import { useContext } from 'react'
import {CompanyaSerchContext} from "../pages/User/CompanySerch"

const CompanyCard = ({ card,book }) => {
    const [favo, setFavo] = useState(false);
    const [cpy, setCpy] = useState({
        briefing_session_id:card.briefing_session_id,
    });
    console.log(cpy)
    //student_numberを持ってくる
    const auth = useAuth()
    cpy.student_number = auth.user.student_number
    console.log(auth.user.student_number)
    console.log(book)

    const methodReflesh = useContext(CompanyaSerchContext)


    useEffect(() => {
        
        //bookmarkに登録されていればハートに色を付ける
        book.forEach((book) => {
            console.log(book)
            if(cpy.student_number === book.student.student_number){
                console.log(book.briefingSession.briefing_session_id)
                if(cpy.briefing_session_id === book.briefingSession.briefing_session_id){
                    setFavo(true);
                    console.log(cpy)
                }
            } 
        });
    }, []);

    const Bookmark = () =>{

        //いいねボタン(いいねしたとき)
        if (favo === false) {
            setFavo(true);
            console.log(cpy)
            delete cpy.company
            
            companyService.insertbookmark(cpy)
            methodReflesh.changeR()
            console.log(card)
            console.log("成功")
        } else {
            setFavo(false);
        }

        //いいねボタン(いいねをはずしたとき)
        if (favo === true) {
            setFavo(false);

            companyService.deletebookmark(cpy)
            methodReflesh.changeR()
        } else {
            setFavo(true);
        }
    }
    if(card.company.name.length>=8){
        card.companyName=card.company.name.substring(0,7)+"⋯"
    }else{
        card.companyName=card.company.name
    }
    if(card.company.location.length>=14){
        card.companyLocation=card.company.location.substring(0,13)+"⋯"
    }else{
        card.companyLocation=card.company.location
    } 
    if(card.location.trim()===""){
        card.location="未入力"
    }
    if(card.occupation.trim()===""){
        card.occupation="未入力"
    }
    if(card.company.number===""){
        card.company.number="xxx"
    }
    //締め切りカード色変更
    const today = new Date(Date.now());
    const year = today.getFullYear()
    const month = ('0' + (today.getMonth() + 1)).slice(-2)
    const day = ('0' + (today.getDay()+21)).slice(-2)
    const todayStart = (year + '/' + month + '/' + day)
    let todaychange = new Date(todayStart)
    let deadline = new Date(card.deadline)
    let changeClassName1 = "card"
    let changeClassName2 = "card__textbox"
    if (deadline < todaychange){
        changeClassName1 = "card2"
        changeClassName2 = "card__textbox2"

    }

    return (
        <div className={changeClassName1}>
            <div className={changeClassName2}>
                <div className='card_titleFlex'>
                    <div className='card_titleTopFlex'>
                        <span className="card__titletext">
                            {card.companyName}
                        </span>
                    </div>
                    <span>
                        <IconButton onClick={() => Bookmark()}>
                        {/* <button className="heart" type="button" onClick={() => Bookmark ()}>
                            <svg className="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z" />
                            </svg> */}
                            {favo ? <FavoriteIcon style={{ color: "red"}} /> : <FavoriteBorderIcon />}
                        </IconButton>
                        
                        {/* </button> */}
                    </span>
                </div>

                <div className="card_beside">
                    <span className="card__overviewtext">
                        本社 : {card.companyLocation}
                    </span>
                </div>
                <div className='card_boxFlex'>
                    <div className="card_text">
                        <img src={Kinmu} width="40" height="40" alt='勤務地' />
                        <p className="card_text_font">{card.location}</p>
                    </div>
                    <div className="card_text">
                        <img src={Syoku} width="40" height="40" alt='職種' />
                        <p className="card_text_font">{card.occupation}</p>
                    </div>
                    <div className="card_text">
                        <img src={Jyugyo} width="40" height="40" alt='従業員数' />
                        <p className="card_text_font">{card.company.number}人</p>
                    </div>
                    <span className="card_button">
                        <AlertDialog1 cardInfo={card} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CompanyCard;