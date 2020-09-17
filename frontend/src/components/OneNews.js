import React from 'react';
import newsActions from '../redux/actions/newsActions'
import { connect } from "react-redux"
import CommentNews from './CommentNews';

class OneNews extends React.Component {

  state = {
    commentary: '',
    idNews: '',
    sendModify: false,
    viewMore: false
  }
  componentDidMount() {
    this.props.getCommentaries()
  }

  readCommentary = (e) => {
    var commentary = e.target.value
    const id = e.target.id
    this.setState({
      commentary,
      id
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
    } else if (e.keyCode === 13) {
      this.modifyCommentary()
      this.setState({
        sendModify: false
      })
    }
  }
  sendCommentary = async () => {
    var commentary = this.state.commentary
    if (commentary === '') {
      alert("You can't send empty comments", "", "error");

    } else {
      await this.props.putCommentary(this.props.news._id, commentary, this.props.token)
      await this.props.getCommentaries()
    }
    this.setState({
      commentary: ''
    })
  }
  deleteCommentary = async (e) => {
    const idCommentary = e.target.id
    await this.props.deleteCommentary(idCommentary)

  }
  openInput = async () => {
    this.setState({
      sendModify: !this.state.sendModify
    })
  }
  modifyCommentary = async () => {
    await this.props.modifyCommentary(this.state.commentary, this.state.id)
  }
  render() {

    const viewSwitch = () => {
      this.setState({
        viewMore: !this.state.viewMore
      })
    }

    return (
      <>
        <div className="mx-auto border col-10 m-5" id={this.props.news._id}>
          <h1 className="text-light text-center">{this.props.news.title}</h1>

          <h3 className="text-light text-center">{this.props.news.subtitle}</h3>
          <p className="text-light text-center">{this.props.news.date}</p>
          <img alt={this.props.title} className="mx-auto" src={this.props.news.images}></img>
          <p className="text-light text-center">{this.props.news.body}</p>
          {this.state.viewMore &&
            <div className="col-10 mx-auto">
              {this.props.commentaries.map(commentary => {

                return (
                  this.props.news._id === commentary.idNews &&
                  <>
                    <CommentNews news={this.props.news} commentary={commentary} />
                  </>)
              }
              )}
              <div className="p-5">
                <input onChange={this.readCommentary} id={this.props.news._id} value={this.state.commentary} placeholder="Send a comment" className="sendComment col-12" onKeyUp={this.enter}></input>
              </div>
            </div>
          }
          <button onClick={viewSwitch}>{this.state.viewMore ? 'View less' : 'View more'}</button>
        </div>
      </>
    );
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
  putCommentary: newsActions.putCommentary,
  getCommentaries: newsActions.getCommentaries,
  deleteCommentary: newsActions.deleteCommentary,
  modifyCommentary: newsActions.modifyCommentary,

}


export default connect(mapStateToProps, mapDispatchToProps)(OneNews)