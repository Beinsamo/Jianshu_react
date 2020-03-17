import React from 'react';
import Header from "./common/header";
import store from './store/store.js';
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from "react-redux";
import Home from './pages/home'
import Login from './pages/login'
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={store}>

      <BrowserRouter>
         <div>
         <Header />
         <Route path='/' exact component={Home}></Route>
         <Route path='/login' exact component={Login}></Route>
         <Route path='/detail:id' exact component={Detail}></Route>
         </div>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
