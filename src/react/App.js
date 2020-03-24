import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Register from "./Register";
import Messages from "./Messages";
import NotFound from "./NotFound";

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login'

class App extends React.Component {

  render() {
    
    const responseFacebook = (response) => {
      console.log(response);
    }
    
    const responseGoogle = (response) => {
      console.log(response);
    }
    
    return (
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles/:username" component={Profile} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/messages" component={Messages} />
        <Route path="*" component={NotFound} />
      </Switch>
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>
        <FacebookLogin 
          appId='2946986485360576'
          fields='name,email,picture'
          callback={responseFacebook}
        />  
        <br />
        <br />
        <GoogleLogin 
          clientId=''
          buttonText='LOGIN WITH GOOGLE'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

      </div>
      </div>
    );
  }
}

export default App;
