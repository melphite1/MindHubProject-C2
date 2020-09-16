import React from 'react';
import newsActions from '../redux/actions/newsActions'
import trash from '../images/trash.png'
import edit from '../images/edit.png'
import { connect } from "react-redux"

class CommentNews extends React.Component {

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
        console.log(e.keyCode)
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

        const viewSwitch = () => {
            this.setState({
                viewMore: !this.state.viewMore
            })
        }

        return (
            <>

                {this.props.news._id === this.props.commentary.idNews &&
                    <>
                        <div className="col-12 mx-auto mt-5">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <a className="comment-pic user-action text-light"> <img src={this.props.commentary.userPic} className="avatar" alt="Avatar" /><b className="caret"></b></a>
                                    <div>
                                        <h6 className="text-light">{this.props.commentary.username}</h6>
                                        {this.state.sendModify && this.props.commentary.username === this.props.username ? <><input onChange={this.readCommentary} id={this.props.commentary._id} placeholder={this.props.commentary.content} onKeyUp={this.escape} /> <p>escape to cancel • enter to save</p></> : <p className="text-light">{this.props.commentary.content}</p>}
                                    </div>
                                </div>
                                <div className="d-flex">
                                    {this.props.username === this.props.commentary.username &&
                                        <>
                                            <img src={edit} className="pr-2" data-toggle="tooltip" data-placement="top" title="Delete" id={this.props.commentary._id} onClick={this.openInput} style={{ height: '4vh' }}></img>
                                            <img src={trash} className="pr-2" data-toggle="tooltip" data-placement="top" title="Modify" id={this.props.commentary._id} onClick={this.deleteCommentary} style={{ height: '4vh' }}></img>
                                        </>
                                    }
                                </div>
                            </div>

                        </div>
                    </>


                }
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


export default connect(mapStateToProps, mapDispatchToProps)(CommentNews)