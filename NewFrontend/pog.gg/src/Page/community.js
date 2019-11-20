import React from 'react';
import AppLayout from '../Component/AppLayout/AppLayout';
import CharBox from '../Component/Community/CharBox/CharBox';
import PostList from '../Component/Community/PostList/PostList';
const Community = () => {
    return (
        <>
            <AppLayout/>
            <CharBox/>
            <PostList/>
        </>
    );
}

export default Community;