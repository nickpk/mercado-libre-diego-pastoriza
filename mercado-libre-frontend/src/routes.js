import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import Home from './views/Home/Home';
import ProductsList from './views/ProductsList/ProductList'
import ProductDetail from './views/ProductDetail/ProductDetail'


const AppRoutes = () => 
    <App>
        <Switch>     
            <Route exact path="/items" search="?search=:query"  component={ProductsList}  />
            <Route exact path="/items/:id"  component={ProductDetail}  />
            <Route exact path="/" component={Home}/>  
        </Switch>
    </App>;




export default AppRoutes;
