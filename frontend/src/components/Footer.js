import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Web pages</h5>
                        <ul className="list-unstyled quick-links">
                            <li><Link to='/'><i className="fa fa-angle-double-right"></i>Home</Link></li>
                            <li><Link to='/news'><i className="fa fa-angle-double-right"></i>News</Link></li>
                            <li><Link to='/categories'><i className="fa fa-angle-double-right"></i>Categories</Link></li>
                            <li><Link to='login'><i className="fa fa-angle-double-right"></i>LogIn</Link></li>
                            <li><Link to='signup'><i className="fa fa-angle-double-right"></i>Register</Link></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Plataforms</h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href="https://https://store.steampowered.com/" target="_blank"><i className="fa fa-angle-double-right" ></i>Steam</a></li>
                            <li><a href="https://www.epicgames.com/" target="_blank"><i className="fa fa-angle-double-right" ></i>Epic games</a></li>
                            <li><a href="https://www.battle.net/" target="_blank"><i className="fa fa-angle-double-right" ></i>Battle.net</a></li>
                            <li><a href="https://www.origin.com/" target="_blank"><i className="fa fa-angle-double-right" ></i>Origin</a></li>
                            <li><a href="https://www.uplay.com/" target="_blank"><i className="fa fa-angle-double-right" ></i>Uplay</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Developers</h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href="https://github.com/alejandroToledo"><i className="fa fa-angle-double-right"></i>Ale Toledo</a></li>
                            <li><a href="https://github.com/paulinavaira"><i className="fa fa-angle-double-right"></i>Paulina Vaira</a></li>
                            <li><a href="https://github.com/melphite1"><i className="fa fa-angle-double-right"></i>Cristian Suarez</a></li>
                            <li><a href="https://github.com/SantiChiavellini"><i className="fa fa-angle-double-right"></i>Santi Chiavelini</a></li>
                            <li><a href="https://github.com/EddyVega-dev"><i className="fa fa-angle-double-right"></i>Eddy Vega</a></li>
                        </ul>
                    </div>
                    <div className="row col-xs-12 col-sm-12 col-md-12">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.google.com/" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.gmail.com/" target="_blank"><i className="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div className="row col-xs-12 col-sm-12 col-md-12">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p><u><a>Scape Entretaiment</a></u> is a channel of game lists, Inc. Capital Federal [the capital of Buenos Aires, Argentina]</p>
                            <p className="h6">©2020 All right Reversed.<a href="/" className="text-green ml-2">Scape</a></p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer