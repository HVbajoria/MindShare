import Chat from "./chat/chat";
import Quotes from "./quotes/quotes";
import Home from "./home/home";
import Welcome from "./welcome/welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import React from "react";
import io from "socket.io-client";
import Music from "./musicchat/musicchat";

const socket = io.connect('/');

function AppmainMusic() {
  return (
    <React.Fragment>
      <div className="right">
        <Music
        />
      </div>
      <div className="left">
        <Quotes />
      </div>
    </React.Fragment>
  );
}

function Appmain(props) {
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={socket}
        />
      </div>
      <div className="left">
        <Quotes />
      </div>
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/loggedin">
            <Home socket={socket} />
          </Route>
          <Route path="/chat/:roomname/:username" component={Appmain} />
          <Route path="/music/:roomname/:username" component={AppmainMusic} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;