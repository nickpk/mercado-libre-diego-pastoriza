import React, {Component} from 'react'

import Products from '../../components/products/Products';



class ProductList extends Component{
   
    render(){
        return(
            <Products search={this.props.location.search}/>
        )
    }
}

export default ProductList;