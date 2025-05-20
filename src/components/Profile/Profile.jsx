import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div><img
                src="https://img.freepik.com/free-vector/low-poly-style-abstract-backdrop-modern-presentation_1017-53594.jpg?semt=ais_hybrid&w=740"
                alt=""/></div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;