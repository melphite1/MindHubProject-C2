import React from 'react'
import gamesActions from '../redux/actions/gamesActions'
import { connect } from "react-redux"
import Comment from "./Comment"


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

      <div className="border col-8 mx-auto m-5">
        <h1 >{this.props.game.title}</h1>
        <div style={{ display: "flex" }}>  {star.map((star) => {
          return (
            <p className="valor">
              <i id="dollar" className="small material-icons">
                <img style={{ width: "50px" }} src={require("../images/staron.png")}></img>
              </i>
            </p>
          );
        })}
          {emptyStar.map((star) => {
            return (
              <p className="valor">
                <i id="dollar" className="small material-icons">
                  <img style={{ width: "50px" }} src={require("../images/star.png")}></img>
                </i>
              </p>
            );
          })}</div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12'>
            <img className='img-fluid' src={this.state.mainFoto}/>
          </div>
          <div className='row'>
            {this.state.listImages.map((image, index) => {
              return(
                <div key={index} className='col-xs-4 col-sm-4 col-md-4'>
                  <img className='img-fluid' id={index} onClick={switchPhoto} src={image}/>
                </div>
              )
            })}
          </div>
        </div>
        
        <p className='text-light'>{this.props.game.body}</p>
        <p className='text-light'>{this.props.game.rating}</p>
        {this.state.viewMore &&
          <>
            <div className="col-10 mx-auto">
              {this.props.commentaries.map(commentary => {
                return (
                  this.props.game._id === commentary.idGame &&
                  <>
                    <Comment game={this.props.game} commentary={commentary} />
                  </>)
              })}

              <div className="p-5">
                <input onChange={this.readCommentary} placeholder="Send a comment" className="sendComment col-12" id={this.props.game._id} value={this.state.commentary} onKeyUp={this.enter}></input>
              </div>
            </div>
          </>
        }
        <button onClick={viewSwitch}>{this.state.viewMore ? 'View less' : 'View more'}</button>
      </div >



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