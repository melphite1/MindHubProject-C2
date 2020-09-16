import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import { connect } from "react-redux"
import newsActions from '../redux/actions/newsActions'
import One from "../components/OneNews"
import gamesActions from '../redux/actions/gamesActions'
import { NavLink } from 'react-router-dom'




const Home = (props) => {
    const [news, setNews] = useState(null)
    useEffect(() => {
        props.getCategories()
        props.getNews()
        setNews({
            news
        })

    }, [])

    return (
        <>
            <Header />
            <Carousel />
            {/* <!--Start code--> */}
            {(props.newsRed == null) ?
                <p>NO NEWS YET</p>
                :
                <div className="col-10 pb-5 mx-auto mt-3 pt-3">
                    {/* <!--SECTION START--> */}
                    <section className="row">
                        {/* <!--Start slider news--> */}
                        <div className="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                            <div id="featured" className="carousel slide carousel" data-ride="carousel">
                                {/* <!--dots navigate--> */}
                                <ol className="carousel-indicators top-indicator">
                                    <li data-target="#featured" data-slide-to="0" className="active"></li>
                                    <li data-target="#featured" data-slide-to="1"></li>
                                    <li data-target="#featured" data-slide-to="2"></li>
                                    <li data-target="#featured" data-slide-to="3"></li>
                                </ol>

                                {/* <!--carousel inner--> */}
                                <div className="carousel-inner">
                                    {props.newsRed.map((oneNews, index) => {
                                        {/* <!--Item slider--> */ }
                                        return (
                                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""} `}>
                                                <div className="card border-0 rounded-0 text-light overflow zoom">
                                                    <div className="position-relative">
                                                        {/* <!--thumbnail img--> */}
                                                        <div className="ratio_left-cover-1 image-wrapper">
                                                            <NavLink to="/">
                                                                <img className="img-fluid w-100"
                                                                    src={oneNews.images}
                                                                    alt="Bootstrap news template" />
                                                            </NavLink>
                                                        </div>
                                                        <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                            {/* <!--title--> */}
                                                            <NavLink to="/" >
                                                                <h2 className="h3 post-title text-white my-1">{oneNews.title}</h2>
                                                            </NavLink>
                                                            {/* <!-- meta title --> */}
                                                            <div className="news-meta">
                                                                <span className="news-author">by <a className="text-white font-weight-bold" href="../category/author.html">aleToledo </a></span>
                                                                <span className="news-date">Sep 14, 2020</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                    })}
                                    {/* <!--end item slider--> */}
                                </div>
                                {/* <!--end carousel inner--> */}
                            </div>

                            {/* <!--navigation--> */}
                            <a className="carousel-control-prev" href="#featured" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#featured" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        {/* <!--End slider news--> */}

                        {/* <!--Start box news--> */}
                        <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                            <div className="row">
                                {props.newsRed.map((oneNews, index) => {
                                    {/* <!--news box--> */ }
                                    return (
                                        <div key={index} className="col-6 pb-1 pt-0 pr-1">
                                            <div className="card border-0 rounded-0 text-white overflow zoom">
                                                <div className="position-relative">
                                                    {/* <!--thumbnail img--> */}
                                                    <div className="ratio_right-cover-2 image-wrapper">
                                                        <NavLink to="/" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                            <img className="img-fluid"
                                                                src={oneNews.images}
                                                                alt="simple blog template bootstrap" />
                                                        </NavLink>
                                                    </div>
                                                    <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                        {/* <!-- category --> */}
                                                        <NavLink to="/" className="p-1 badge badge-primary rounded-0">Gaming</NavLink>

                                                        {/* <!--title--> */}
                                                        <NavLink to="/">
                                                            <h2 className="h5 text-white my-1">{oneNews.title}</h2>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                })}

                                {/* <!--end news box--> */}
                            </div>
                        </div>
                        {/* <!--End box news--> */}
                    </section>
                    {/* <!--END SECTION--> */}
                </div>



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
    getNews: newsActions.getnews,
    getCategories: gamesActions.getCategories
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
