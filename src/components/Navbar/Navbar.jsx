import './Navbar.module.css';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>Profile</div>
            <div className={`${style.item} ${style.active}`}>Messages</div>
            <div className={style.item}>News</div>
            <div className={style.item}>Music</div>
            <div className={style.item}>Settings</div>
        </nav>
    );
}

export default Navbar;