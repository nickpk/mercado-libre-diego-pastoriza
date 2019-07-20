import React, { Component } from 'react';
import './Products.scss';
import Product from '../product/Product';

export default class Products extends Component {
    render() {
        return (
            <div className="container">
                <div className="products-list">
                        <Product />
                </div>
            </div>
        )
    }
}
