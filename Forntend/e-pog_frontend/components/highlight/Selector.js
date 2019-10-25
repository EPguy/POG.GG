import React from 'react';
import './Selector.scss';
const Selector = () => {
    return (
        <>
            <div className="Selector_container">
                <div className="Selector_top">
                    <div className="upload-button"><span>등록하기</span></div>
                </div>
                <div className="Selector_underline"></div>
                <div className="Selector_bottom">
                    <div className="categori"><span>전체</span></div>
                    <div className="categori"><span>게임</span></div>
                    <div className="categori"><span>유머</span></div>
                    <div className="categori"><span>음악</span></div>
                </div>
            </div>
        </>
    );
};

export default Selector;