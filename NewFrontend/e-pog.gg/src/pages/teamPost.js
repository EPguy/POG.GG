import React, {useEffect, useState} from 'react';
import AppLayout from '../components/AppLayout/AppLayout';
import { Typography } from 'antd';
import queryString from 'query-string';
import axios from 'axios';
import './teamPost.css';

const { Title } = Typography;

const teamPost = ({location}) => {
    
    return(
        <>
            <AppLayout/>
            <div className="article">
                <div className="article-header">
                    <div className="article__title">ㅎㅇㅎㅇㅎㅇㅎㅇㅎ</div>
                    <div className="article-meta">
                        <div className="article-meta-list">
                            <div className="article-list-item-meta__item">
                                <a href="#"><img src="https://qwer.gg/images/logos/AF.png"/></a>
                            </div>
                            <div className="article-meta__item">
                                <span>6시간전</span>
                            </div>
                            <div className="article-meta__item article-meta__item--name">
                                <span>CvMax</span>
                            </div>
                        </div>
                        <div className="article-meta-list article-meta-list--right">
                            <div className="article-meta__item">
                                <span>조회 30,623</span>
                            </div>
                            <div className="article-meta__item">
                                <span>댓글 45</span>
                            </div>
                            <div className="article-meta__item">
                                <span>추천 415</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-content-wrap">
                    <div className="article-content">
                        <p>ㅁㄴㅇㄴㅁㅇ</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default teamPost;