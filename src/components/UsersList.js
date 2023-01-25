import { Component } from "react";
import axios from "axios";
export class UsersList extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    async componentDidMount() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        this.setState({ users: response.data });
    }
    render() {
        return (
            <>
                <h1>List of Users</h1>
                <table border={1} cellSpacing="0" cellPadding={10}>
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
                            this.state.users.map((u) => {
                                return (
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
                </table>
            </>
        );
    }
}