import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Store from './pages/Store';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { push as Menu } from 'react-burger-menu'


export default function App() {
  return (

    <BrowserRouter>


    <Menu
        pageWrapId={ "page-wrap" } 
        outerContainerId={ "outer-container" } 
        right
        noOverlay>
        </Menu>
       <main id="page-wrap">
       <Header />
    <div>
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/store'} component={Store}/>    
      </Switch>
    </div>
    <Footer />
    </main>

    </BrowserRouter>
 
  );
}
