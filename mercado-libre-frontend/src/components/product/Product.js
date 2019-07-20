import React, { Component } from 'react';
import './Product.scss';

export default class Product extends Component {
    render() {
        return (
            <div className="product">
                <div className="left">
                    <div>
                        <img src="http://lorempixel.com/180/180/"/>
                    </div>
                    <div class="description">
                        <b>$ 1.980</b>
                        <p>Apple ipod Touch 5gb 16gb Negro igual A Nuevo Completo Unico!</p>
                    </div>
                </div>
                <div className="right">
                    <span>Capital federal</span>
                </div>
            </div>
        )
    }
}
