import React from 'react';
import Game from './components/Game';
import Start from './Start';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <React.Fragment>
            <Start />
            <Game />
        </React.Fragment>
    )
}

export default App;
