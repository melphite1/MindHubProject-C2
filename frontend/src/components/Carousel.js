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
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="https://i.blogs.es/a99d47/assassin-s-creed-valhalla-04/1366_2000.jpeg" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://as.com/meristation/imagenes/2019/10/13/noticias/1570972818_956311_1570972895_noticia_normal.jpg" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://www.kabukis.com/wp-content/uploads/2013/08/BEYOND.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

            </>
        )
    }
}

export default Carousel;
