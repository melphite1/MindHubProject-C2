import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import axios from 'axios'

const Categories = (props) => {

  const [categories, setCategories] = useState([])
  const [filteredCategories, setFilteredCategories] = useState([])

  {
    axios({
      "method": "GET",
      "url": "https://rawg-video-games-database.p.rapidapi.com/genres",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "c0aed11e71msh88771d59f5bb371p169482jsnbf0c9e80b15b",
        "useQueryString": true
      }
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }


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
  console.log(categories)


  const capturarValue = (e) => {
    const valorAlmacenado = e.target.value.trim().toLowerCase();
    setFilteredCategories({
      filteredCategories: categories.filter(
        (category) => category.category.toLowerCase().indexOf(valorAlmacenado) === 0
      )
    });
  };

  /* {this.state.cities === null 
    ? (<div className='preloader'></div>)
    : null
  }
*/
  const categoryNotFound = require("../images/404notFound.png");
  const filteredSameZero = () => {
    if (filteredCategories.length === 0) {
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
              textAlign: 'center',
            }}
          >
            Categoy not found.. Try Again!
            </p>
        </div>
      )
    };
  };

  return (
    <>
      <Header />
      <div id="mainCategories">
        <input type="text" placeholder="What category are you interested in?" name="category" id="category" onChange={capturarValue()} />
        <ul className="Container">
          {filteredSameZero()}
          {filteredCategories.map((category) => {
            return <>
              <NavLink to={`/Category/${category.name}`}>
                <Category category={category} />
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
  return {
    categories: state.gamesReducer.categories
  }
}

export default connect(mapStateToProps)(Categories);
