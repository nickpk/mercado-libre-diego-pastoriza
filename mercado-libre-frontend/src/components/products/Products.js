import React, { Component } from 'react';
import './Products.scss';
import Product from '../product/Product';
import { PulseLoader } from 'react-spinners';


const queryString = require('query-string');


export default class Products extends Component {
    query;
    errorMsg = "No se encontraron resultados para su busqueda";
    listProducts;
  
    constructor() {
          super();
          this.state = {
            loading:false,
          }
    }
    async componentDidMount() {
      this.onInit();
    }

    async onInit(){
      let props = this.props.search;    
      let searchData = queryString.parse(props);
      this.query = searchData.search;
      var result = await this.filterList(this.query);
      console.log(result);
      this.setState({loading:true});
    }


     filterList(search) {
      let url = `http://localhost:3500/api/query/${search}`;
      this.listProducts = [];
      return new Promise(resolve => {
        fetch(url)
          .then((response) => {
            if (response.status !== 200){
              return;
            }
            return response.json();
          })
          .then((data) => {
            this.data = true;
            if (data) {
              data.items[0].map((product) =>{
                if(this.listProducts.length < 4){
                  this.listProducts.push(product);
                }
              }) 
            }
            resolve(this.listProducts);
          })
      })
    }

    render() {     
      const {loading} = this.state
      if(!loading){
        return <div className='sweet-loading'> <PulseLoader/> </div>
      } 
      if(this.listProducts.length > 0){
        return(  
          <div className="container">
            <div className="products-list">
            {this.listProducts.map( product => {
            return <Product key={product.id} title={product.title} price={product.price} picture={product.picture}/>
            })}
            </div>
          </div>
        )
      }
      if(!this.listProducts.length){
        return (<div className="container">
                    <div className="error-msg">
                        <p>{this.errorMsg}</p>
                    </div>
                </div>
        )
      }

      } 
  }

