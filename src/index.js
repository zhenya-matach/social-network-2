import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let postsData = [
    {
        id: 1,
        message: 'Hi, how are you?',
        likesCount: 15,
        srcAvatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
    },
    {
        id: 2,
        message: 'It"s my first post',
        likesCount: 20,
        srcAvatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
    },
    {
        id: 3,
        message: 'Where have you been, in React?',
        likesCount: 99,
        srcAvatar: 'https://i.pinimg.com/736x/6c/5f/a6/6c5fa66441d2d4f478542b14469a9931.jpg'
    },
];

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
];
root.render(
    <React.StrictMode>
        <App postsData={postsData} diaolgsData={dialogsData} messageData={messagesData}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
