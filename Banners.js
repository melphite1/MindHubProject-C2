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
                    padding: '1vw 0vw 4vw 0vw',
                    backgroundImage: `url(${banner.wallpaper})`,
                    padding: '0vw'
                }}>
                        <div className='col-xs-12 col-sm-6'>
                            <div id='heroContainer' style={{
                                bottom: '0',
                                position: 'relative',
                            }}>
                                <div style={{
                                    position: 'relative',
                                    // paddingBottom: 'calc(3 / 4 * 100%)',
                                }}>
                                    <img className='img-fluid rounded mx-auto d-block' style={{
                                        boxSizing: 'inherit',
                                        height: 'auto',
                                    }} src={banner.logo} alt="Card image"/>
                                </div>
                            </div>
                        </div>
                        <div id='textContainer' style={{
                            margin: '1vh 1vw',
                            padding: '5vw 0vw 5vw 5vw',
                            backgroundColor:'#183255'
                        }} className='col-xs-12 col-sm-5'>
                            <h4 style={{
                                paddingBottom: '1vw',
                            }}>{banner.subTitle}</h4>
                            <p style={{
                                fontSize: '2vh',
                                color: 'gray',
                                padding: '0vw 1vw 1vw 0vw',
                            }}>{banner.description}</p>
                            <Link to={banner.link}>{banner.titleBanner}</Link>
                        </div>
                        
                </div>
                )
            })}
        </>
    )
}

export default Banners