import React from 'react'
import ContBanners from '../json/banner.json'
import { Link } from 'react-router-dom'
import '../styles/banner.css'

const Banners = () => {
    return (
        <>
            {ContBanners.map((banner, index) => {
                return(
                <div className='cardContainer' style={{
                    padding: '1vw 0vw 4vw 0vw'
                }}>
                    <div style={{
                        fontSize: '3vh',
                    }} className='white'>
                        <p style={{}}>{banner.titleBanner}</p>
                    </div>
                    <section style={{
                        backgroundImage: `url(${banner.wallpaper})`,
                        padding: '0vw'
                    }} className='row'>
                        <div style={{
                            padding: '5vw 0vw 5vw 5vw'
                        }} className='col-xs-5 col-sm-12 col-md-5'>
                            <h4 style={{
                                paddingBottom: '1vw',
                            }}>{banner.subTitle}</h4>
                            <p style={{
                                fontSize: '2vh',
                                color: 'gray',
                                padding: '0vw 1vw 1vw 0vw'
                            }}>{banner.description}</p>
                            <Link to={banner.link}>{banner.titleBanner}</Link>
                        </div>
                        <div className='col-xs-7 col-sm-12 col-md-7'>
                            <div style={{
                                bottom: '0',
                                position: 'absolute',
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
                    </section>
                </div>
                )
            })}
        </>
    )
}

export default Banners