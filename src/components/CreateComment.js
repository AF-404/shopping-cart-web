import React, {Component} from "react";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Products from "./Products";
// import StarRating from "./StarRating";

export default class CreateStudent extends Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onStarChange=this.onStarChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            message: '',
            rating:''
        }
    }

    onChangeMessage(e) {
        this.setState({message: e.target.value})
    }

    onStarChange(e){
        this.setState({rating:e.target.value})
    }


    onSubmit(e) {
        e.preventDefault()

        const commentObject = {
            message: this.state.message,
            rating: this.state.rating
        };

        axios.post('http://localhost:4000/comments/create-comment', commentObject)
            .then(res => console.log(res.data));

        this.setState({
            message: '',
            rating:''
        });
        window.location.reload();

    }
///////////////////////////////Rating///////////////////
//     handleChange = (event) => {
//
//
//
//         this.setState({
//             selectValue: event.target.value
//         }, () => {
//             console.log("selected value ->" + this.state.selectValue);
//         });
//
//     };
/////////////////////////////////////////////////////
    render() {
        return (<div className="container">
                <div style={{display:"flex"}}>
                    <Products title={"Asus"} price={"150000"}/>
                    <Products title={"Asus"} price={"150000"}/>
                    <Products title={"Asus"} price={"150000"}/>
                    <Products title={"Asus"} price={"150000"}/>

                </div>
            <form onSubmit={this.onSubmit}>
                <div className={"col-md-6 offset-md-3"}>
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
                    <br/>

                    <div>
                        <label>Rating out of 5 </label>
                        {/*<StarRating/>*/}

                        <select defaultValue={this.state.rating}
                                onChange={this.onStarChange}>
                            <option value="1">1 Star</option>
                            <option value="2">2 Star</option>
                            <option value="3">3 Star</option>
                            <option value="4">4 Star</option>
                            <option value="5">5 Star</option>
                        </select>


                    </div>


                <button className={"btn btn-block btn-primary mt-2"}> Post</button>
                </div>
            </form>


        </div>


        );
    }
}
