import style from './Navbar.module.css';
import NavigationBlock from './NavigationBlock/NavigationBlock';
import FriendsBlock from './FriendsBlock/FriendsBlock';

const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <NavigationBlock/>
            <FriendsBlock {...props}/>
        </nav>
    );
}

export default Navbar;