import React, {useEffect, useState} from 'react';
import * as api from '../../api/api';

const MatchSchedule = () => {
    const [pastLCLMatch, SetPastLCLmatch] = useState([]);
    const [pastLJLMatch, SetPastLJLmatch] = useState([]);
    const [pastLECMatch, SetPastLECmatch] = useState([]);
    const [pastVCSMatch, SetPastVCSmatch] = useState([]);
    const [isLoding, SetIsLoding ] = useState(false);
    const matchFilter = (match) => {
        for(let i = 0; i < match.length; i++) {
            if(match[i].league.name === "LCL") {
                SetPastLCLmatch(pastLCLMatch => pastLCLMatch.concat(match[i]))
            } else if(match[i].league.name === "LJL") {
                SetPastLJLmatch(pastLJLMatch => pastLJLMatch.concat(match[i]))
            } else if(match[i].league.name === "LEC") {
                SetPastLECmatch(pastLECMatch => pastLECMatch.concat(match[i]))
            } else if(match[i].league.name === "VCS") {
                SetPastVCSmatch(pastVCSMatch => pastVCSMatch.concat(match[i]))
            }
        }
    }
    useEffect(() => {
        api.getPastMatch()
        .then(response => {
            matchFilter(response.data)
            SetIsLoding(true)
        })
        .catch(error => console.log(error))
    },[])
    return (
        <>
            <div className="FluidContainer container-fluid">
                <div className="container Intro_section">
                    <h3 className="Title Gilroy">
                        MATCH SCHEDULE
                        <div className="Title__squares">
                            <div className="Title__square"></div>
                            <div className="Title__square"></div>
                            <div className="Title__square small"></div>
                            <div className="Title__square small"></div>
                        </div>
                    </h3>
                    {
                        isLoding ?
                        (<ul className="RecentMatches">
                            <div className="RecentMatches__split Gilroy">LCL 2019 Summer Season</div>
                            {
                                pastLCLMatch && pastLCLMatch.map(v => {
                                    return (
                                        <li>
                                            <a className="MatchBar" href="#">
                                                <div className="MatchBar__column date Gilroy finished">
                                                    {v.end_at}
                                                </div>
                                                <div className="MatchBar__column home">
                                                    <span className="Gilroy MatchBar__team__line">{v.opponents[0].opponent.acronym}</span>
                                                    <figure className="TeamSymbol MatchBar__column__symbol hidden-in-phone circleless">
                                                        <div className="TeamSymbol__image" style={{backgroundImage: `url(${v.opponents[0].opponent.image_url})`}}></div>
                                                    </figure>
                                                </div>
                                                <div className="MatchBar__column board">
                                                    <div className="ScoreBoard Gilroy MatchBar__column__score">
                                                        <div className="ScoreBoard__overlay">RESULT</div>
                                                        {v.results[0].score} : {v.results[1].score}
                                                    </div>
                                                </div>
                                                <div className="MatchBar__column away">            
                                                        <figure className="TeamSymbol MatchBar__column__symbol hidden-in-phone circleless">
                                                            <div className="TeamSymbol__image" style={{backgroundImage: `url(${v.opponents[1].opponent.image_url}`}}></div>
                                                        </figure>
                                                        <span className="Gilroy MatchBar__team__line">{v.opponents[1].opponent.acronym}</span>
                                                    </div>
                                                
                                                <div className="MatchBar__column arrow Gilroy">
                                                    DETAIL
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }   
                            <div className="RecentMatches__split Gilroy">LJL 2019 Summer Season</div>
                            {
                                pastLJLMatch && pastLJLMatch.map(v => {
                                    console.log(v)
                                    return (
                                        <li>
                                            <a className="MatchBar" href="#">
                                                <div className="MatchBar__column date Gilroy finished">
                                                    {v.end_at}
                                                    <br/>
                                                    13:00
                                                </div>
                                                <div className="MatchBar__column home">
                                                    <span className="Gilroy MatchBar__team__line">{v.opponents[0].opponent.acronym}</span>
                                                    <figure className="TeamSymbol MatchBar__column__symbol hidden-in-phone circleless">
                                                        <div className="TeamSymbol__image" style={{backgroundImage: `url(${v.opponents[0].opponent.image_url})`}}></div>
                                                    </figure>
                                                </div>
                                                <div className="MatchBar__column board">
                                                    <div className="ScoreBoard Gilroy MatchBar__column__score">
                                                        <div className="ScoreBoard__overlay">RESULT</div>
                                                        {v.results[0].score} : {v.results[1].score}
                                                    </div>
                                                </div>
                                                <div className="MatchBar__column away">            
                                                        <figure className="TeamSymbol MatchBar__column__symbol hidden-in-phone circleless">
                                                            <div className="TeamSymbol__image" style={{backgroundImage: `url(${v.opponents[1].opponent.image_url}`}}></div>
                                                        </figure>
                                                        <span className="Gilroy MatchBar__team__line">{v.opponents[1].opponent.acronym}</span>
                                                    </div>
                                                
                                                <div className="MatchBar__column arrow Gilroy">
                                                    DETAIL
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                            <div className="RecentMatches__split Gilroy">LEC 2019 Summer Season</div>
                            {
                                pastLECMatch && pastLECMatch.map(v => {
                                    console.log(v)
                                    return (
                                        <li>
                                            <a className="MatchBar" href="#">
                                                <div className="MatchBar__column date Gilroy finished">
                                                    {v.end_at}
                                                    <br/>
                                                    13:00
                                                </div>
                                                <div className="MatchBar__column home">
                                                    <span className="Gilroy MatchBar__team__line">{v.opponents[0].opponent.acronym}</span>
                                                    <figure className="TeamSymbol MatchBar__column__symbol hidden-in-phone circleless">
                                                        <div className="TeamSymbol__image" style={{backgroundImage: `url(${v.opponents[0].opponent.image_url})`}}></div>
                                                    </figure>
                                                </div>
                                                <div className="MatchBar__column board">
                                                    <div className="ScoreBoard Gilroy MatchBar__column__score">
                                                        <div className="ScoreBoard__overlay">RESULT</div>
                                                        {v.results[0].score} : {v.results[1].score}
                                                    </div>
                                                </div>
                                                <div className="MatchBar__column away">            
                                                        <figure className="TeamSymbol MatchBar__column__symbol hidden-in-phone circleless">
                                                            <div className="TeamSymbol__image" style={{backgroundImage: `url(${v.opponents[1].opponent.image_url}`}}></div>
                                                        </figure>
                                                        <span className="Gilroy MatchBar__team__line">{v.opponents[1].opponent.acronym}</span>
                                                    </div>
                                                
                                                <div className="MatchBar__column arrow Gilroy">
                                                    DETAIL
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }    
                            <div className="RecentMatches__split Gilroy">VCS 2019 Summer Season</div>
                            {
                                pastVCSMatch && pastVCSMatch.map(v => {
                                    console.log(v)
                                    return (
                                        <li>
                                            <a className="MatchBar" href="#">
                                                <div className="MatchBar__column date Gilroy finished">
                                                    {v.end_at}
                                                    <br/>
                                                    13:00
                                                </div>
                                                <div className="MatchBar__column home">
                                                    <span className="Gilroy MatchBar__team__line">{v.opponents[0].opponent.acronym}</span>
                                                    <figure className="TeamSymbol MatchBar__column__symbol hidden-in-phone circleless">
                                                        <div className="TeamSymbol__image" style={{backgroundImage: `url(${v.opponents[0].opponent.image_url})`}}></div>
                                                    </figure>
                                                </div>
                                                <div className="MatchBar__column board">
                                                    <div className="ScoreBoard Gilroy MatchBar__column__score">
                                                        <div className="ScoreBoard__overlay">RESULT</div>
                                                        {v.results[0].score} : {v.results[1].score}
                                                    </div>
                                                </div>
                                                <div className="MatchBar__column away">            
                                                        <figure className="TeamSymbol MatchBar__column__symbol hidden-in-phone circleless">
                                                            <div className="TeamSymbol__image" style={{backgroundImage: `url(${v.opponents[1].opponent.image_url}`}}></div>
                                                        </figure>
                                                        <span className="Gilroy MatchBar__team__line">{v.opponents[1].opponent.acronym}</span>
                                                    </div>
                                                
                                                <div className="MatchBar__column arrow Gilroy">
                                                    DETAIL
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }     
                        </ul>) : <div style={{ width: "1120px", display:"flex", justifyContent: "center"}}><img style={{width: "50px", height: "50px"}}src="/static/loading.gif"/></div>
                    }
                </div>
            </div>
            <style global jsx>
                {`
                    .RecentMatches {
                        padding: 0;
                        margin: -1.5rem 0 0;
                    }
                    .RecentMatches__split {
                        float: right;
                        margin: .625rem;
                    }
                    .RecentMatches li, .RecentMatchesul {
                        margin: 0;
                        list-style: none;
                    }
                    .MatchBar {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: 5rem;
                        background-color: #27282d;
                        width: 100%;
                        color: #fbfbfb;
                        margin-bottom: .125rem;
                        position: relative;
                        transition: background-color 150ms ease 0ms;
                    }
                    .MatchBar:hover {
                        background-color : #33343B;
                    }
                    .MatchBar__column.arrow, .MatchBar__column.date {
                        width: 6.25rem;
                    }
                    .MatchBar__column.date {
                        padding-left: 1.25rem;
                    }
                    .MatchBar__column.finished {
                        color: #5b5c64;
                    }
                    .MatchBar__column {
                        white-space: nowrap;
                        position: relative;
                    }
                    .MatchBar__column.home {
                        text-align: right;
                    }
                    .MatchBar__column.away, .MatchBar__column.home {
                        width: 30%;
                    }
                    .MatchBar__column.board {
                        text-align: center;
                    }
                    .MatchBar__column.away {
                        text-align: left;
                    }
                    .MatchBar__column.away, .MatchBar__column.home {
                        width: 30%;
                    }
                    .MatchBar__column {
                        white-space: nowrap;
                        position: relative;
                    }
                    .MatchBar__column.arrow, .MatchBar__column.date {
                        width: 6.25rem;
                    }
                    .MatchBar__column.arrow {
                        text-align: right;
                        padding-right: 1.25rem;
                        justify-self: right;
                    }
                    .ScoreBoard {
                        position: relative;
                        width: 7.5rem;
                        height: 2.5rem;
                        line-height: 2.5rem;
                        background-color: #1e2025;
                        overflow-y: hidden;
                        cursor: pointer;
                    }
                    .ScoreBoard__overlay {
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        animation-fill-mode: both;
                        background-color: #db0442;
                        transition: transform 300ms ease-in-out;
                        
                    }
                    .ScoreBoard__overlay:hover {
                        transform:translateY(-100%) 
                    }
                    .MatchBar__team__line {
                        margin: 0 1.5625rem;
                        position: relative;
                        top: -1.3rem;
                    }
                `}
            </style>
        </>
    )
}

export default MatchSchedule;