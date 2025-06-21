import React from 'react';
import style from './Users.module.css';

let Users = (props) => {

    if (props.usersData.length === 0) {
        props.setUsers([
            {id: 1, photoUrl:'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Photos.png', followed: false, fullName: 'Dimych', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl:'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Photos.png', followed: true, fullName: 'Andrey', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl:'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Photos.png', followed: false, fullName: 'Svetlana', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}}
        ]);
    }
    return <div className={style.usersBlock}>
        {
            props.usersData.map(u => <div key={u.id}>
                <span>
                <div>
                    <img className={style.photo} src={u.photoUrl} alt='picture'/>
                </div>
                    <div>
                        {u.followed
                            ? <button onClick={ ()=>{props.unfollow(u.id)} }>Unfollow</button>
                            : <button onClick={ ()=>{props.follow(u.id)} }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
            </span>
            </div>)
        }
    </div>
};

export default Users;