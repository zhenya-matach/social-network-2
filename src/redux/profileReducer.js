const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText.trim().length > 0) {
                let newPost = {
                    id: state.postsData.length + 1,
                    message: state.newPostText.trim(),
                    likesCount: 0,
                    srcAvatar: 'https://static.thenounproject.com/png/2643408-200.png'
                };
                state.postsData.push(newPost);
                state.newPostText = '';
            }
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export default profileReducer;