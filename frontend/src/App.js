import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import News from './pages/News';
import Register from './components/Register';
import LogIn from './components/LogIn';
<<<<<<< HEAD
import Games from './components/Games';
=======
import Games from './pages/Catagories';
>>>>>>> fe32186b3d4427e8e33157a6fc17abe49722bd44
import { connect } from 'react-redux';
import usersActions from './redux/actions/usersActions'


class App extends React.Component {
  render() {
    console.log(this.props.token)
    if (localStorage.getItem('token') && this.props.token == "") {
      this.props.forcedLogIn(localStorage.getItem('token'))
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/login" component={LogIn} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.usersReducer.token
  }
}
const mapDispatchToProps = {
  forcedLogIn: usersActions.forcedLogIn
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
