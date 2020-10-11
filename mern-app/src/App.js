import React, { Component } from "react";
import { Route, Switch } from "react-router";
import List from "./routes/list.route";
import Edit from "./routes/edit.route";
import Create from "./routes/create.route";
import Navigation from "./components/nav.components";

export default class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
        </Switch>
      </>
    );
  }
}
