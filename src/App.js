import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Store from './pages/Store';
import Footer from './components/footer/Footer';
import HeaderMob from './components/header/HeaderMob';
import HeaderPC from './components/header/HeaderPC';
import Product from './pages/Product';
import Order from './components/orders/Order';

export default class App extends Component{

  render(){

    return (
     <BrowserRouter>
      <HeaderMob  />
    <main id="page-wrap">
    <HeaderPC />
      <div>
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/store'} component={Store}/>
          <Route path={'/products/:id'} component={Product}/>
          <Route path={'/order'} component={Order}/>
        </Switch>
      </div>
      <Footer />
      </main>
      </BrowserRouter>
  
    );
  }
  
  }

 
 

