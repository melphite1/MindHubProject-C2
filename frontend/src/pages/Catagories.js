import React, { useEffect, useState } from "react";
import Header from "../components/Header";
/* import Footer from "../components/Footer"; */
import Category from "../components/Category";
/* import "../components/styles/Cities.css"; */
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";

const Categories = (props) => {

  const [categories, setCategories] = useState([])
  const [filteredCategories, setFilteredCategories] = useState([])

  useEffect(() => {
    setCategories({
      ...categories,
      categories: props.categories
    })
    setFilteredCategories({
      ...filteredCategories,
      filteredCategories: props.categories
    })
  }, [props.categories])
  

  capturarValue = (e) => {
    const valorAlmacenado = e.target.value.trim().toLowerCase();
    this.setState({
      filteredCategories: state.categories.filter(
        (category) => category.category.toLowerCase().indexOf(valorAlmacenado) === 0
      )
    });
  };

  const categoryNotFound = require("../images/404notFound.jpg");
    const filteredSameZero = () => {
      if (state.filteredCategories.length === 0) {
        return (
          <div
            id="categoryNotFound"
            style={{
              backgroundImage: `url(${categoryNotFound})`,
            }}
          >
            <p id='notFoundText'
              style={{
                fontSize: "3vh",
                fontWeight: "bold",
                color: "whitesmoke",
                backgroundColor: "#32a08859",
                textShadow: "2px 2px 2px black",
                padding: "1vh 0vw",
                textAlign:'center',
              }}
            >
              Categoy not found.. Try Again!
            </p>
          </div>
        )};
    };
    
    /* {this.state.cities === null 
      ? (<div className='preloader'></div>)
      : null
    }
    */
    const categoryNotFound = require("../images/404notFound.jpg");
    const filteredSameZero = () => {
      if (state.filteredCategories.length === 0) {
        return (
          <div
            id="categoryNotFound"
            style={{
              backgroundImage: `url(${categoryNotFound})`,
            }}
          >
            <p id='notFoundText'
              style={{
                fontSize: "3vh",
                fontWeight: "bold",
                color: "whitesmoke",
                backgroundColor: "#32a08859",
                textShadow: "2px 2px 2px black",
                padding: "1vh 0vw",
                textAlign:'center',
              }}
            >
              Categoy not found.. Try Again!
            </p>
          </div>
        )};
    };

    return (
      <>
        <Header/>
        <div id="mainCategories">
          <input type="text" placeholder="What category are you interested in?" name="category" id="category" onChange={capturarValue()}/>
          <ul className="Container">
            {filteredSameZero()}
            {state.filteredCategories.map((category) => {
              return<>              
                <NavLink to={`/Category/${category._id}`}>
                  <Category Category={category} />
                </NavLink>
              </>
            })}
          </ul>
        </div>
        {/* <Footer /> */}
      </>
    );
  
}

const mapStateToProps = state => {
  return{
    categories: state.gamesReducer.categories
  }
}

export default connect(mapStateToProps)(Categories);
