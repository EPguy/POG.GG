import React , {useState, useEffect} from 'react';
import Highlight from '../components/highlight/Highlight';
import axios from 'axios';
import Selector from '../components/highlight/Selector';
import AppLayout from '../components/AppLayout/AppLayout';
import queryString from 'query-string';
import './highlights.css';
const HighlightPage = ({location}) => {
    const [highlightInfo, SetHighlightInfo] = useState([]);
    const query = queryString.parse(location.search);
    useEffect(() => {
        let {category} = query;
        if(category === undefined) {category = 0;}
        axios.get("http://192.168.137.1:8080/highlightboard", {
            params: {
                pageNum: 1,
                way: "voteCount",
                category: category
            }
        })
        .then(response => {
            SetHighlightInfo(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },[query])
    const [modal2Visible,SetModal2Visible] = useState(false);
        return (
        <>
            <AppLayout/>
            <div className="Home">
                <div className="container" style={{marginBottom: "20px"}}>
                    <Selector modal2Visible={modal2Visible} SetModal2Visible={SetModal2Visible}/>
                </div>
                <div className="container">
                    {
                        highlightInfo.map((v,i) => {
                            return (
                                <Highlight key={i}  videoInfo={v} freeid={v.freeid}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default HighlightPage;