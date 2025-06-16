const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MASSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
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