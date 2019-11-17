import React , {useState, useEffect} from 'react';
import Highlight from '../components/highlight/Highlight';
import { useRouter } from 'next/router';
import axios from 'axios';
import Selector from '../components/highlight/Selector';
import './highlights.scss';
const HighlightPage = () => {
    const [highlightInfo, SetHighlightInfo] = useState([{
        link: "https://www.youtube.com/watch?v=mwlJGfgOc78&list=PLKmnCtJnxa9NIoeHbfucgl_97WUiaNEer&index=24",
        freeid: 1
    }]);
    const router = useRouter();
    const {category} = router.query;
    useEffect(() => {
        axios.get("http://192.168.137.1:8080/tipboard", {
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
    })
    const [modal2Visible,SetModal2Visible] = useState(false);
        return (
        <>
            <div className="Home">
                <div className="container" style={{marginBottom: "20px"}}>
                    <Selector modal2Visible={modal2Visible} SetModal2Visible={SetModal2Visible}/>
                </div>
                <div className="container">
                    {
                        highlightInfo.map((v,i) => {
                            return (
                                <Highlight freeid={v.freeid}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default HighlightPage;