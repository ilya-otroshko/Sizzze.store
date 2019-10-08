import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './ pages/Home';
import { Store } from './ pages/Store';
import { Header } from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Navbar />
    <div className="container-fluid">
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/store'} component={Store}/>    
      </Switch>
    </div>
    </BrowserRouter>
  );
}
