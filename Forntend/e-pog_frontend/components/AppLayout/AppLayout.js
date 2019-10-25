import React from 'react';
import Link from 'next/link';
import './AppLayout.scss';
const AppLayout = ({children}) => {
    return(
        <div>
            <div className="LeagueBackground"></div>
            <nav className="Navigation">
                <div className="container">
                    <Link href="/"><a className="Menus__link Gilroy brand" >E-Pog.GG</a></Link>
                    <Link href="/highlights"><a className="Menus__link" >하이라이트</a></Link>
                    <Link href="#"><a className="Menus__link">커뮤니티</a></Link>
                    <Link href="http://localhost:3000"><a className="Menus__link">전적검색</a></Link>
                    <Link  href="/login"><a className="Menus__login float-right"><span>로그인</span></a></Link>
                </div>
            </nav>
            {children}
            <style global jsx>
                {`
                    
                `}
            </style>
        </div>
    )
}

export default AppLayout;