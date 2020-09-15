import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/styles.css";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import user from "../images/person.png"

const Header = (props) => {



  const logout = () => {
    props.userLogOut();
  };

  /* ->AMOLDAR RENDERIZADO CONDICIONAL (TOKEN-USER LOGUED/VISITANTE)<- */
  /* {props.token 
        ? (<div id="ImgContainer" style={{backgroundImage: `url(${props.urlpic})`}}></div>) 
        : (<i className="large material-icons left">account_circle</i>)
      }
    </div>
    <ul id="dropdown1" className="dropdown-content">
    {props.token 
      ? (
          <li>
          <NavLink to='/'onClick={logout} style={{color:'whitesmoke'}}>Log Out</NavLink>
          </li>
        ) 
      : (
        <>
        <li>
          <NavLink to='/LogIn'>Log In</NavLink>
        </li>
        <li>
          <NavLink to='/Register'>Register</NavLink>
        </li>
        </>
        )
    } */
  console.log(props.name)
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-xl navbar-light">
          <NavLink to="/" class="navbar-brand">SCAPE</NavLink>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
            <div class="navbar-nav">
              <Link to="/news" class="nav-item nav-link active text-light">News</Link>
              <Link to="/categories" class="nav-item nav-link active text-light">Games</Link>

            </div>

            <div class="navbar-nav ml-auto">
              <div class="nav-item dropdown">
                <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle user-action text-light"><img src={props.token ? props.urlpic : user} class="avatar" alt="Avatar" /> {props.token ? props.name : 'guess'} <b class="caret"></b></a>
                <div class="dropdown-menu">
                  {props.token ? <Link to="/" className="dropdown-item">Your Account</Link> : <Link to="/signup" className="dropdown-item">Sign Up</Link>}

                  <div class="dropdown-divider"></div>
                  {props.token ? <Link to="" onClick={logout} className="dropdown-item">Log Out</Link> : <Link to="/login" className="dropdown-item">Log in</Link>}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )

};

const mapStateToProps = (state) => {
  return {
    name: state.usersReducer.name,
    urlpic: state.usersReducer.urlpic,
    token: state.usersReducer.token,
  };
};

const mapDispatchToProps = {
  userLogOut: usersActions.userLogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
