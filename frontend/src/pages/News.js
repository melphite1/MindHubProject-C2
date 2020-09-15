import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { connect } from "react-redux"
import One from "../components/OneNews"
import newsActions from '../redux/actions/newsActions'

const News = (props) => {


    const [news, setNews] = useState(null)

    useEffect(() => {
        props.getNews()
        setNews({
            news
        })

    }, [])
    console.log(props.newsRed)
    return (
        <>
            <Header />
            <h1>News</h1>
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


export default connect(mapStateToProps, mapDispatchToProps)(News)