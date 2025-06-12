const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message: 'Hi, how are you?',
                    likesCount: 15,
                    srcAvatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
                },
                {
                    id: 2,
                    message: 'It"s my first post',
                    likesCount: 20,
                    srcAvatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
                },
                {
                    id: 3,
                    message: 'Where have you been, in React?',
                    likesCount: 99,
                    srcAvatar: 'https://i.pinimg.com/736x/6c/5f/a6/6c5fa66441d2d4f478542b14469a9931.jpg'
                },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Yauheni'},
                {id: 5, name: 'Julia'},
                {id: 6, name: 'Valera'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are your it-kamasutra?'},
                {id: 3, message: 'Yo, bro!'},
                {id: 4, message: 'Yo, bro!'},
                {id: 5, message: 'Yo, bro!'}
            ],
            newDialogMessage: ''
        },
        sideBar: {
            friendsData: [
                {
                    id: 1,
                    name: 'Dimych',
                    src: 'https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png'
                },
                {
                    id: 2,
                    name: 'Andrey',
                    src: 'https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png'
                },
                {
                    id: 3,
                    name: 'Svetlana',
                    src: 'https://img.freepik.com/premium-vector/vector-image-female-photographer-with-simple-minimalist-flat-design_1213699-5312.jpg?semt=ais_hybrid'
                },
                {
                    id: 4,
                    name: 'Yauheni',
                    src: 'https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-man-avatar-isolated-png-image_9935806.png'
                },
                {
                    id: 5,
                    name: 'Julia',
                    src: 'https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg'
                },
                {
                    id: 6,
                    name: 'Valera',
                    src: 'https://static.vecteezy.com/system/resources/previews/004/607/806/non_2x/man-face-emotive-icon-smiling-bearded-male-character-in-yellow-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg'
                },
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.postsData.length + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                srcAvatar: 'https://static.thenounproject.com/png/2643408-200.png'
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: this._state.dialogsPage.messagesData.length + 1,
                message: this._state.dialogsPage.newDialogMessage
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newDialogMessage = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this._state.dialogsPage.newDialogMessage = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text})

window.store = store;

export default store;