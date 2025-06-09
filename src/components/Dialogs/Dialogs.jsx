import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';


const Dialogs = (props) => {

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-MESSAGE-TEXT', newText: text});
    }

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messageElements = props.state.messagesData.map(m => <Message key={m.id} message={m.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
            <div className={style.inputBlock}>
                <textarea id={'messageInput'} onChange={onMessageChange} ref={newMessageElement} value={props.state.newDialogMessage} placeholder='Enter your message' cols="30" rows="3"></textarea>
                <div><button onClick={addMessage} className={style.button}>Add message</button></div>
            </div>
        </div>
    );
}

export default Dialogs;