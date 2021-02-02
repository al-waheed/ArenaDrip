import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import Payment from './Payment';

export class Components extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
        </Switch>
      </div>
    );
  }
}

export default Components;
