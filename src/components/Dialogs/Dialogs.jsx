import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}><NavLink to='/dialogs/1'>Dimych</NavLink></div>
                <div className={style.dialog}><NavLink to='/dialogs/1'>Andrey</NavLink></div>
                <div className={style.dialog}><NavLink to='/dialogs/1'>Svetlana</NavLink></div>
                <div className={style.dialog}><NavLink to='/dialogs/1'>Yauheni</NavLink></div>
                <div className={style.dialog}><NavLink to='/dialogs/1'>Julia</NavLink></div>
                <div className={style.dialog}><NavLink to='/dialogs/1'>Valera</NavLink></div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How are your it-kamasutra?</div>
                <div className={style.message}>Yo, bro!</div>
            </div>
        </div>
    )
}

export default Dialogs;