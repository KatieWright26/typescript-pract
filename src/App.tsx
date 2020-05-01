import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Routes from './Routes';

const App: FunctionComponent<{}> = () => (
    <BrowserRouter>
        <Navigation />
        <Routes/>
    </BrowserRouter>);

export default App;
