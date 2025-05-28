import style from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        console.log(text);
    }

    let postsElement = props.state.postsData.map( p => <Post message={p.message} likeCount={p.likesCount} src={p.srcAvatar} /> )
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} placeholder="Enter your message"></textarea>
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