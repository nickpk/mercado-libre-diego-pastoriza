import React, { Component } from 'react';
import './Product.scss';

export default class Product extends Component {
    render() {
        const {title,price,picture} = this.props;
        console.log(title);
        return (
            <div className="product">
                <div className="left">
                    <div>
                        <img src={picture}/>
                    </div>
                    <div className="description">
                        <b>${price.amount}</b>
                        <p>{title}</p>
                    </div>
                </div>
                <div className="right">
                    <span>Capital federal</span>
                </div>
            </div>
        )
    }
}
