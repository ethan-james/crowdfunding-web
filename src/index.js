import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, History} from "react-router";
import {createHistory, useBasename} from "history";
import {ApolloClient, ApolloProvider} from "react-apollo";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
