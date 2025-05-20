import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img
                alt='picture'
                src={props.src}/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;