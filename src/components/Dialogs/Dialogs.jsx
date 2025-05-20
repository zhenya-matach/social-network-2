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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <Dialog name="Dimych" id="1"/>
                <Dialog name="Andrey" id="2"/>
                <Dialog name="Svetlana" id="3"/>
                <Dialog name="Yauheni" id="4"/>
                <Dialog name="Julia" id="5"/>
                <Dialog name="Valera" id="6"/>
            </div>
            <div className={style.messages}>
                <Message message="Hi"/>
                <Message message="How are your it-kamasutra?"/>
                <Message message="Yo, bro!"/>
                <Message message="Yo, bro!"/>
                <Message message="Yo, bro!"/>
            </div>
        </div>
    );
}

export default Dialogs;