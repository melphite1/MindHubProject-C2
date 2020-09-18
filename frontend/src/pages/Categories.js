import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Category from "../components/Category";
import auxActions from '../redux/actions/auxActions'
import gamesActions from '../redux/actions/gamesActions'
import '../styles/category.css'

import Footer from '../components/Footer'

const Categories = (props) => {
  const [categories, setCategories] = useState([]);
  const [favConsole, setFavConsole] = useState("");

  useEffect(() => {
    setCategories([...orderedCategories]);
  }, [props.categories]);

  useEffect(() => {
    props.getCategories();
  }, []);

  let orderedCategories = props.categories.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });


  const categoryNotFound = require("../images/404notFound.png");
  const filteredSameZero = () => {
    if (categories.length === 0) {
      return (
        <div
          id="categoryNotFound"
          style={{
            backgroundImage: `url(${categoryNotFound})`,
          }}
        >
          <p
            id="notFoundText"
            style={{
              fontSize: "3vh",
              fontWeight: "bold",
              color: "whitesmoke",
              backgroundColor: "#32a08859",
              textShadow: "2px 2px 2px black",
              padding: "1vh 0vw",
              textAlign: "center",
            }}
          >
            Categoy not found.. Try Again!
          </p>
        </div>
      );
    }
  };



  return (
    <>
      <Header />
      <h1 className="title text-light">Games</h1>
      <h3 className="subtitle text-light font-weight-light">Find the best and most entertaining games</h3>
      <hr style={{ border: '1px solid #4B75B1', opacity: '12%', margin: '2vh 12vh' }} />

      <div id="mainCategories">
        <ul className="categoriesContainer" style={{ listStyle: "none" }}>
          {filteredSameZero()}
          {categories.map((category) => {
            return (
              <>
                <NavLink to={`/games/${category._id}`} className="col- 5">
                  <Category category={category} />
                </NavLink>
              </>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    username: state.usersReducer.username,
    firstTime: state.usersReducer.firstTime,
    token: state.usersReducer.token,
    categories: state.gamesReducer.categories,
  };
};
const mapDispatchToProps = {
  sendConsole: auxActions.sendConsole,
  getCategories: gamesActions.getCategories,
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
