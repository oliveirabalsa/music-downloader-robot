import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home/index';

export default function Routes() {
    return ( <
        BrowserRouter >
        <
        Switch >
        <
        Route path = '/'
        exact component = { Home }
        /> < /
        Switch > <
        /BrowserRouter>
    );
}