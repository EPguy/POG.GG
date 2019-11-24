import React, {useState, useEffect} from 'react';
import 'suneditor/dist/css/suneditor.min.css'
import SUNEDITOR from 'suneditor'
import plugins from 'suneditor/src/plugins'
import './EditorPage.css';
import {Select, Button, Input } from 'antd';
import axios from 'axios';
const { Option } = Select;

const EditorPage = () => {
    const [editorInput, setEditorInput] = useState('');
    const [editorTitle, setEditorTtitle] = useState('');
    const [editorTeam, setEditorTeam] = useState('skt');
    const onClick = () => {
        axios.post(`http://192.168.137.1:8080/teamboardWriteRequest`,{
            content: editorInput,
            title: editorTitle,
            teamName: editorTeam
        },{    
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then(response => {
            console.log(response)
        })
    }
    const onChange = (e) => {
        setEditorTtitle(e.target.value)
    }
    useEffect(() => {
        const editor = SUNEDITOR.create('sample', {
            plugins: plugins,
            display: 'block',
            width: '1140px',
            height: '500px',
            popupDisplay: 'full',
            charCounter: true,
            buttonList: [
                ['undo', 'redo'],
                ['font', 'fontSize', 'formatBlock'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                ['removeFormat'],
                ['fontColor', 'hiliteColor'],
                ['outdent', 'indent'],
                ['align', 'horizontalRule', 'list', 'table'],
                ['link', 'image', 'video'],
                ['fullScreen', 'showBlocks', 'codeView'],
            ]
        });
        editor.onChange = (contents) => { 
            setEditorInput(contents) 
        }
    },[])
    return (
        <>
            <div class="editor_tools">
                <Select className="editor_select" defaultValue="skt" onChange={setEditorTeam}>
                    <Option value="af"><img class="option_img" src="https://qwer.gg/images/logos/AF.png"/></Option>
                    <Option value="dwg"><img class="option_img" src="https://qwer.gg/images/logos/DWG.png"/></Option>
                    <Option value="gen"><img class="option_img" src="https://qwer.gg/images/logos/GEN.png"/></Option>
                    <Option value="grf"><img class="option_img" src="https://qwer.gg/images/logos/GRF.png"/></Option>
                    <Option value="hle"><img class="option_img" src="https://qwer.gg/images/logos/HLE.png"/></Option>
                    <Option value="skt"><img class="option_img" src="https://qwer.gg/images/logos/SKT.png"/></Option>
                    <Option value="apk"><img class="option_img" src="https://qwer.gg/images/logos/APK.png"/></Option>
                    <Option value="kt"><img class="option_img" src="https://qwer.gg/images/logos/KT.png"/></Option>
                    <Option value="kz"><img class="option_img" src="https://qwer.gg/images/logos/KZ.png"/></Option>
                    <Option value="sb"><img class="option_img" src="https://qwer.gg/images/logos/SB.png"/></Option>
                </Select>
                <Button onClick={() => onClick()} type="primary" size="large">
                    글쓰기
                </Button>
            </div>
            <div className="editor_title">
                <Input onChange={(e) => onChange(e)} placeholder="제목을 입력하세요." />
            </div>
            <div className="editor_wrapper">
                <textarea  id="sample"></textarea>
            </div>
        </>
    )
}

export default EditorPage;