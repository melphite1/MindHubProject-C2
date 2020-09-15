import React from 'react';
import newsActions from '../redux/actions/newsActions'
import { connect } from "react-redux"
import Comment from './Comment'

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
    }
    deleteCommentary = async (e) => {
        const idCommentary = e.target.id
        await this.props.deleteCommentary(idCommentary)

    }
    openInput = async (e) => {
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

                <>
                    <div>
                        <h3 className="text-light">{this.props.username}</h3>
                        {this.state.sendModify ? <><input onChange={this.readCommentary} id={this.props._id} placeholder={this.props.content} /> <button onClick={this.modifyCommentary}>send</button></> : <p className="text-light">{this.props.content}</p>}
                        {this.props.username === this.propscommentary.username &&
                            <>
                                <p className="text-light" id={this.props._id} onClick={this.deleteCommentary}>borrar</p>
                                <p className="text-light" id={this.props._id} onClick={this.openInput}>modificar</p>
                            </>}
                    </div>


                    <input onChange={this.readCommentary} id={this.props.news._id}></input>
                    <button onClick={this.sendCommentary}>send</button>


                </>
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