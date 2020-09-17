import React from 'react'
import { connect } from "react-redux"
import Header from '../components/Header'

class Profile extends React.Component {
    state = {
        changeInfo: false
    }
    editInfo = () => {

        this.setState({
            changeInfo: !this.state.changeInfo
        })

    }

    render() {
        console.log(this.state.changeInfo)
        return (
            <>
                <Header />
                <div class="container emp-profile">

                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-img">
                                <img src={this.props.urlpic} alt="" />
                                <div class="file btn btn-lg btn-primary">
                                    Change Photo
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 profile-tab">
                            <div class="profile-head">
                                <h5> {this.props.name} {this.props.lastname}</h5>
                                <h6> A game lover </h6>
                                <p class="profile-rating"></p>
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
                            <button class="profile-edit-btn" onClick={this.editInfo} >Edit Profile</button>
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
                        <div class="col-md-8 contenido">
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Username</label>
                                        </div>
                                        <div class="col-md-6">
                                            {this.state.changeInfo ? <input></input> : <p>{this.props.username}</p>}

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            {this.state.changeInfo ? <input></input> : <p>{this.props.name} {this.props.lastname}</p>}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            {this.state.changeInfo ? <input></input> : <p>{this.props.username}</p>}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Favorite Console</label>
                                        </div>
                                        <div class="col-md-6">
                                            {this.state.changeInfo ? <input></input> : <p>not define yet</p>}
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

                </div>
            </>

        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.usersReducer.name,
        urlpic: state.usersReducer.urlpic,
        username: state.usersReducer.username,
        lastname: state.usersReducer.lastname
    }
}



export default connect(mapStateToProps)(Profile)