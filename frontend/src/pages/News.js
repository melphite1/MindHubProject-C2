import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import newsActions from '../redux/actions/newsActions';
import { connect } from "react-redux"
import Axios from 'axios'
import One from "../components/OneNews"

const News = (props) => {
    const [news, setNews] = useState([

    ])
    useEffect(async () => {
      const respuesta = await  props.getNews()
        // const respuesta = await Axios.get('http://127.0.0.1:4000/api/news')
        console.log(respuesta.news)
        setNews(
            ...news,
            respuesta.news
        )
    }, [])
    return (
        <>
            <Header />
            <h1>News</h1>

            {news.map(Onenews => {
                return <>
                <One news = {Onenews}/>
               
                </>
            })}


        </>
    )
}

const mapDispatchToProps = {
    getNews: newsActions.getnews
}

export default connect(null, mapDispatchToProps)(News)