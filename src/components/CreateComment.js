import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            message: ''
        }
    }

    onChangeMessage(e) {
        this.setState({message: e.target.value})
    }


    onSubmit(e) {
        e.preventDefault()

        const commentObject = {
            message: this.state.message
        };

        axios.post('http://localhost:4000/comments/create-comment', commentObject)
            .then(res => console.log(res.data));

        this.setState({
            message: ''
        });
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
                <button className={"btn btn-block btn-primary mt-2"}> Post</button>
            </form>
        </div>);
    }
}
