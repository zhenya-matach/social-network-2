import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {
    return (
        <div className={style.dialog}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
    );
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    );
}

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Yauheni'},
        {id: 5, name: 'Julia'},
        {id: 6, name: 'Valera'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are your it-kamasutra?'},
        {id: 3, message: 'Yo, bro!'},
        {id: 4, message: 'Yo, bro!'},
        {id: 5, message: 'Yo, bro!'}
    ]
    let dialogsElements = dialogsData.map( d => <Dialog name={d.name} id={d.id} /> );
    let messageElements = messagesData.map( m => <Message message={m.message} /> );
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;