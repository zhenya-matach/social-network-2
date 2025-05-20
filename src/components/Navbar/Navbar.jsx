import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/Profile">Profile</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/Dialogs">Dialogs</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/News">News</NavLink></div>
            <div className={style.item}>
                <NavLink to="/Music">Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Settings">Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;