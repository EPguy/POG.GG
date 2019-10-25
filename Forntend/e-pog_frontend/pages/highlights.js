import React from 'react';
import Highlight from '../components/highlight/Highlight';
import Selector from '../components/highlight/Selector';
import './highlights.scss';
const HighlightPage = () => (
    <>
        <div className="Home">
            <div className="container" style={{marginBottom: "20px"}}>
                <Selector/>
            </div>
            <div className="container">
                    <Highlight youtubeLink="https://www.youtube.com/watch?v=i1IKnWDecwA"/>
                    <Highlight youtubeLink="https://www.youtube.com/watch?v=duLLjVcyOx8"/>
            </div>
        </div>
    </>
)
export default HighlightPage;