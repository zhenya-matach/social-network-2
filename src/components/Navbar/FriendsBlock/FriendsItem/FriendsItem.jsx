import style from './../../Navbar.module.css';
import {NavLink} from 'react-router-dom';

const FriendsItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`}>
            <div className={style.friendsItem}>
                <img
                    src={props.src}
                    alt="picture"/>
                <span>{props.name}</span>
            </div>
        </NavLink>
    );
}

export default FriendsItem;