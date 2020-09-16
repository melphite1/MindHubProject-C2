import React from 'react'
import { connect } from "react-redux"
import Header from '../components/Header'

const Profile = (props) => {
    return (
        <>
            <Header/>
            <p>Hola estas en tu perfil</p>
            <p>{props.name}</p>
            <img src={props.urlpic} alt='picUser'/>
            <p>{props.username}</p>
        </>
    )
}

const mapStateToProps = state => {
    return {
        name: state.usersReducer.name,
        urlpic: state.usersReducer.urlpic,
        username: state.usersReducer.username,
    }
}

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)