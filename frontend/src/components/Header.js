import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/styles.css";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";

const Header = (props) => {


  /* USER LOGOUT */
  /* const logout = () => {
    props.userLogOut();
  }; */

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
        <NavLink to="/"> <h2>SCAPE</h2></NavLink>
        <nav className="d-flex">
          <NavLink to="/news">News</NavLink>
          <NavLink to="/games">Games</NavLink>

          {props.token ? <h2>hola,{props.name}</h2> : <h2>Hola, extrano</h2>}
          <div class="dropdown show " >
            <a class="btn btn-secondary dropdown-toggle-left " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              pic</a>

            <div class="dropdown-menu " aria-labelledby="dropdownMenuLink">
              <div class=" d-flex flex-column">
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/login">Log in</NavLink>

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
