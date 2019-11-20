import React from 'react';
import './PostList.css'
const PostList = () => {
    return(
        <>
            <div className="Post_top">
                <div className="array_tab">
                    <button type="button" className="tab_button on">전체글</button>
                    <button type="button" className="tab_button">인기글</button>
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
                            <tr className="post"> 
                                <td className="post_champ post_item"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Kassadin.png"/></td>
                                <td className="post_num post_item">0000001</td>
                                <td className="post_title">챌린저 1등이 알려주는 카사딘</td>
                                <td className="post_writer post_item">아싸 호랑나비</td>
                                <td className="post_date post_item">09-23</td>
                                <td className="post_count post_item">2321</td>
                                <td className="post_recommend post_item">123</td>
                            </tr>
                            <tr className="post"> 
                                <td className="post_champ post_item"><img src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Kassadin.png"/></td>
                                <td className="post_num post_item">0000002</td>
                                <td className="post_title">챌린저 1등이 알려주는 카사딘</td>
                                <td className="post_writer post_item">아싸 호랑나비</td>
                                <td className="post_date post_item">09-23</td>
                                <td className="post_count post_item">512312</td>
                                <td className="post_recommend post_item">122</td>
                            </tr>
                            
                        </tbody>
                    </table>
            </div>
            <div className="Post_fotter">
                <button type="button" className="tab_button">글쓰기</button>
            </div>
        </>
    )
}

export default PostList;