import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom"
import Header from "../components/Header";
import Category from "../components/Category";
import Game from "../components/Game";
import gamesActions from "../redux/actions/gamesActions";

const Games = (props) => {
  
  const [category, setCategory] = useState({})


  useEffect(() => {
    const specificCategory = props.categories.filter(category => category._id === props.match.params.id)
    stateModificator(specificCategory[0])
    getSpecificGames()
  }, [props.games])

  const getSpecificGames = async () => {
    await props.getSpecificGames(props.match.params.id)
  }

  const stateModificator = specificCategory => {
    setCategory(specificCategory)
  }

    return (
      <>
        <Header />
        {/* <ul id="mainContainer">
            {
              <NavLink to= '/Cities'>
                <City city={city}/>
              </NavLink>
            }
            {props.itineraries.length === 0 
              ? (<div id="noItYet">
                <p>No itineraries loaded yet. Be the first!</p>
                </div>) 
              : props.itineraries.map((itinerary) => {
                  return <>
                    <Itinerary itinerary={itinerary} />
                  </>
                })
            }
        </ul> */}
      </>
    );
}

const mapStateToProps = state => {
  return{
    categories: state.gamesReducer.categories,
    games: state.gamesReducer.games
  }
}

const mapDispatchToProps = {
  getSpecificGames: gamesActions.getSpecificGames
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
