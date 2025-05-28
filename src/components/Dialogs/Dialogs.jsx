import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';


const Dialogs = (props) => {

    let newMessageElement = React.createRef();
    let newMassage = () => {
        let text =newMessageElement.current.value;
        console.log(text);
    }

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.state.messagesData.map(m => <Message message={m.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
            <div className={style.inputBlock}>
                <textarea ref={newMessageElement} placeholder='Enter your message' cols="30" rows="3"></textarea>
                <div><button onClick={newMassage} className={style.button}>Add message</button></div>
            </div>
        </div>
    );
}

export default Dialogs;