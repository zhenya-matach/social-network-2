import style from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/store';

const MyPosts = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = (e) => {
        let text = e.currentTarget.value;
        props.dispatch(updatePostTextActionCreator(text));
    }

    let postsElement = props.state.postsData.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount}
                                                            src={p.srcAvatar}/>)

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea id={'postInput'} onChange={onPostChange} value={props.state.newPostText} placeholder="Enter your message"></textarea>
                </div>
                <div>
                    <button className={style.button} onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;