import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { connect } from "react-redux"
import newsActions from '../redux/actions/newsActions'
import { NavLink } from 'react-router-dom'
import OneNews from '../components/OneNews'


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
            <h1 className="news" style={{display:'flex', justifyContent:'center', margin:'3vh', fontSize:'7vh'}}>News</h1>
            {/* <!--Start code--> */}
            {(props.newsRed == null) ?
                <p className='news' style={{display:'flex', justifyContent:'center'}}>NO NEWS YET</p>
                :
                <div>
                    <div class="col-10 pb-5 mx-auto ">
                        {/* <!--SECTION START--> */}
                        <section class="row">
                            {/* <!--Start slider news--> */}
                            <div class="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                                <div id="featured" class="carousel slide carousel" data-ride="carousel">
                                    {/* <!--dots navigate--> */}
                                    <ol class="carousel-indicators top-indicator">
                                        <li data-target="#featured" data-slide-to="0" class="active"></li>
                                        <li data-target="#featured" data-slide-to="1"></li>
                                        <li data-target="#featured" data-slide-to="2"></li>
                                        <li data-target="#featured" data-slide-to="3"></li>
                                    </ol>

                                    {/* <!--carousel inner--> */}
                                    <div class="carousel-inner">
                                        {props.newsRed.map((oneNews, index) => {
                                            {/* <!--Item slider--> */ }
                                            return (
                                                <div class={`carousel-item ${index === 0 ? "active" : ""} `}>
                                                    <div class="card border-0 rounded-0 text-light overflow zoom">
                                                        <div class="position-relative">
                                                            {/* <!--thumbnail img--> */}
                                                            <div class="ratio_left-cover-1 image-wrapper">
                                                                <NavLink to="/">
                                                                    <img class="img-fluid w-100"
                                                                        src={oneNews.images}
                                                                        alt="Bootstrap news template" />
                                                                </NavLink>
                                                            </div>
                                                            <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                                {/* <!--title--> */}
                                                                <NavLink to="/" >
                                                                    <h2 class="h3 post-title text-white my-1">{oneNews.title}</h2>
                                                                </NavLink>
                                                                {/* <!-- meta title --> */}
                                                                <div class="news-meta">
                                                                    <span class="news-author">by <a class="text-white font-weight-bold" href="../category/author.html">aleToledo </a></span>
                                                                    <span class="news-date">Sep 14, 2020</span>
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
                                <a class="carousel-control-prev" href="#featured" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#featured" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            {/* <!--End slider news--> */}

                            {/* <!--Start box news--> */}
                            <div class="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                                <div class="row">
                                    {props.newsRed.map((oneNews) => {
                                        {/* <!--news box--> */ }
                                        return (
                                            <div class="col-6 pb-1 pt-0 pr-1">
                                                <div class="card border-0 rounded-0 text-white overflow zoom">
                                                    <div class="position-relative">
                                                        {/* <!--thumbnail img--> */}
                                                        <div class="ratio_right-cover-2 image-wrapper">
                                                            <NavLink to="/" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                                <img class="img-fluid"
                                                                    src={oneNews.images}
                                                                    alt="simple blog template bootstrap" />
                                                            </NavLink>
                                                        </div>
                                                        <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                            {/* <!-- category --> */}
                                                            <NavLink to="/" class="p-1 badge badge-primary rounded-0">Gaming</NavLink>

                                                            {/* <!--title--> */}
                                                            <NavLink to="/">
                                                                <h2 class="h5 text-white my-1">{oneNews.title}</h2>
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
                    {props.newsRed.map((oneNews) => {
                        return (
                                <OneNews news={oneNews} />
                        )
                    })}</div>}





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