import React, {useState, useEffect} from 'react';
import { Icon, Avatar, Comment, Tooltip, Button, Input } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { white } from 'ansi-colors';

const Highlight = ({youtubeLink}) => {
    console.log(youtubeLink)
    const [likes, SetLikes] = useState(0);
    const [dislikes, SetDislikes] = useState(0);
    const [action, SetAction] = useState(null);
    const [showPreview, SetShowPreview] = useState('none');
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
    const like = () => {
        SetLikes(1);
        SetDislikes(0);
        SetAction('liked');
    };
    
    const dislike = () => {
        SetLikes(0);
        SetDislikes(1);
        SetAction('disliked');
    };
    const actions = [
        <span key="comment-basic-like">
          <Tooltip title="Like">
            <Icon
              type="like"
              theme={action === 'liked' ? 'filled' : 'outlined'}
              onClick={like}
            />
          </Tooltip>
          <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
        </span>,
        <span key=' key="comment-basic-dislike"'>
          <Tooltip title="Dislike">
            <Icon
              type="dislike"
              theme={action === 'disliked' ? 'filled' : 'outlined'}
              onClick={dislike}
            />
          </Tooltip>
          <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
        </span>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];
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
                        <span>댓글 (16개)</span>
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
            <div className="comment">
                <Input.Search
                    placeholder="댓글을 입력해 주세요."
                    enterButton="입력"
                    onSearch={value => console.log(value)}
                />
                <Comment
                    style={{backgroundColor: "white"}}
                    actions={actions}
                    author={<a>Han Solo</a>}
                    avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                    }
                    content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                    </p>
                    }
                    datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                    }
                />
            </div>
            <style jsx>
                {`
                    .highlight {
                        cursor: pointer;
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
                        background-color: #2a2b30;
                    }
                `}
            </style>
        </>
    )
};

export default Highlight;