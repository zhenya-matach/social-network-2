import style from './../Navbar.module.css';
import {NavLink} from 'react-router-dom';

const NavigationBlock = () => {
    return (
        <div className={style.navigationBlock}>
            <div className={style.item}>
                <NavLink to="/Profile">Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Dialogs">Dialogs</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/News">News</NavLink></div>
            <div className={style.item}>
                <NavLink to="/Music">Music</NavLink>
            </div>
            <div><br/></div>
            <div className={style.item}>
                <NavLink to="/Settings">Settings</NavLink>
            </div>
        </div>
    );
}

export default NavigationBlock;