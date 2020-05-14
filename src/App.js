import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import CreateComment from "./components/CreateComment";
import EditComment from "./components/EditComment";
import ViewComment from "./components/ViewComment";

function App() {
    return (<Router>
        <div className="App">


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Online Shopping Cart</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Nav>
                                <Link to={"/create-comment"} className="nav-link">
                                    Create Comment
                                </Link>
                            </Nav>
                        </li>

                        <li className="nav-item">
                            <Nav>
                                <Link to={"/comment-list"} className="nav-link">
                                    View Comments
                                </Link>
                            </Nav>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

                    </form>
                </div>
            </nav>

            <Container>
                <Row>
                    <Col md={12}>
                        <div>
                            <Switch>
                                <Route exact path='/' component={CreateComment} />
                                <Route path="/create-comment" component={CreateComment} />
                                <Route path="/edit-comment/:id" component={EditComment} />
                                <Route path="/comment-list" component={ViewComment} />

                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Router>);

}

export default App;
