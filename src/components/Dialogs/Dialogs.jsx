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

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
                <Dialog name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </div>
        </div>
    );
}

export default Dialogs;