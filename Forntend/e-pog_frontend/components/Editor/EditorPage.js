import React, {useState, useEffect} from 'react';

class Editor extends React.Component {
    state = { loading: true };

    componentDidMount() {
        this.CKEditor = require("@ckeditor/ckeditor5-react");
        this.ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
        this.setState({ loading: false });
    }

    render() {
        return this.CKEditor ? (
        <this.CKEditor
            editor={this.ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onInit={editor => {
            console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            }}
        />
        ) : (
        <div>Editor loading</div>
        );
    }
}

export default Editor;