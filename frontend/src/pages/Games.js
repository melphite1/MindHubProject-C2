import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import gamesActions from '../redux/actions/gamesActions'
import { connect } from 'react-redux'
import auxActions from '../redux/actions/auxActions'
const Games = (props) => {
    
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