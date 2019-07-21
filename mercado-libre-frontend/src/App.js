import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './App.scss';
// Global Components
import Header from './global-components/header/Header';
import Content from './global-components/content/Content';


export default class App extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired
    }

    render() {
        const {children} = this.props;
        return (
            <div>
                <main>
                    <Header />
                    <Content body={children}/>
                </main>
            </div>
        );
    }
}
