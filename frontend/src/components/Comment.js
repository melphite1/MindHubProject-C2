import React from 'react'
import gamesActions from '../redux/actions/gamesActions'
import trash from '../images/trash.png'
import edit from '../images/edit.png'
import { connect } from "react-redux"

class Comment extends React.Component {
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
        } else if (e.keyCode === 13) {
            this.modifyCommentary()
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
    openInput = () => {
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




            this.props.game._id === this.props.commentary.idGame &&
            <>
                <div className="col-12 mx-auto mt-4">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <a className="comment-pic user-action text-light align-bottom"> <div style={{backgroundImage:`url(${this.props.commentary.userPic})`, backgroundSize:'cover', width:'5vh', height:'5vh',  margin:'0vh 1vh', borderRadius:"50%", border:'4px solid #233347'}} className="avatar" alt="Avatar" ></div><b className="caret"></b></a>
                            <div >
                                <h5 className="font-weight-bold text-light">{this.props.commentary.username}</h5>
                                {this.state.sendModify && this.props.commentary.username === this.props.username ? <><input onChange={this.readCommentary} id={this.props.commentary._id} placeholder={this.props.commentary.content} onKeyUp={this.escape} /> <h5>escape to cancel • enter to save</h5></> : <h5 className="text-light">{this.props.commentary.content}</h5>}
                            </div>
                        </div>
                        <div className="d-flex">
                            {this.props.username === this.props.commentary.username &&
                                <>
                                    <img src={edit} alt="edit" className="pr-2" data-toggle="tooltip" data-placement="top" title="Delete" id={this.props.commentary._id} onClick={this.openInput} style={{ height: '3vh', width: '2vw' }}></img>
                                    <img src={trash} alt="trash" className="pr-2" data-toggle="tooltip" data-placement="top" title="Modify" id={this.props.commentary._id} onClick={this.deleteCommentary} style={{ height: '3vh', width: '2vw' }}></img>
                                </>}
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
export default connect(mapStateToProps, mapDispatchToProps)(Comment)