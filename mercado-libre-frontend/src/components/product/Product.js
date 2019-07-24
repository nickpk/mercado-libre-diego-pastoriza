import React, { Component } from 'react';
import './Product.scss';

export default class Product extends Component {

    moneyFormat(number){
        return new Intl.NumberFormat("de-DE").format(number);
    }

    render() {
        const {title,price,thumbnail,address,idproduct} = this.props;
        return (
            <div className="product">
                <div className="left">
                    <div>
                        <img src={thumbnail} alt={title}/>
                    </div>
                    <div className="description">
                        <a href={`/items/${idproduct}`} title={title}>
                            <b>${this.moneyFormat(price.amount)}</b>
                            <p>{title}</p>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <span>{address}</span>
                </div>
            </div>
        )
    }
}
