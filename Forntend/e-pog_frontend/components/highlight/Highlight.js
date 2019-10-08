import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Highlight = ({youtubeLink}) => {
    const [videoTitle, SetVideoTitle] = useState('');
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var matchs = youtubeLink.match(regExp);
    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${matchs[7]}&key=AIzaSyCHeNSQ55mXUVr5NgyOWWBTKhw2XjFT8tw&fields=items(snippet(title))&part=snippet`)
        .then(response => SetVideoTitle(response.data.items[0].snippet.title))
    }, [])
    return (
        <>
            <div className="highlight">
                <div className="article-list thumbnail">
                    <img src={`http://img.youtube.com/vi/${matchs[7]}/0.jpg`}/>
                </div>
                <div className="article-list content">
                    <div className="article__title">
                        <a href={youtubeLink}>
                            <span>{videoTitle}</span>
                        </a>
                    </div>
                </div>
                <div className="article-list raiting">
                    <img style={{marginBottom: "5px"}}src="/static/up.svg"/>
                    <div className="vote">78</div>
                    <img src="/static/down.svg"/>
                </div>
            </div>
            <style jsx>
                {`
                    .highlight {
                        padding: 20px;
                        height: 170px;
                        border-radius: 10px;
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
                        width: 890px;
                        line-height: 50px;
                        margin: 0 auto;
                    }
                    .article__title a span{
                        color: #2955BC;
                        font-size: 22px;
                        text-decoration: none;
                    }
                    .thumbnail img{
                        width: 150px;    
                    }
                `}
            </style>
        </>
    )
};

export default Highlight;