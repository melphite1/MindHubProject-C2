import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import { connect } from "react-redux"
import newsActions from '../redux/actions/newsActions'
import One from "../components/OneNews"

const Home = (props) => {
    const [news, setNews] = useState(null)
    useEffect(()=>{
        props.getNews()
        setNews({
            news
        })

    },[])
    
    return (
        <>
            <Header />
            <Carousel />
            {
                (props.newsRed == null) ?
                 <p>NO NEWS YET</p>
                :
                   props.newsRed.map(newsOne =>{
                       return <One news = {newsOne} />
                   })

            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        newsRed: state.newsReducer.news.news
    }
}

const mapDispatchToProps = {
    getNews: newsActions.getnews
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)