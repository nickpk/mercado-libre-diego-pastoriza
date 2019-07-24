import React, { Component } from 'react'

export default class DetailDescription extends Component {
    render() {
        const {description} = this.props;

        return (
            <div>
                <div className="detail-description">
                    <h5>Descripción del producto</h5>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
