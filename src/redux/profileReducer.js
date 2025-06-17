const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText.trim().length > 0) {
                let newPost = {
                    id: state.postsData.length + 1,
                    message: state.newPostText.trim(),
                    likesCount: 0,
                    srcAvatar: 'https://static.thenounproject.com/png/2643408-200.png'
                };
                let stateCopy = structuredClone(state);
                stateCopy.postsData.push(newPost);
                stateCopy.newPostText = '';
                return stateCopy;
            }
        }
        case UPDATE_POST_TEXT: {
            let stateCopy = structuredClone(state);
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export default profileReducer;