import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string,
    id: number
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogPropsType) => {

    const dialogPath = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={dialogPath}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Alexander' id={1}/>
                <DialogItem name='Kirill' id={2}/>
                <DialogItem name='Anna' id={3}/>
                <DialogItem name='Roma' id={4}/>
                <DialogItem name='Alina' id={5}/>
                <DialogItem name='Nadya' id={6}/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How is your it-kamasutra'/>
                <Message message='yo'/>
            </div>
        </div>
    );
};

export default Dialogs;