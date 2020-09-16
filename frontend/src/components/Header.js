import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/styles.css";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import user from "../images/person.png"
import logo from "../images/logo.png"
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

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-xl navbar-light">
          <NavLink to="/" className="navbar-brand">SCAPE</NavLink>
          <button type="button" className="navbar-toggler col-2" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
            <div className="navbar-nav">
              <Link to="/news" className="nav-item nav-link active text-light text-center">News</Link>
              <Link to="/categories" className="nav-item nav-link active text-light text-center">Games</Link>

            </div>

            <div className="navbar-nav ml-auto">
              <div className="nav-item dropdown ">
                <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action text-light"><img src={props.token ? props.urlpic : user} className="avatar" alt="Avatar" /> {props.token ? props.name : 'guest'} <b className="caret"></b></a>
                <div className="dropdown-menu">
                  {props.token ? <Link to="/profile" className="dropdown-item">Profile</Link> : <Link to="/signup" className="dropdown-item">Sign Up</Link>}

                  <div className="dropdown-divider"></div>
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
