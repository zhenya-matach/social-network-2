import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let text = e.currentTarget.value
        props.onMessageChange(text);
    }

    let dialogsElements = props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messageElements = props.messagesData.map(m => <Message key={m.id} message={m.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
            <div className={style.inputBlock}>
                <div>
                    <textarea id={'messageInput'} onChange={onMessageChange} value={props.newDialogMessage}
                              placeholder="Enter your message" cols="30"
                              rows="3">
                    </textarea>
                </div>
                <div>
                    <button onClick={addMessage} className={style.button}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;