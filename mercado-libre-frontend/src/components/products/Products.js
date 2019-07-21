import React, { Component } from 'react';
import './Products.scss';
import Product from '../product/Product';
import { Link } from 'react-router-dom';

const queryString = require('query-string');

export default class Products extends Component {


    listItems;
    itemsContainer;
    query;
    resultNotFoundErrorMSG = "No se encontraron resultados para su busqueda";
  
    constructor() {
          super();
          this.state = {
            isLoaded: false
          };
    }
  
    async componentDidMount() {
      this.init();
    }
  
    init() {
      this.setState({ itemsContainer: this.itemsContainer });
      let props = this.props.search;    
      let searchQuery = queryString.parse(props);
      this.query = searchQuery.search;
      console.log('MIS PROPS',this.query);
      this.filterList(this.query);
    }

    filterList(search) {
      var url = `http://localhost:3500/api/query/${search}`;
      fetch(url)
        .then((response) => {
  
          if (response.status !== 200)
            return;
  
          return response.json();
        })
        .then((data) => {
          this.data = true;
          if (data) {
            console.log(data);
          }
  
        })
    }
  
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

