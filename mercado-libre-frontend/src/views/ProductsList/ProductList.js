import React, {Component} from 'react'

import Products from '../../components/Products/Products';



class ProductList extends Component{
   
    render(){
        return(
            <Products search={this.props.location.search}/>
        )
    }
}

export default ProductList;