import React, { Component } from 'react';
import '../../styles/variables.scss';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <header>
                    <div className="header-container">
                        <div className="container flex">
                            <h1 className="logo">
                                <a href="/" title="Mercado Libre">
                                    Mercado Libre
                                </a>
                            </h1>
                            <div className="search-tool">
                                <form className="search-nav flex">
                                    <input type="text" value="" placeholder="Nunca dejes de buscar"/>
                                    <button type="submit"><i class="fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
            </header>
        )
    }
}
