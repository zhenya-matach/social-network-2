import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sideBar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile state={props.state.profilePage}
                                                                 dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}
                                                                   dispatch={props.dispatch}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;