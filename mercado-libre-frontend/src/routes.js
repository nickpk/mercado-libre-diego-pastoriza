import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import Home from './views/home/Home';
import ProductsList from './views/products-list/ProductList'


const AppRoutes = () => 
    <App>
        <Switch>     
            <Route path="/items" search="?search=:query" component={ProductsList}  />
            <Route exac path="/" component={Home}/>  
        </Switch>
    </App>;


export default AppRoutes;
