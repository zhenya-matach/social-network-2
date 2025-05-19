import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={style.posts}>
                <Post message='Hi, how are you?' likeCount ='15'/>
                <Post message='It"s my first post' likeCount ='20'/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;