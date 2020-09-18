import React from 'react'
import ContBanners from '../json/banner.json'
import { Link } from 'react-router-dom'
import '../styles/banner.css'

const Banners = () => {
    return (
        <>
            {ContBanners.map((banner, index) => {
                return(
                <div className='cardContainer heros' style={{
                    padding: '1vw 0vw 4vw 0vw',
                    backgroundImage: `url(${banner.wallpaper})`,
                    padding: '0vw'}}>
                        <div style={{padding: '5vw 0vw 5vw 5vw'}} className=''>
                            <h4 style={{paddingBottom: '1vw',}}>{banner.subTitle}</h4>
                            <p style={{
                                fontSize: '2vh',
                                color: 'gray',
                                padding: '0vw 1vw 1vw 0vw'
                            }}>{banner.description}</p>
                            <Link to={banner.link}>{banner.titleBanner}</Link>
                        </div>
                        <div id='heroContainer'>
                            <img className='rounded mx-auto' style={{
                                boxSizing: 'inherit',
                                height: 'auto',
                            }} src={banner.logo} alt="Card image"/>
                        </div>
                </div>
                )
            })}
        </>
    )
}

export default Banners