import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://img.freepik.com/free-vector/low-poly-style-abstract-backdrop-modern-presentation_1017-53594.jpg?semt=ais_hybrid&w=740"
                    alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;