import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'

class App extends Component {

  render() { 
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/" component={Admin}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
