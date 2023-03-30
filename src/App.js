import React from 'react';
import './App.css';
import Home from './home/home';
import Login from './login/login';

// import {Navigate} from 'react-dom'

// import Registration from './components/registration/registration';
import {

  BrowserRouter,
  Switch,
  Route,
  // Link,
  // Router
} from "react-router-dom";
import Registration from './registration/registration';
// import AllDish from './components/all/alldish';
import AllFoodItems from './components/all/AllFoodItems';
import SingleFood from './components/single/singleFood';
import AboutUs from './components/pages/header/AboutUs';
import Cart from './cart';


import { Provider } from 'react-redux';
import store from './components/store/store';


function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Switch>
        
      <Route exact path='/'><Registration/></Route>
        <Route exact path='/login'><Login/></Route>
        <Route exact path='/home'><Home /></Route>
        <Route exact path='/AllFoodItems'><AllFoodItems/></Route>
        <Route exact path='/singleFood'><SingleFood/></Route>
        <Route exact path='/AboutUs'><AboutUs/></Route>
        <Route exact path='/Cart'><Cart/></Route>

      </Switch>
      </Provider>

    </BrowserRouter>

  );
}
export default App
