import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}><a href='/Profile'>Profile</a></div>
            <div className={`${style.item} ${style.active}`}><a href='/Messages'>Messages</a></div>
            <div className={style.item}><a href='/News'>News</a></div>
            <div className={style.item}><a href='/Music'>Music</a></div>
            <div className={style.item}><a href='/Settings'>Settings</a></div>
        </nav>
    );
}

export default Navbar;