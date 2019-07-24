

import React, { Component } from 'react'


export default class DetailDescription extends Component {

    moneyFormat(number){
        return new Intl.NumberFormat("de-DE").format(number);
    }
    
    render() {
        const {price,condition,title} = this.props;

        return (
            <div className="detail-props">
                <span>{condition == 'new' ? 'Nuevo' : 'Usado'}</span>
                <h2>{title}</h2>
                <strong>$ {this.moneyFormat(price.amount)} </strong>
                <button>Comprar</button>
            </div>
        )
    }
}











