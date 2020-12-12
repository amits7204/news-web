import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../component/home";
import Login from "../component/login";
import Register from "../component/register";
import UsersCreateandEdit from "../component/UsersCreateandEdit";

export default class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact render={() => <Home />} />
          <Route path="/register" exact component={Register} />
          <Route path="/modifie/:id" exact component={UsersCreateandEdit} />
        </Switch>
      </>
    );
  }
}
