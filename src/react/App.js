import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Register from "./Register";
import Messages from "./Messages";
import NotFound from "./NotFound";

class App extends React.Component {

  render() {
    
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles/:username" component={Profile} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/messages" component={Messages} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
