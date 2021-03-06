import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class TableRowComment extends Component {

    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
    }

    deleteComment() {
        axios.delete('http://localhost:4000/comments/delete-comment/' + this.props.obj._id)
            .then((res) => {
                console.log('Comment successfully deleted!')
            }).catch((error) => {
            console.log(error)

        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.message}</td>
                <td>
                    <Link className="edit-link" to={"/edit-comment/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteComment } size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}
