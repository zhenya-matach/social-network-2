import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <Dialogs addMessage={addMessage}
                 onMessageChange={onMessageChange}
                 dialogsData={state.dialogsData}
                 messagesData={state.messagesData}
                 newDialogMessage={state.newDialogMessage}/>
    );
}

export default DialogsContainer;