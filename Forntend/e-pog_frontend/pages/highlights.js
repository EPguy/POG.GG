import React from 'react';
import Highlight from '../components/highlight/Highlight';
import './highlights.scss';
const Home = () => (
    <>
        <div className="Home">
            <div className="container">
                    <Highlight youtubeLink="https://www.youtube.com/watch?v=iUpqKAf8x3g&feature=youtu.be"/>
                    <Highlight youtubeLink="https://www.youtube.com/watch?v=goVHnE-pdZM"/>
            </div>
        </div>
    </>
)
export default Home;