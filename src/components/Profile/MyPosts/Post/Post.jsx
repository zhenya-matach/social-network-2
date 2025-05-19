import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img
                alt='picture'
                src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png"/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;