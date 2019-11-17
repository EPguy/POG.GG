import React, {useState, useEffect} from 'react';
import {Modal} from 'antd';
import { Input } from 'antd';
import axios from 'axios';
import './Selector.scss';
const Selector = ({modal2Visible, SetModal2Visible}) => {
    const [userInfo, setUserInfo] = useState({});
    const [youtubeLink, SetYoutubeLink] = useState('');
    useEffect(() => {
        if(localStorage.getItem('token')) {
            axios.post("http://192.168.137.1:8080/tokenRequest", {
                token: localStorage.getItem('token')
            })
            .then(response => {
                setUserInfo({
                    password: response.data.password,
                    userid: response.data.userid,
                    username: response.data.username
                })
                setIsLogin(true)
                console.log(userInfo)
            })
            .catch(error => {
                setIsLogin(false)
                console.log(error)
          })
        } 
    },[])
    return (
        <>
            <div className="Selector_container">
                <div className="Selector_top">
                    <div className="upload-button" onClick={() => SetModal2Visible(true)}><span>등록하기</span></div>
                </div>
                <div className="Selector_underline"></div>
                <div className="Selector_bottom">
                    <div className="categori"><span>전체</span></div>
                    <div className="categori"><span>게임</span></div>
                    <div className="categori"><span>유머</span></div>
                    <div className="categori"><span>음악</span></div>
                </div>
            </div>
            <Modal
                title="하이라이트 등록"
                centered
                visible={modal2Visible}
                onOk={() => {
                    axios.post("/highlightboardWriteRequest", {
                        link: youtubeLink,
                        categori
                    })
                    SetModal2Visible(false)
                }}
                onCancel={() => SetModal2Visible(false)}
                >
                <p style={{"fontSize": "18px"}}>카테고리</p>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
                <p style={{"fontSize": "18px"}}>유튜브 링크</p>
                <Input onChange={e => SetYoutubeLink(e.target.value)}/>
            </Modal>
        </>
    );
};

export default Selector;