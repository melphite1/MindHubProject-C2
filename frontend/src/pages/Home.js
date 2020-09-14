import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import { connect } from "react-redux";
import gamesActions from '../redux/actions/gamesActions';

const Home = () => {
    return (
        <>
            <Header />
            <Carousel />
        </>
    )
}

const mapDispatchToProps = {
    getCategories: gamesActions.getCategories,
}

export default connect(null, mapDispatchToProps)(Home);



  