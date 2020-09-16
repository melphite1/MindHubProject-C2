import React from 'react'
import { connect } from "react-redux"
import Header from '../components/Header'

const Profile = (props) => {
    return (
        <>
            <Header />
            <div class="container emp-profile">
                <form method="post">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-img">
                                <img src={props.urlpic} alt="" />
                                <div class="file btn btn-lg btn-primary">
                                    Change Photo
                                <input type="file" name="file" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="profile-head">
                                <h5>
                                    {props.name}
                                </h5>
                                <h6>

                                    A game lover
                                    </h6>
                                <p class="proile-rating"></p>
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Likes</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-work">
                                <p>Fav Games</p>
                                <a href="">Magic</a><br />
                                <a href="">GTA V</a><br />
                                <a href="">Battlefield 5</a>

                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Username</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{props.username}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{props.name}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{props.username}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Favorite Console</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>not define yet</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Web Developer and Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                    <div class="row">
                                        <div class="col-md-12">
                                            <label>Your Bio</label><br />
                                            <p>Your detail description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        name: state.usersReducer.name,
        urlpic: state.usersReducer.urlpic,
        username: state.usersReducer.username,
    }
}

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)