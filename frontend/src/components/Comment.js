import React from 'react'
import gamesActions from '../redux/actions/gamesActions'
import trash from '../images/trash.png'
import edit from '../images/edit.png'
import { connect } from "react-redux"

class Game extends React.Component {
    state = {
        commentary: '',
        idGame: '',
        sendModify: false,
    }
    componentDidMount() {
        this.props.getCommentaries()
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
        console.log(this.state.id)
        await this.props.modifyCommentary(this.state.commentary, this.state.idGame)
    }
    render() {
        return (



            <>
                {this.props.commentaries.map(commentary => {
                    return (
                        this.props.game._id === commentary.idGame &&
                        <>
                            <div className="col-12 mx-auto mt-5">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <a className="comment-pic user-action text-light"> <img src={commentary.userPic} className="avatar" alt="Avatar" /><b className="caret"></b></a>
                                        <div>
                                            <h6 className="text-light">{commentary.username}</h6>
                                            {this.state.sendModify && commentary.username === this.props.username ? <><input onChange={this.readCommentary} id={commentary._id} placeholder={commentary.content} onKeyUp={this.escape} /> <p>escape to cancel • enter to save</p></> : <p className="text-light">{commentary.content}</p>}
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        {this.props.username === commentary.username &&
                                            <>
                                                <img src={edit} className="pr-2" data-toggle="tooltip" data-placement="top" title="Delete" id={commentary._id} onClick={this.openInput} style={{ height: '3vh', width: '2vw' }}></img>
                                                <img src={trash} className="pr-2" data-toggle="tooltip" data-placement="top" title="Modify" id={commentary._id} onClick={this.deleteCommentary} style={{ height: '3vh', width: '2vw' }}></img>
                                            </>}
                                    </div>
                                </div>
                            </div>
                        </>)
                })}
                <div className="p-5">
                    <input onChange={this.readCommentary} placeholder="Send a comment" className="sendComment col-12" id={this.props.game._id} value={this.state.commentary} onKeyUp={this.enter}></input>
                </div>

            </>

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