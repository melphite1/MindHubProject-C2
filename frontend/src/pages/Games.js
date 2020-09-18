import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import gamesActions from "../redux/actions/gamesActions";
import Game from "../components/Game"
import Footer from '../components/Footer'
import '../styles/category.css'

const Games = (props) => {

  const [category, setCategory] = useState({})


  useEffect(() => {
    async function traedorDeJuegos(){
     await props.getSpecificGames(props.match.params.id);
    }
    traedorDeJuegos()
    
  }, []);
 
  const specificCategory = props.categories.filter(category => category._id === props.  match.params.id)
  const stateModificator = specificCategory => {
    setCategory(specificCategory)
  }

  useEffect(() => {
    stateModificator(specificCategory[0])
  }, [stateModificator])

  

  

  

  const styleCategory = {
    backgroundImage: `url(${category.picCategory})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionY: '30%',
    height:'50vh',
    display:'flex', flexDirection:'column',justifyContent: 'flex-end',
    flexWrap: 'wrap', 
  }

  return (
    <>
      <Header />

      <div style={styleCategory}>
          <h1 className="categoryName" style={{padding: '2vh 2vw'}}>{category.name}</h1>
      </div>

      <ul id="mainContainer">
        {props.games.length === 0
          ? (<div id="noItYet">
            <p>No games loaded yet.</p>
          </div>)
          : props.games.map((game) => {
            return (<>
              <Game game={game} />
            </>)
          })
        }
      </ul>
      <Footer/>
    </>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.gamesReducer.categories,
    games: state.gamesReducer.games
  }
}

const mapDispatchToProps = {
  getSpecificGames: gamesActions.getSpecificGames
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
