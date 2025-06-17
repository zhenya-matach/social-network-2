import style from './../Navbar.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const FriendsBlock = (props) => {
    let friendsElements = props.friendsData.map(f => <FriendsItem key={f.id} id={f.id} name={f.name} src={f.src}/>);

    return (
        <div className={style.friendsBlock}>
            {friendsElements}
        </div>
    );
}

export default FriendsBlock;