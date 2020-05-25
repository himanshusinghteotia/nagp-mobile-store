import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login';
import Product from './components/Product';
import { Router } from "react-router-dom";
import history from "./utils/history";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        {/* <BrowserRouter> */}
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/product/id=:id" component={Product} />
              <Route path="/cart" component={Cart} />
              <Route path="/login" component={Login} />
            </Switch>
            <Footer />
          </div>
        {/* </BrowserRouter> */}
      </Router>

    );
  }
}

export default App;
