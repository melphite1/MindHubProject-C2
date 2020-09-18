import React from 'react'
import ContBanners from '../json/banner.json'
import { Link } from 'react-router-dom'
import '../styles/banner.css'

const Banners = () => {
    return (
        <>
            {ContBanners.map((banner, index) => {
                return(
                <div className='cardContainer heros row' style={{
                    backgroundImage: `url(${banner.wallpaper})`,
                    padding: '0vw'}}>
                        <div id='heroContainer' className='col-xs-12 col-sm-6'>
                                
                            <img className='img-fluid' style={{
                                boxSizing: 'inherit',
                                height: 'auto',
                            }} src={banner.logo} alt="Card image"/>
                        
                        </div>
                        <div id='textContainer' style={{
                            margin: '1vh 1vw',
                            }} className='col-xs-12 col-sm-5'>
                            <h4 style={{
                                paddingBottom: '1vw',
                            }}>{banner.subTitle}</h4>
                            <p style={{
                                fontSize: '2vh',
                                color: 'gray',
                                padding: '0vw 1vw 1vw 0vw',
                            }}>{banner.description}</p>
                            <div id='heroTitle'>
                                <Link to={banner.link}>{banner.titleBanner}</Link>
                            </div>
                        </div>
                        
                </div>
                )
            })}
        </>
    )
}

export default Banners