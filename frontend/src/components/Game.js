import React from 'react'
import gamesActions from '../redux/actions/gamesActions'
import { connect } from "react-redux"
import Comment from "./Comment"
import '../styles/category.css'



class Game extends React.Component {
  state = {
    commentary: '',
    idGame: '',
    sendModify: false,
    viewMore: false,
    listImages: [],
    mainFoto: null,
  }

  async componentDidMount() {
    await this.props.getCommentaries()
    this.setState({
      listImages: this.props.game.images,
      mainFoto: this.props.game.images[0]
    })
  }
  enter = (e) => {
    if (e.keyCode === 13) {
      this.sendCommentary()
    }
  }
  escape = (e) => {
    if (e.keyCode === 27) {
      this.setState({
        sendModify: false
      })
    }
  }
  readCommentary = (e) => {
    var commentary = e.target.value
    const idGame = e.target.id

    this.setState({
      commentary,
      idGame
    })
  }
  sendCommentary = async () => {
    var commentary = this.state.commentary
    if (commentary === '') {
      alert("You can't send empty comments", "", "error");

    } else {
      await this.props.putCommentary(this.props.game._id, commentary, this.props.token)
      await this.props.getCommentaries()
    }
    this.setState({
      commentary: ''
    })
  }

  openInput = async (e) => {
    this.setState({
      sendModify: !this.state.sendModify
    })
  }

  modifyCommentary = async (e) => {
    await this.props.modifyCommentary(this.state.commentary, this.state.idGame)
  }
   
  render() {

    const star = []
    const emptyStar = []

    function iconGenerator(quantity, filledValor, emptyValor) {


      for (var i = 0; i < quantity; i++) {
        filledValor.push("instance");
      }
      for (var i = 0; i < 5 - quantity; i++) {
        emptyValor.push("instance");
      }
    }
    
    iconGenerator(this.props.game.rating, star, emptyStar);

    const viewSwitch = () => {
      this.setState({
        viewMore: !this.state.viewMore
      })
    }

    const switchPhoto = e => {
      const image = this.state.listImages[parseInt(e.target.id)]
      this.setState({
        mainFoto: image,
      })
    }

    return (
      <div style={{display:'flex', margin:'3vh'}}>
        <div className="divGame" >
          <div className="aGame" style={{boxShadow: '5px 5px 5px #141629d8'}}>
            <div>
              <div className=" col-12" style={{margin:'2vh 0vh'}}>
                <div className='imgMain img-fluid' style={{backgroundImage:`url(${this.state.mainFoto})`, backgroundSize:'cover'}}>
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'center', alignContent:'center', margin:'2vh auto'}}>
                {this.state.listImages.map((image, index) => {
                  return(
                    <div key={index} className='imgFluid col-sm'>
                      <div className='fluid img-fluid' id={index} onClick={switchPhoto} style={{backgroundImage:`url(${image})`,backgroundSize:'cover'}}/>
                    </div>
                  )
                })}
              </div>
              <div className="comments col-12">
                {this.state.viewMore &&
                <>
                  <div className="col-12" >
                    <h3 style={{fontSize:'3vh'}}>Reviews</h3>
                    {this.props.commentaries.map(commentary => {
                      return (
                        this.props.game._id === commentary.idGame &&
                        <>
                          <Comment game={this.props.game} commentary={commentary} />
                        </>)
                    })}

                    <div className="col-12" style={{margin:'3vh 0vh'}}>
                      <input onChange={this.readCommentary} placeholder="Send a comment" className="sendComment col-12" id={this.props.game._id} value={this.state.commentary} onKeyUp={this.enter}></input>
                    </div>
                  </div>
                </>
                }
                  <div style={{margin:'2vh auto'}}>
                    <button style={{backgroundColor:'#101E30', border:'0px'}} class=" text-center btn btn-primary col-6 offset-md-3" onClick={viewSwitch}>{this.state.viewMore ? 'See less reviews' : 'See all reviews'}</button>
                </div>
              </div>
              
            </div>
            <div className="text" style={{fontSize:'2vh'}}>
              <div>
                <h1 style={{fontSize:'4.5vh' , margin:'1vh'}}>{this.props.game.title}</h1>
                    <div style={{ display: "flex", margin:'1vh' }}>  
                      {star.map((star) => {
                        return (
                          <p className="valor"> 
                            <i id="dollar" className="small material-icons">
                              <img style={{ width: "3vh"}} src={require("../images/staron.png")}></img>
                            </i>
                          </p>
                        );
                      })}
                    </div> 
              </div >
              <p style={{margin:'1vh'}} className='font-weight-light text-light'>{this.props.game.body}</p>
            </div>
          </div >

      </div>
    </div>

    )
  }
}
const mapStateToProps = state => {
  return {
    name: state.usersReducer.name,
    urlpic: state.usersReducer.urlpic,
    token: state.usersReducer.token,
    username: state.usersReducer.username,
    commentaries: state.gamesReducer.commentaries
  }
}

const mapDispatchToProps = {
  putCommentary: gamesActions.putCommentary,
  getCommentaries: gamesActions.getCommentaries,
  deleteCommentary: gamesActions.deleteCommentary,
  modifyCommentary: gamesActions.modifyCommentary,

}
export default connect(mapStateToProps, mapDispatchToProps)(Game)

/*
 {/* {emptyStar.map((star) => {
              return (
                <p className="valor">
                  <i id="dollar" className="small material-icons">
                    <img style={{ width: "50px" }} src={require("../images/star.png")}></img>
                  </i>
                </p>
              );
            })}</div>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              {this.props.game.images.map((img, index) => {
                return (
                  <div class={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <img class="d-block w-100" src={img} alt="First slide" />
                  </div>)
              })}
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          })}*/