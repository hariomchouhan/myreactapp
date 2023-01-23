import axios from "axios";
import { Component } from "react";

export class UsersData extends Component{
    constructor(){
        super();
        this.state = {
            users: [],
            isFetched: false
        }
    }
    handleFetchClick=async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        this.setState({users: response.data, isFetched: true});
    }
    render(){
        return(
            <>
                <h1>List of users</h1>
                <button onClick={this.handleFetchClick}>Fetch Data</button>
                {
                    this.state.isFetched?<table border={1} cellSpacing="0" cellPadding={10}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((u)=>{
                                return(
                                    <tr>
                                        <td>{u.id}</td>
                                        <td>{u.name}</td>
                                        <td>{u.username}</td>
                                        <td>{u.email}</td>
                                        <td>{u.phone}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>:null
                }
            </>
        );
    }
}