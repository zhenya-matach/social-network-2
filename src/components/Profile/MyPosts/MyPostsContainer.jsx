import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    }

    return (
        <MyPosts addPost={addPost}
                 onPostChange={onPostChange}
                 postsData={state.postsData}
                 newPostText={state.newPostText}  />
    )
}

export default MyPostsContainer;