import React from 'react';
import Highlight from '../components/highlight/Highlight';

const Home = () => (
    <>
        <div className="Home">
            <div className="container">
                    <Highlight youtubeLink="https://www.youtube.com/watch?v=iUpqKAf8x3g&feature=youtu.be"/>
                    <Highlight youtubeLink="https://www.youtube.com/watch?v=goVHnE-pdZM"/>
            </div>
        </div>
        <style jsx global>
            {`
                .Home .container {
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width: 1000px;
                    background-color: #2a2b30;
                    
                }
                
            `}
        </style>
    </>
)
export default Home;