import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import News from './pages/News';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Games from './pages/Games';


class App extends React.Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App;
