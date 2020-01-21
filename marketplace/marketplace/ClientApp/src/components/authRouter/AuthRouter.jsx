import React from "react";
import Login from "../../views/Login";
import { Router, Switch, Route, IndexRoute } from "react-router-dom";
import axios from "axios";

async function CheckAuthentication(path) {
  console.log("metodo de auth");
  await axios
    .get(`http://localhost:59583/api/auth${path}`)
    .then(res => {
        console.log("funciono");
      return true;
    })
    .catch(err => {
        console.log("falle");
        return false;
    });
}

export default function AuthRoute(props) {
  //   const redirectRoute = false;
  //   redirectRoute = CheckAuthentication();

  return CheckAuthentication(props.path) ? (
    <Route exact path={props.path} component={props.component} />
  ) : (
    <Route exact path={props.path} component={Login} />
  );
}
