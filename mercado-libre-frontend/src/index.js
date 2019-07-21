import React from 'react';
import {render} from 'react-dom';
import './index.scss';
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes';

render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>, document.getElementById('root')
);


