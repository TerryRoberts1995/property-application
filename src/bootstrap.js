import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/app";
import reducers from "./reducers";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/Signup";

const createStoreWithMiddleware = applyMiddleware()(createStore);

// import 'bootstrap/dist/css/bootstrap.css';
import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Header>
          <Switch>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
          </Switch>

        </Header>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
