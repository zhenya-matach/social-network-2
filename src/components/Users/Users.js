import style from './Users.module.css';
import userPhoto from '../../assets/image/user.png';
import React from 'react';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return(
     <div className={style.usersBlock}>
        <div>
            {pages.map( p=> {
                return <span className={ props.currentPage === p && style.selectedPage} onClick={()=>{props.onPageChange(p)}}>{p}</span>
            })}
        </div>
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
    )
}

export default Users;