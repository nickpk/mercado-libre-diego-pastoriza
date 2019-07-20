import React, { Component } from 'react'
import './App.scss';
// views
import Home from './views/home/Home'
// Global Components
import Header from './global-components/Header/Header';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        )
    }
}
