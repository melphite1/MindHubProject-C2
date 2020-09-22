import React from 'react'
import { connect } from "react-redux"
import Header from '../components/Header'
import usersActions from '../redux/actions/usersActions'

class Profile extends React.Component {
    state = {
        changeInfo: false,
        flagbutton: false,


    }

    editInfo = () => {

        this.setState({
            changeInfo: !this.state.changeInfo,
            flagbutton: !this.state.flagbutton,
            name: this.props.name,
            lastname: this.props.lastname,
            favConsole: this.props.favConsole,
            urlpic: this.props.urlpic,
        })

    }
    readInput = e => {
        const value = e.target.name === "urlpic" ? e.target.files[0] : e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value
        })
    }
    sendInfo = async () => {
        const fd = new FormData()
     

        fd.append("name", this.state.name)
        fd.append("lastname", this.state.lastname)
        fd.append("username", this.props.username)
        fd.append("urlpic", this.state.urlpic)
        fd.append("favConsole", this.state.favConsole)
        this.setState({
            ...this.state,
            urlpic: ""
        })
        await this.props.modifyUser(fd)
        this.editInfo()

    }
    render() {
  
        const consoles = [
            'Not defined yet',
            'Pc',
            'PlayStation, Sony',
            'PlayStation2, Sony',
            'PlayStation3, Sony',
            'PlayStation4, Sony',
            'PSP, Sony',
            'GameBoy, Nintendo',
            'GameBoyColor, Nintendo',
            'GameBoyAdvance, Nintendo',
            'Nintendo, Nintendo',
            'Nintendo64, Nintendo',
            'Nintendo3DS, Nintendo',
            'NintendoSwitch, Nintendo',
            'NintendoDS, Nintendo',
            'SuperNintendo, Nintendo',
            'GameCube, Nintendo',
            'NintendoSwitch, Nintendo',
            'Wii, Nintendo',
            'Xbox360, Microsoft',
            'XboxOne, Microsoft',
            'Xbox, Microsoft',
            'SegaGameGear, Sega',
            'Dreamcast, Sega',
            'Atari2600, Atari',
            'Atari5200, Atari'
        ]
      
        return (
            <>
                <Header />
                <div class="container emp-profile inputEdit">

                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-img" style={{
                                backgroundImage: `url(${this.props.urlpic})`,
                                backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center',
                                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'
                            }}>
                                {this.state.flagbutton &&
                                    <div class="file btn btn-lg btn-primary" style={{ width: '100%' }}>
                                        <input type="file" name="urlpic" onChange={this.readInput} ></input>
                                    Change Photo
                                </div>}
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
                        <div class="col-md-2" >
                            {this.state.flagbutton ? <button class="profile-edit-btn mb-2" onClick={this.editInfo} >Cancel Edit </button> : <button class="profile-edit-btn" onClick={this.editInfo} >Edit Profile</button>}
                            {this.state.flagbutton && <button class="profile-edit-btn " onClick={this.sendInfo} >Send Info </button>}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-work mt-2">
                                <p>Fav Games</p>
                                <a href="">Magic</a><br />
                                <a href="">GTA V</a><br />
                                <a href="">Battlefield 5</a>
                            </div>
                        </div>
                        <div class="col-md-8 contenido">
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row put">
                                        <div class="col-md-6">
                                            <label>Username</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.props.username}</p>

                                        </div>
                                    </div>
                                    <div class="row put">
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            {this.state.changeInfo ? <input placeholder="Name" name="name" value={this.state.name} onChange={this.readInput}></input> : <p>{this.props.name}</p>}
                                        </div>
                                    </div>
                                    <div class="row put">
                                        <div class="col-md-6">
                                            <label>Last Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            {this.state.changeInfo ? <input placeholder="Lastname" name="lastname" value={this.state.lastname} onChange={this.readInput}></input> : <p>{this.props.lastname}</p>}
                                        </div>
                                    </div>
                                    <div class="row put">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{this.props.username}</p>
                                        </div>
                                    </div>
                                    <div class="row put">
                                        <div class="col-md-6">
                                            <label>Favorite Console</label>
                                        </div>
                                        <div class="col-md-6">
                                            {this.state.changeInfo ? <select
                                                name="favConsole"
                                                id="favConsole"
                                                onChange={this.readInput}
                                                className="text-center col-6"
                                            >
                                                <option value={-1} className="text-center">
                                                    Choose your favourite console.
                                            </option>
                                                {consoles.map((console, i) => {
                                                    return (
                                                        <option
                                                            key={"console" + [i]}
                                                            className="text-center"
                                                        >
                                                            {console}
                                                        </option>
                                                    );
                                                })}
                                            </select> : <p>{this.props.favConsole}</p>}
                                        </div>
                                    </div>

                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p>functionality under development</p>
                                        </div>
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
        lastname: state.usersReducer.lastname,
        favConsole: state.usersReducer.favConsole

    }
}
const mapDispatchToProps = {
    modifyUser: usersActions.modifyUser
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)