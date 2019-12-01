import React from "react";
import { Route, Switch } from "react-router";
import { FavoritesPage, HomePage, PetDetail } from "../pages";

function Main(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/favoriler" component={FavoritesPage} />
        <Route path="/petdetail/:id" component={PetDetail} />
      </Switch>
    </div>
  );
}

export default Main;
