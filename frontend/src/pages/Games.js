import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import gamesActions from '../redux/actions/gamesActions'
import { connect } from 'react-redux'
import auxActions from '../redux/actions/auxActions'
const Games = (props) => {
<<<<<<< HEAD
    
    const [categories, setCategories] = useState([])
    const [games, setGames] = useState([])

    useEffect(() => {
        props.getCategories() 
        props.getGames()
        setCategories([...props.categories])
        setGames([...props.games])
      }, [])

      console.log(props)
    return (
        <>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.usersReducer.username,
        firstTime: state.usersReducer.firstTime,
        token: state.usersReducer.token,
        categories: state.gamesReducer.categories,
        games: state.gamesReducer.games
    }
}

const mapDispatchToProps = {
    sendConsole: auxActions.sendConsole,
    getCategories: gamesActions.getCategories,
    getGames: gamesActions.getGames
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
=======
  
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
  console.log(props.games)
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
>>>>>>> d30f7a1ad127e12ab178455c7c48d462c43f6174
