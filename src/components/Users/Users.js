import React from 'react';
import style from './Users.module.css';
import axios from 'axios';
import userPhoto from './../../assets/image/user2.png'

let Users = (props) => {
    if (props.usersData.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });
    }

    return <div className={style.usersBlock}>
        {
            props.usersData.map(u => <div key={u.id}>
                <span>
                <div>
                    <img className={style.photo} src={u.photos.small != null ? u.photos.small : userPhoto}
                         alt="picture"/>
                </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
            </span>
            </div>)
        }
    </div>
};

export default Users;