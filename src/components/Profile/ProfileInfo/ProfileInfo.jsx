import style from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://img.freepik.com/free-vector/low-poly-style-abstract-backdrop-modern-presentation_1017-53594.jpg?semt=ais_hybrid&w=740"
                    alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt="avatar"/>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;