import React from 'react';
import newsActions from '../redux/actions/newsActions'
import { connect } from "react-redux"
import CommentNews from './CommentNews';
import "../styles/styles.css"
import '../styles/category.css'
import Swal from '../../node_modules/sweetalert2/src/sweetalert2'
import SadSquare from '../images/sadsquare.png'

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
      Swal.fire({
        title: 'Im sorry :(',
        imageUrl: `${SadSquare}`,
        imageWidth: 180,
        imageHeight: 180,
        imageAlt: 'Sad square :(',
        text: "You can't comment air ",
    })

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
    
//className="col-8 offset-md-2"  className="col-6"
    return (
      <>
        <hr style={{ border: '1px solid #4B75B1', opacity: '12%', margin: '2vh 15vh' }} />
        <div className="text-center">
          <div className=" divNews" style={{boxShadow: '5px 5px 5px #141629d8', backgroundColor:'#162333'}}>
            <div  id="flexNews" style={{padding:'5vh 0vh'}} >
              <div>
                <div className="img mx-auto" style={{backgroundImage:`url(${this.props.news.images})`, backgroundSize:'cover',backgroundPosition:'center', borderRadius:'7px'}}></div>
              </div>
              <div style={{padding:'0vh 3vh'}} >
                <h1 className="news">{this.props.news.title}</h1>
                <h4 className="news font-weight-light" style={{ margin: '2vh' }}>{this.props.news.date}</h4>
                <h4 className="news font-weight-light">{this.props.news.subtitle}</h4>
              </div>
            </div>
            <div className="parrafo">
              {this.state.viewAllNews &&
                this.props.news.body.map(bodySection => {
                return <>
                  <p className="font-weight-light text-left">
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