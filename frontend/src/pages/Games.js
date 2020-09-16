import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import gamesActions from "../redux/actions/gamesActions";
import Game from "../components/Game"

const Games = (props) => {
  
  const [category, setCategory] = useState({})


  useEffect(() => {
    const specificCategory = props.categories.filter(category => category._id === props.match.params.id)
    stateModificator(specificCategory[0])
    getSpecificGames()
  }, [])

  const getSpecificGames = async () => {
    await props.getSpecificGames(props.match.params.id)
  }

  const stateModificator = specificCategory => {
    setCategory(specificCategory)
  }
  console.log(props)
    return (
      <>
        <Header />
        <ul id="mainContainer">
            {props.games.length === 0 
              ? (<div id="noItYet">
                <p>No games loaded yet.</p>
                </div>) 
              : props.games.map((game) => {
                  return <>
                    <Game game={game} />
                  </>
                })
            }
        </ul>
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
