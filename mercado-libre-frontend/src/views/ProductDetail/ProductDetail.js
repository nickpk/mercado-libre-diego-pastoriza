import React, { Component } from 'react';
import './ProductDetails.scss';
import { PulseLoader } from 'react-spinners';
import DetailDescription from '../../components/DetailDescription/DetailDescription';
import DetailPicture from '../../components/DetailPicture/DetailPicture';
import DetailProps from '../../components/DetailProps/DetailProps';

export default class ProductDetail extends Component {
    
    details;

    constructor(){
        super();
        this.state={
            loading : true
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        let product = await this.getItem(id);
        this.setState({product:product})
        this.setState({loading:false});
    }

    getItem(id){
        var url =`http://localhost:3500/api/item/${id}`;
        return new Promise(resolve => {
            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
            this.details = data.product;
            resolve(this.details)
            console.log(data);
            })
        })
    }

    render() {
        const {loading,product} = this.state
        if(loading){
          return <div className='sweet-loading'> <PulseLoader/> </div>
        } 
        return (  
            <div className="container">
                <div className="detail-product white-block">
                    <div className="flex">
                        <div>
                            <DetailPicture thumbnail={product.thumbnail} 
                                           alt={product.title} />
                            <DetailDescription description={product.description}/>
                        </div>
                            <DetailProps price={product.price} 
                                         condition={product.condition} 
                                         title={product.title} />
                    </div>
                </div>
            </div>
        )
    }
}
