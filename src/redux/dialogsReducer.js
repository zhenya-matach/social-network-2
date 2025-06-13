const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MASSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newDialogMessage.trim().length > 0) {
                let newMessage = {
                    id: state.messagesData.length + 1,
                    message: state.newDialogMessage.trim()
                };
                state.messagesData.push(newMessage);
                state.newDialogMessage = '';
            }
            return state
        case UPDATE_MASSAGE_TEXT:
            state.newDialogMessage = action.newText;
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MASSAGE_TEXT, newText: text});

export default dialogsReducer;