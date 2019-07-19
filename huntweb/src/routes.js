import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";
import Update from "./pages/product/update";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/products/:id" component={Product} />
      <Route path="/products/:id/update" component={Update} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
