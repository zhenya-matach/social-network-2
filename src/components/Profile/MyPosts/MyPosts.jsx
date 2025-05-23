import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 15,
            srcAvatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
        },
        {
            id: 2,
            message: 'It"s my first post',
            likesCount: 20,
            srcAvatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
        },
        {
            id: 3,
            message: 'Where have you been, in React?',
            likesCount: 99,
            srcAvatar: 'https://i.pinimg.com/736x/6c/5f/a6/6c5fa66441d2d4f478542b14469a9931.jpg'
        },
    ]
    let postsElement = postsData.map( p => <Post message={p.message} likeCount={p.likesCount} src={p.srcAvatar} /> )
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder="Enter your message"></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;