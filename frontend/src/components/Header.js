import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/styles.css";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";

const Header = () => {

    /* USER LOGOUT */
  /* const logout = () => {
    props.userLogOut();
  }; */

  /* ->AMOLDAR RENDERIZADO CONDICIONAL (TOKEN-USER LOGUED/VISITANTE)<- */
  /* {props.token 
        ? (<div id="ImgContainer" style={{backgroundImage: `url(${props.photo})`}}></div>) 
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
    <header>
      <NavLink to="/">
        {" "}
        <h2>ESCAPE</h2>
      </NavLink>
      <nav>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Log in</NavLink>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.usersRedState.name,
    photo: state.usersRedState.photo,
    token: state.usersRedState.token,
  };
};

const mapDispatchToProps = {
  userLogOut: usersActions.userLogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
