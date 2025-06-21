import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {followAC, setUsersAC, unfollowAC} from '../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;