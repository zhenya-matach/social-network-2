import style from './../Navbar.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const FriendsBlock = (props) => {

    let friendsElements = props.state.friendsData.map(f => <FriendsItem id={f.id} name={f.name} src={f.src}/>);

    return (
        <div className={style.friendsBlock}>
            {friendsElements}
        </div>
    );
}

export default FriendsBlock;