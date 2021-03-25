import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Product from "./Product";
import Cart from "./Cart";
import Checkout from "./Checkout";

class Components extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

export default Components;
