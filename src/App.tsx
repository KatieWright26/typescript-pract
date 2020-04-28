import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const App: FunctionComponent<{}> = () => (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>);

export default App;
