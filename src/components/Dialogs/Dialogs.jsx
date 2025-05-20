import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>Dimych</div>
                <div className={style.dialog}>Andrey</div>
                <div className={style.dialog}>Svetlana</div>
                <div className={style.dialog}>Yauheni</div>
                <div className={style.dialog + " " + style.active}>Julia</div>
                <div className={style.dialog}>Valera</div>
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