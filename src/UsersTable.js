import axios from "axios";
import { useEffect, useState } from "react";

export function UsersTable() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async ()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        setUsers(response.data);
    }
    useEffect(()=>{
        fetchUsers();
    },[]);

    return (
        <>
            <h1>List of users</h1>
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
                        users.map((u) => {
                            return (
                                <tr>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.username}</td>
                                    <td>{u.email}</td>
                                    <td>{u.phone}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}