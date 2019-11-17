import React , {useState} from 'react';
import Highlight from '../components/highlight/Highlight';
import Selector from '../components/highlight/Selector';
import './highlights.scss';
const HighlightPage = () => {
        const [modal2Visible,SetModal2Visible] = useState(false);
        return (
        <>
            <div className="Home">
                <div className="container" style={{marginBottom: "20px"}}>
                    <Selector modal2Visible={modal2Visible} SetModal2Visible={SetModal2Visible}/>
                </div>
                <div className="container">
                        <Highlight youtubeLink="https://www.youtube.com/watch?v=i1IKnWDecwA"/>
                        <Highlight youtubeLink="https://www.youtube.com/watch?v=duLLjVcyOx8"/>
                </div>
            </div>
        </>
    )
}
export default HighlightPage;