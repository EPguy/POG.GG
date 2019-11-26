import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import './PostList.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
const PostList = ({location}) => {
    const [postList, setPostList] = useState([]);
    console.log(location)
    useEffect(() => {
        const query = queryString.parse(location.search);
        let {champName} = query;
        if(champName === undefined) {champName = "all";}
        axios.get("http://192.168.137.1:8080/tipboard",{
            params: {   
                champion: champName,
                pageNum: 1,
                way: "voteCount"
            }
        })
        .then(response => {
            console.log(response.data)
            setPostList(response.data)
        })
    },[])
    const getTimestamp = (ts) => {
        let returnData = "";
        var writeDay = new Date(ts);
        var nowtimestamp = new Date().getTime();
        var now = new Date(nowtimestamp);

        var minus;
        if(now.getFullYear() > writeDay.getFullYear()){
            minus= now.getFullYear()-writeDay.getFullYear();
            returnData = minus+"년 전";
        }else if(now.getMonth() > writeDay.getMonth()){
            minus= now.getMonth()-writeDay.getMonth();
            returnData =minus+"달 전";
        }else if(now.getDate() > writeDay.getDate()){
            minus= now.getDate()-writeDay.getDate();
            returnData = minus+"일 전";
        }else if(now.getDate() == writeDay.getDate()){
            var nowTime = now.getTime();
            var writeTime = writeDay.getTime();

            if(nowTime>writeTime){
                let sec = parseInt(nowTime - writeTime) / 1000;
                let day  = parseInt(sec/60/60/24);
                sec = (sec - (day * 60 * 60 * 24));
                let hour = parseInt(sec/60/60);
                sec = (sec - (hour*60*60));
                let min = parseInt(sec/60);
                sec = parseInt(sec-(min*60));

                if(hour>0){
                    returnData = hour+"시간 전";
                }else if(min>0){
                    returnData = min+"분 전";
                }else if(sec>0){
                    returnData = sec+"초 전";
                }
            }
        }
        return returnData;
    }
    return(
        <>
            <div className="Post_top">
                <div className="array_tab">
                    <button type="button" className="tab_button on">인기순</button>
                </div>
            </div>
            <div className="Post_bottom">
                    <table className="tip_list">
                        <colgroup>
                            <col style={{width:"6%"}}/>
                            <col style={{width:"6%"}}/>
                            <col/>
                            <col style={{width:"18%"}}/>
                            <col style={{width:"6%"}}/>
                            <col style={{width:"6%"}}/>
                            <col style={{width:"6%"}}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">챔피언</th>
                                <th scope="col">번호</th>
                                <th scope="col">제목</th>
                                <th scope="col">글쓴이</th>
                                <th scope="col">작성일</th>
                                <th scope="col">조회</th>
                                <th scope="col">추천</th>
                            </tr>
                        </thead>
                        <tbody style={{fontSize: "13px"}}>
                            {
                                postList.map((v,i) => (
                                    <tr className="post" onClick={() => document.location.href=`/teamPost?freeid=${v.freeId}`} style={{}} key={i}>
                                            <td className="post_champ post_item"><img src={`https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${v.champion}.png`}/></td>
                                            <td className="post_num post_item">{v.freeId}</td>
                                            <td style={{textAlign: "center"}}className="post_title">{v.title}</td>
                                            <td className="post_writer post_item">{v.writer}</td>
                                            <td className="post_date post_item">{getTimestamp(v.date)}</td>
                                            <td className="post_count post_item">{v.viewCount}</td>
                                            <td className="post_recommend post_item">{v.voteCount}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            </div>
            <div className="Post_fotter">
                <Link to="/editor"><button type="button" className="tab_button">글쓰기</button></Link>
            </div>
        </>
    )
}

export default PostList;