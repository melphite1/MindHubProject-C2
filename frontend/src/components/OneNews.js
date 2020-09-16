import React from 'react';
import newsActions from '../redux/actions/newsActions'
import { connect } from "react-redux"

class OneNews extends React.Component {

  state = {
    commentary: '',
    idNews: '',
    sendModify: false,
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
  sendCommentary = async (e) => {
    var commentary = this.state.commentary
    if (commentary === '') {
      alert("You can't send empty comments", "", "error");
      e.preventDefault()
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
  openInput = async (e) => {
    const id = e.target.id

    this.setState({
      sendModify: !this.state.sendModify
    })
  }
  modifyCommentary = async (e) => {
    await this.props.modifyCommentary(this.state.commentary, this.state.id)
  }
  render() {
    return (
      <>
        <div className="mx-auto border col-10 m-5">
          <h1 className="text-light text-center">{this.props.news.title}</h1>

          <h3 className="text-light text-center">{this.props.news.subtitle}</h3>
          <p className="text-light text-center">{this.props.news.date}</p>
          <img className="mx-auto" src={this.props.news.images}></img>
          <p className="text-light text-center">{this.props.news.body}</p>
          <div>

            {this.props.commentaries.map(commentary => {

              return (
                this.props.news._id === commentary.idNews &&
                <>
                  <div>
                    <h3 className="text-light">{commentary.username}</h3>
                    {this.state.sendModify && commentary.username === this.props.username ? <><input onChange={this.readCommentary} id={commentary._id} placeholder={commentary.content} /> <button onClick={this.modifyCommentary}>send</button></> : <p className="text-light">{commentary.content}</p>}
                    {this.props.username === commentary.username &&
                      <>
                        <p className="text-light" id={commentary._id} onClick={this.deleteCommentary}>borrar</p>
                        <p className="text-light" id={commentary._id} onClick={this.openInput}>modificar</p>
                      </>}
                  </div>
                </>)
            }
            )}
            <input onChange={this.readCommentary} id={this.props.news._id} value={this.state.commentary}></input>
            <button onClick={this.sendCommentary}>send</button>
          </div>
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