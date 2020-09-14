import React from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/"> <h2>SCAPE</h2></NavLink>


        <div className="navbar-nav d-flex">
          <NavLink to="/news" className=" text-dark">News</NavLink>
          <NavLink to="/games" className=" text-dark">Games</NavLink>
        </div>

        {props.token ? <h2>hola,{props.name}</h2> : <h2>Hola, extrano</h2>}
        <div class="dropdown show " >
          <a class="btn btn-secondary dropdown-toggle-left " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.urlpic}</a>

          <div class="dropdown " aria-labelledby="dropdownMenuLink">
            <button className="btn dropdown-toggle d-none d-sm-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div style={{ backgroundImage: `url(${props.token ? props.urlpic : user})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="d-inline-block pt-5 col-12 h-50">  </div>
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              {props.token ? <NavLink to="/" className="dropdown-item">Your Account</NavLink> : <NavLink to="/login" className="dropdown-item">Sign Up</NavLink>}
              {props.token ? <NavLink to="" onClick={logout} className="dropdown-item">Log Out</NavLink> : <NavLink to="/login" className="dropdown-item">Log in</NavLink>}
            </div>


          </div>
        </div>

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
