import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import News from './pages/News';
import Register from './components/Register';
import LogIn from './components/LogIn';
import Categories from './pages/Categories';
import { connect } from 'react-redux';
import usersActions from './redux/actions/usersActions'
import Games from './pages/Games';
import Profile from './pages/Profile'
import OneNews from './components/OneNews'
import "./styles/styles.css"
import "./styles/profile.css"
import "./styles/footer.css"
import "./styles/categories.css"
import "./styles/category.css"



class App extends React.Component {
  render() {

    if (localStorage.getItem('token')) {

      this.props.forcedLogIn(localStorage.getItem('token'))
    }

    if (this.props.newToken || localStorage.getItem('token')) {
      var myRoutes = (<Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/oneNews/:id" component={OneNews} />
        <Route path="/categories" component={Categories} />
        <Route path="/games/:id" component={Games} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch>)
    } else {
      var myRoutes = (< Switch >
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/oneNews/:id" component={OneNews} />
        <Route path="/categories" component={Categories} />
        <Route path="/games/:id" component={Games} />
        <Route path="/signup" component={Register} />
        <Route path="/login" component={LogIn} />
        <Redirect to="/login" />
      </Switch >
      )
    }
    return (
      <BrowserRouter>
        <Switch>
          {myRoutes}
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
