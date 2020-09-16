import React from 'react'
import gamesActions from '../redux/actions/gamesActions'
import { connect } from "react-redux"

class Game extends React.Component {
  state = {
    commentary: '',
    idGame: '',
    sendModify: false,
  }
  readCommentary = (e) => {
    var commentary = e.target.value
    const idGame = e.target.id

    this.setState({
      commentary,
      idGame
    })
  }
  sendCommentary = async (e) => {
    var commentary = this.state.commentary
    if (commentary === '') {
      alert("You can't send empty comments", "", "error");
      e.preventDefault()
    } else {
      await this.props.putCommentary(this.props.game._id, commentary, this.props.token)
      await this.props.getCommentaries()
    }
    this.setState({
      commentary: ''
    })
  }
  render() {
    console.log(this.props)
    return (

      <div className="border col-8 mx-auto m-5">
        <h1 >{this.props.game.title}</h1>

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
          <p className='text-light'>{this.props.game.body}</p>
          <p className='text-light'>{this.props.game.rating}</p>
          <div>
            <input onChange={this.readCommentary} id={this.props.game._id} value={this.state.commentary}></input>
            <button onClick={this.sendCommentary}>send</button>
          </div>
        </div>

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
    commentaries: state.newsReducer.commentaries
  }
}

const mapDispatchToProps = {
  putCommentary: gamesActions.putCommentary,
  getCommentaries: gamesActions.getCommentaries,
  // deleteCommentary: gamesActions.deleteCommentary,
  // modifyCommentary: gamesActions.modifyCommentary,

}
export default connect(mapStateToProps, mapDispatchToProps)(Game)