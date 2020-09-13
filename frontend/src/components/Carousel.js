import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/styles.css"
class Carousel extends React.Component {
    render() {
        return (
            <>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active" style={{ height: '80vh' }}>
                            <img class="d-block w-100" src="https://i.blogs.es/a99d47/assassin-s-creed-valhalla-04/1366_2000.jpeg" alt="First slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Find the latest news about the gamer world</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus sem elementum purus euismod elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                            </div>
                        </div>
                        <div class="carousel-item" style={{ height: '80vh' }}>
                            <img class="d-block w-100" src="https://areajugones.sport.es/wp-content/uploads/2020/04/the-last-of-us-outbreak-day-art-01-us-25sep19.jpg" alt="Second slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Find the latest news about the gamer world</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus sem elementum purus euismod elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                            </div>
                        </div>
                        <div class="carousel-item" style={{ height: '80vh' }}>
                            <img class="d-block w-100" src="https://www.kabukis.com/wp-content/uploads/2013/08/BEYOND.jpg" alt="Third slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Find the latest news about the gamer world</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus sem elementum purus euismod elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Carousel;
