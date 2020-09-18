import React from 'react';
import newsActions from '../redux/actions/newsActions'
import { connect } from "react-redux"
import CommentNews from './CommentNews';

class OneNews extends React.Component {

  state = {
    commentary: '',
    idNews: '',
    sendModify: false,
    viewMoreComments: false,
    viewAllNews: false

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

    const viewComments = () => {
      this.setState({
        viewMoreComments: !this.state.viewMoreComments
      })
    }
    const viewNews = () => {
      this.setState({
        viewAllNews: !this.state.viewAllNews
      })
    }
    console.log(this.props.news)

    return (
      <>
        <hr style={{ border: '1px solid #4B75B1', opacity: '12%', margin: '2vh 15vh' }} />
        <div className="news text-center" style={{ margin: '5vh 15vh', display: 'flex', flexDirection: 'column' }}>
          <h1 className="news">{this.props.news.title}</h1>
          <h4 className="news">{this.props.news.date}</h4>
          <img className="news mx-auto" src={this.props.news.images}></img>
          <h3 className="news">{this.props.news.subtitle}</h3>
          {this.state.viewAllNews &&
            this.props.news.body.map(bodySection => {
              return <>
                <p>
                  {<br></br>}
                  {bodySection}
                  {<br></br>}
                </p>
              </>
            })}
          <button style={{ margin: '2vh' }} class="btn btn-dark" onClick={viewNews}>{this.state.viewAllNews ? 'See less' : 'See all the news'}</button>
          {this.state.viewMoreComments &&
            <div>
              {this.props.commentaries.map(commentary => {

                return (
                  this.props.news._id === commentary.idNews &&
                  <>
                    <CommentNews news={this.props.news} commentary={commentary} />
                    {/* <div className="col-10 mx-auto mt-5">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <a className="comment-pic user-action text-light"> <img src={commentary.userPic} className="avatar" alt="Avatar" /><b className="caret"></b></a>
                          <div>
                            <h6 className="text-light">{commentary.username}</h6>
                            {this.state.sendModify && commentary.username === this.props.username ? <><input className='comment' onChange={this.readCommentary} id={commentary._id} placeholder={commentary.content} /> <button className='send' onClick={this.modifyCommentary}>Send</button></> : <p className="text-light">{commentary.content}</p>}
                          </div>
                        </div>
                        <div className="d-flex">
                          {this.props.username === commentary.username &&
                            <>
                              <img src={edit} data-toggle="tooltip" data-placement="top" title="Delete" id={commentary._id} onClick={this.openInput} style={{ height: '4vh' }}></img>
                              <img src={trash} data-toggle="tooltip" data-placement="top" title="Modify" id={commentary._id} onClick={this.deleteCommentary} style={{ height: '4vh' }}></img>
                            </>
                          }
                        </div>
                      </div>

                    </div> */}
                  </>)
              }
              )}
              <div className="p-5">
                <input onChange={this.readCommentary} id={this.props.news._id} value={this.state.commentary} placeholder="Send a comment" className="sendComment col-12" onKeyUp={this.enter}></input>
              </div>
            </div>
          }
          <button style={{ margin: '2vh' }} class="btn btn-dark" onClick={viewComments}>{this.state.viewMoreComments ? 'See less' : 'See all the comments'}</button>
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