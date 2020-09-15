import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom"
import Header from "../components/Header";
import Category from "../components/Category";
import Game from "../components/Game";
import gamesActions from "../redux/actions/gamesActions";

const Games = (props) => {
  
  const [city, setCity] = useState({})


  useEffect(() => {
    const specificCity = props.cities.filter(city => city._id === props.match.params.id)
    stateModificator(specificCity[0])
    getSpecificItineraries()
    M.AutoInit();
  }, [props.cities])

  const getSpecificItineraries = async () => {
    await props.getSpecificItineraries(props.match.params.id)
  }

  const stateModificator = specificCity => {
    setCity(specificCity)
  }

    return (
      <>
        <Header />
        <ul id="mainContainer">
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
        </ul>
        <Footer />
      </>
    );
}

const mapStateToProps = state => {
  return{
    cities: state.citiesRedState.cities,
    itineraries: state.citiesRedState.itineraries
  }
}

const mapDispatchToProps = {
  getSpecificItineraries: citiesActions.getSpecificItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
