import style from './Users.module.css';
import userPhoto from '../../assets/image/user.png';
import React from 'react';
import axios from 'axios';


class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });

    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div className={style.usersBlock}>
            <div>
                {pages.map( p=> {
                    return <span className={this.props.currentPage === p && style.selectedPage} onClick={()=>{this.onPageChange(p)}}>{p}</span>
                })}
            </div>

            {
                this.props.usersData.map(u => <div key={u.id}>
                <span>
                <div>
                    <img className={style.photo} src={u.photos.small != null ? u.photos.small : userPhoto}
                         alt="picture"/>
                </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
    }
}

export default Users;