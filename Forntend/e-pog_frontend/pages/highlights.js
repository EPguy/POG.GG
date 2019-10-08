import React from 'react';
import Highlight from '../components/highlight/Highlight';

const Home = () => (
    <>
        <div className="Home">
            <div className="container">
                    <Highlight youtubeLink="https://www.youtube.com/watch?v=iUpqKAf8x3g&feature=youtu.be"/>
            </div>
        </div>
        <style jsx>
            {`
                .Home .container {
                    background-color: #2a2b30;
                }
            `}
        </style>
    </>
)
export default Home;