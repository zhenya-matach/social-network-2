import style from './Navbar.module.css';
import NavigationBlock from './NavigationBlock/NavigationBlock';
import FriendsBlockContainer from './FriendsBlock/FriendsBlockContainer';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <NavigationBlock/>
            <FriendsBlockContainer/>
        </nav>
    );
}

export default Navbar;