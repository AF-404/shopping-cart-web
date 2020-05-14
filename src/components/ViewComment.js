import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableRowComment from "./TableRowComment";


export default class ViewComment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/comments/')
            .then(res => {
                this.setState({
                    comments: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.comments.map((res, i) => {
            return <TableRowComment obj={res} key={i} />;
        });
    }


    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
                <thead className="thead-dark">
                <tr>
                    <th>Message</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.DataTable()}
                </tbody>
            </Table>
        </div>);
    }
}
