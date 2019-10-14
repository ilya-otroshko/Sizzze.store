import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Store from './pages/Store';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <div>
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/store'} component={Store}/>
        <Route path={'/insta'} component={() => { 
          window.location.href = 'https://www.instagram.com/sizzze.store'; 
          return null;
          }}/>    
      </Switch>
    </div>
    <Footer />
    </BrowserRouter>
  );
}
