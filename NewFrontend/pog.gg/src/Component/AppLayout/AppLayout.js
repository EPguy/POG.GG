import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './AppLayout.css';

const AppLayout = ({ children }) => {
    const [username, setUsername] = useState('');
    const onClick = (e) => {
        e.preventDefault();
        window.location = 'http://localhost:3000/summoner?name='+username;
    }
    const onEnterClick = (e) => {
        if(e.charCode == 13){
            onClick(e);
        }
    }
    return (
        <>
           <header class="header-gnb">
                <div class="header-items">
                    <div class="site-item">
                        <ul>
                            <li style={{backgroundColor:"#313641"}}>
                                <a style={{margin: "0 auto"}} href="#">
                                    <img src="https://poro.gg/images/family/ico_lol.png"/>
                                    <span>리그오브레전드</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="sub-items">
                <div class="sub-items-top">
                        <div class="sub-items-top-logo"><h1>POG.GG</h1></div>
                        <div class="sub-items-top-input">
                            <input value={username} onKeyPress={onEnterClick} onChange={(e) => setUsername(e.target.value)} placeholder="챔피언, 소환사명 검색"/>
                            <button onClick={(e) => onClick(e)}><i className="fas fa-search"></i></button>
                        </div>
                </div>
                <div class="sub-items-bottom">
                    <div class="sub-items-list">
                        <ul>
                            <li><a href="/">홈</a></li>
                            <li><a href="http://localhost:3001/">e스포츠</a></li>
                            <li><a href="/community">팁 게시판</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="notice">
                <div class="notice_item">
                    <i className="fas fa-exclamation-circle" style={{paddingRight: "5px"}}></i>
                    안녕하세요 pog.gg에 오신것을 환영합니다!
                </div>
            </div>
        </>
    )
}

export default AppLayout;