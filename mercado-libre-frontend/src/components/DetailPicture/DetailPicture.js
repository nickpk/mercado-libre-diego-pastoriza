import React, { Component } from 'react'

export default class DetailDescription extends Component {
    render() {
        const {thumbnail,alt} = this.props;

        return (
            <div className="detail-picture">
                 <img src={thumbnail} alt={alt}></img>
            </div>
        )
    }
}
