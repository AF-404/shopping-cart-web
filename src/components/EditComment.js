import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditComment extends Component {

    constructor(props) {
        super(props)

        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/comments/edit-comment/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    message: res.data.message
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeMessage(e) {
        this.setState({ message: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const commentObject = {
            message: this.state.message
        };

        axios.put('http://localhost:4000/comments/update-comment/' + this.props.match.params.id, commentObject)
            .then((res) => {
                console.log(res.data)
                console.log('Student successfully updated')
            }).catch((error) => {
            console.log(error)
        })

        // Redirect to Student List
        this.props.history.push('/comment-list')
    }


    render() {
        return (<div className="container">
            <form onSubmit={this.onSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary.text-white">
                            <i className="fas fa-book"/>
                        </div>
                    </div>
                    <input type="text" className="form-control text-capitalize text-center" required="required"
                           placeholder="Enter your Comment..." value={this.state.message}
                           onChange={this.onChangeMessage}/>
                </div>
                <button className={"btn btn-block btn-primary mt-2"}> Update Post</button>
            </form>
        </div>);
    }
}
