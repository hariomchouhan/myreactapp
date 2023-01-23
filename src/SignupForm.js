import { Component } from "react";

export class SignupForm extends Component{
    constructor(){
        super();
        this.state = {
            formData: {}
        }
    }
    handleChange = (e)=>{
        // console.log(e.target.value);
        this.setState({formData: {...this.state.formData, [e.target.name]: e.target.value}})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.formData);
    }
    render(){
        return(
            <>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" type="text" placeholder="Enter Name" onChange={this.handleChange} />
                    <br /><br />
                    <input name="password" type="password" placeholder="Enter Password" onChange={this.handleChange} />
                    <br /><br />
                    <input name="phone" type="text" placeholder="Enter Phone" onChange={this.handleChange} />
                    <br /><br />
                    <input name="email" type="email" placeholder="Enter Email" onChange={this.handleChange} />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}