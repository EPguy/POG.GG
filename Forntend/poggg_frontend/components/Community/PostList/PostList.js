import React from 'react';

const PostList = () => {
    return(
        <>
            <div className="Post_top">
                <div className="array_tab">
                    <button type="button" className="tab_button on">전체글</button>
                    <button type="button" className="tab_button">개념글</button>
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
                        <tbody>
                            <tr className="post"> 
                                <td className="post_champ">아</td>
                                <td className="post_num">아</td>
                                <td className="post_title">아</td>
                                <td className="post_writer">아</td>
                                <td className="post_date">아</td>
                                <td className="post_count">아</td>
                                <td className="post_recommend">아</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <style jsx global>
                {`
                    .Post_top {
                        width: 1000px;
                        margin: 0 auto;
                    }
                    .array_tab {
                        margin-top: 30px;
                        width: 250px;
                        height: 32px;
                    }
                    .tab_button {
                        width: 82px;
                        height: 32px;
                        border: 1px solid #ccc;
                        border-radius: 2px;
                        font-size: 14px;
                        font-weight: bold;
                        color: #333;
                        margin-right: 5px;
                    }
                    .tab_button.on{
                        border: 1px solid #3c4790;
                        background: #4a57a8;
                        color: #fff;
                        text-shadow: 0px -1px #343d8e;
                    }
                    .Post_bottom {
                        width: 1000px;
                        margin: 0 auto;
                    }
                    .tip_list {
                        width: 1000px;
                        border-bottom: 1px solid;
                    }
                    .tip_list thead tr th {
                        height: 37px;
                        border-width: 2px 0 1px;
                        border-style: solid;
                        border-color: #3c4790;
                        vertical-align: middle;
                        text-align: center;
                        color: #333;
                        font-family: Dotum,'돋움';
                    }
                `}
            </style>
        </>
    )
}

export default PostList;