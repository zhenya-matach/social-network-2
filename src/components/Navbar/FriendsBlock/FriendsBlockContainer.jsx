import {connect} from 'react-redux';
import FriendsBlock from './FriendsBlock';

let mapStateToProps = (state) => {
    return {
        friendsData: state.sideBar.friendsData
    }
};

const FriendsBlockContainer = connect(mapStateToProps, null)(FriendsBlock);

export default FriendsBlockContainer;