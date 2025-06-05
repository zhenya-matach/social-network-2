import reportWebVitals from './reportWebVitals';
import state, {addMessage, addPost, subscribe, updateMessageText, updatePostText} from './redux/state';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (props) => {
    root.render(
        <React.StrictMode>
            <App state={props.state}
                 addPost={addPost}
                 updatePostText={updatePostText}
                 addMessage={addMessage}
                 updateMessageText={updateMessageText}/>
        </React.StrictMode>
    );
}

renderEntireTree({state});

subscribe(renderEntireTree);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
