import React, {useState, useEffect} from 'react';
import { Icon, Avatar, Comment, Tooltip, Button, Input } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { white } from 'ansi-colors';

const Highlight = ({youtubeLink}) => {
    console.log(youtubeLink)
    const [showPreview, SetShowPreview] = useState('none');
    const [showComment, SetShowComment] = useState('none');
    const [videoTitle, SetVideoTitle] = useState('');
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var matchs = youtubeLink.match(regExp);
    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${matchs[7]}&key=AIzaSyCHeNSQ55mXUVr5NgyOWWBTKhw2XjFT8tw&fields=items(snippet(title))&part=snippet`)
        .then(response => SetVideoTitle(response.data.items[0].snippet.title))
    }, []);
    const onClick = () => {
        if(showPreview === "none") {
            SetShowPreview('block');
        } else if(showPreview === "block") {
            SetShowPreview('none');
        }
    }
    const onCommentClick = () => {
        if(showComment === "none") {
            SetShowComment('block');
        } else if(showComment === "block") {
            SetShowComment('none');
        }
    }
    return (
        <>
            <div className="highlight">
                <div className="article-list thumbnail" onClick={() => onClick()}>
                    <img src={`http://img.youtube.com/vi/${matchs[7]}/0.jpg`}/>
                </div>
                <div className="article-list content">
                    <div className="article__title">
                        <a href={youtubeLink}>
                            <span>{videoTitle}</span>
                        </a>
                    </div>
                    <div className="article__comment">
                        <span onClick={() => onCommentClick()}>댓글 (16개)</span>
                        <span>삭제</span>
                    </div>
                </div>
                <div className="article-list raiting">
                    <img style={{marginBottom: "5px"}}src="/static/up.svg"/>
                    <div className="vote">78</div>
                    <img src="/static/down.svg"/>
                </div>
            </div>
            <div className="preview" style={{display: showPreview}}>
                <iframe id="player" type="text/html" width="740" height="411"
                src={`https://www.youtube.com/embed/${matchs[7]}`}
                frameborder="0"></iframe>
            </div>
            <div className="comment" style={{display: showComment}}>
                <div className="comment_inner">
                    <Input.Search
                        placeholder="댓글을 입력해 주세요."
                        enterButton="입력"
                        onSearch={value => console.log(value)}
                    />
                    <Comment
                        author={<a style={{color: "#77D"}}>샌즈TV</a>}
                        content={
                        <p>
                            샌즈보고싶다.
                        </p>
                        }
                        datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().fromNow()}</span>
                        </Tooltip>
                        }
                    />
                </div>
            </div>
            <style jsx>
                {`
                    .highlight {
                        display: flex;
                        padding: 20px;
                        width: 740px;
                        border-radius: 10px;   
                        -webkit-transition: background-color 0.2s;
                    } 
                    .highlight:hover {
                        background-color: #383940;
                    }
                    .article-list {
                        float: left;
                    }
                    .highlight .raiting{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        height: 112px;
                        font-size: 20px;
                    }
                    .highlight .raiting img {
                        width: 25px;
                        hight: 25px;
                    }
                    .content { 
                        text-align: center;
                        width: 300px;
                        line-height: 50px;
                        margin: 0 auto;
                    }
                    .article__title  {   
                        width: 300px;
                        height: 60px;
                    }
                    .article__comment {
                        cursor: pointer;
                        width: 260px;
                        height: 50px;
                    }
                    .article__comment span{
                        width: 120px;
                        height: 48px;
                        float: left;
                        transition: background-color 250ms ease 0ms, color 0s ease;
                    }
                    .article__comment span:hover{
                        background-color: hsla(0,0%,98.4%,.8);
                        color: #27282d;
                    }
                    .article__title a span{
                        display: inline-block;
                        text-align: left;
                        width: 300px;
                        white-space: nowrap; 
                        overflow: hidden; 
                        text-overflow: ellipsis;
                        color: #2955BC;
                        font-size: 22px;
                        text-decoration: none;
                    }
                    .thumbnail img{
                        cursor: pointer;
                        width: 150px;    
                    }
                    .preview {
                        padding-top: 10px;
                        width: 740px;
                        background-color: #2a2b30;
                    }
                    .comment {
                        padding-top: 10px;
                        width: 740px;
                        background-color: #2A2B30   ;
                    }
                    .comment_inner {
                        width: 700px;
                        margin: 0 auto;
                    }
                `}
            </style>
        </>
    )
};

export default Highlight;