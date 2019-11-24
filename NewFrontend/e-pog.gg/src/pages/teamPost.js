import React, {useEffect, useCallback, useState} from 'react';
import AppLayout from '../components/AppLayout/AppLayout';
import { Typography } from 'antd';
import queryString from 'query-string';
import axios from 'axios';
import './teamPost.css';

const { Title } = Typography;

const TeamPost = ({location}) => {
    const query = queryString.parse(location.search);
    let {freeid} = query;
    const [postInfo, setPostInfo] = useState({});
    const [postComment, setPostComment] = useState('');
    const [commentArray, setCommentArray] = useState([
        {
            recomended: 1,
            regData: "7시간 전",
            content: "hi",
            writer: "노농좋아"
        }
    ]);
    const onCommentChange = useCallback((e) => {
        setPostComment(e.target.value);
    },[])
    const commentPost = () => {
        axios.post("http://192.168.137.1:8080/makeComment", {
            postType: 2,
            content: postComment
        }, {
            headers: localStorage.getItem('token')
        })
        .then(response => setCommentArray(commentArray.concat(response.data)))
        .catch(error => console.log(error))
    }
    useEffect(() => {
        axios.get("http://192.168.137.1:8080/showByRecommended", {
            params: {
                freeId: freeid,
                postType: 2
            }
        })
        .then(response => setCommentArray(response.data))
        .catch(error => console.log(error))
        axios.get("http://192.168.137.1:8080/postInfo", {
            params: {
                freeId: freeid,
                postType: 2
            }
        })
        .then(response => setPostInfo(response.data))
        .catch(error  => console.log(error))
    })
    const onCommentLikeButton = (commentId) => {
        axios.patch("http://192.168.137.1:8080/ddabbong", {}, {
            params: {
                comment_id: commentId
            }
        })
        .then(response => {
            alert("추천 완료!")
        })
        .catch(error => {
            alert("에러!")
        })
    }
    const onCommentDisLikeButton = () => {
        axios.patch("http://192.168.137.1:8080/ddabbong", {}, {
            params: {
                freeId: freeid,
                voteCount: -1,
                postType: 2
            }
        })
        .then(response => {
            alert("비추천 완료!")
        })
        .catch(error => {
            alert("에러!")
        })
    } 
    const onPostLikeButton = () => {
        axios.patch("http://192.168.137.1:8080/voteRequest", {}, {
            params: {
                freeId: freeid,
                voteCount: 1,
                postType: 2 
            }
        })
        .then(response => {
            alert("추천 완료!")
        })
        .catch(error => {
            alert("에러!")
        })
    }
    const onPostDisLikeButton = () => {
        axios.patch("http://192.168.137.1:8080/voteRequest", {}, {
            params: {
                freeId: freeid,
                voteCount: -1,
                postType: 2
            }
        })
        .then(response => {
            alert("추천 완료!")
        })
        .catch(error => {
            alert("에러!")
        })
    }
    return(
        <>
            <AppLayout/>
            <div className="article">
                <div className="article-header">
                    <div className="article__title">{postInfo.title}</div>
                    <div className="article-meta">
                        <div className="article-meta-list">
                            <div className="article-list-item-meta__item">
                                <a href="#"><img src={`https://qwer.gg/images/logos/${postInfo.teamName}.png`}/></a>
                            </div>
                            <div className="article-meta__item">
                                <span>{postInfo.date}</span>
                            </div>
                            <div className="article-meta__item article-meta__item--name">
                                <span>{postInfo.writer}</span>
                            </div>
                        </div>
                        <div className="article-meta-list article-meta-list--right">
                            <div className="article-meta__item">
                                <span>조회 {postInfo.viewCount}</span>
                            </div>
                            <div className="article-meta__item">
                                <span>추천 {postInfo.voteCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-content-wrap">
                    <div className="article-content">
                        <p>{postInfo.content}</p>
                    </div>
                </div>
                <div className="postVote">
                    <div className="article-vote">
                        <button className="article-vote__button button">
                            <span className="article-vote__up-arrow" onClick={() => onPostLikeButton()}>추천</span>
                            <span className="article-vote__count">{postInfo.voteCount}</span>
                            <span className="article-vote__down-arrow" onClick={() => onPostDisLikeButton()}>비추천</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="comment">
                <div className="comment-wrap">
                    <div className="comment-header">
                        <h2 className="comment__title">댓글</h2>
                        <span className="comment__count">총&nbsp; 
                            <em>165</em>
                            개
                        </span>
                    </div>
                    <div className="comment-write">
                        <div className="comment-write-inner">
                            <div className="comment-write__name">노농좋아</div>
                            <div className="comment-write__content">
                                <textarea value={postComment} onChange={(e) => onCommentChange(e)}/>
                            </div>
                            <div className="comment-write-footer">
                                <div className="comment-write-additon"></div>
                                <div className="comment-write-submit">
                                    <button className="button--green" onClick={() => commentPost()}>작성</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="comment-bottom">
                        <div className="comment-sort">
                            <ul className="comment-sort__list">
                                <li className="comment-sort__item active">
                                    <button>인기순</button>
                                </li>
                                <li className="comment-sort__item">
                                    <button>최신순</button>
                                </li>
                            </ul>
                        </div>
                        <div className="comment-list">
                            {
                                commentArray.map((v,i) => {
                                    return (
                                        <div className="comment-l">
                                            <div className="comment_body">
                                                <div className="comment-vote">
                                                    <button className="comment-vote__up" onClick={() => onCommentLikeButton(v.commentId)}></button>
                                                    <div className="comment-vote__count">{v.recomended}</div>
                                                    <button className="comment-vote__down" onClick={() => onCommentDisLikeButton(v.commentId)}></button>
                                                </div>
                                                <div className="comment-meta">
                                                    <span className="comment__name">
                                                        <span>{v.writer}</span>
                                                    </span>
                                                    <span className="comment__date">
                                                        <span className="comment_date__before"></span>
                                                        {v.regData}
                                                    </span>
                                                </div>
                                                <div className="comment-content">
                                                    <div className="comment-content">
                                                        <div>
                                                            <p>{v.content}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="comment-button">
                                                    <button className="comment-button__item"><img src="https://talk.op.gg/images/icon-reply@2x.png"/>답글쓰기</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamPost;