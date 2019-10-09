import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './ pages/Home';
import { Store } from './ pages/Store';
import { Header } from './components/header/Header';


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <div>
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/store'} component={Store}/>    
      </Switch>
    </div>
    </BrowserRouter>
  );
}
