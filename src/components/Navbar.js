import { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <>
                <div>
                    <ul>
                        <li><Link to='/'>ScoreBoard</Link></li>
                        <li><Link to='/signup'>Sign Up</Link><a href="/"></a></li>
                        <li><Link to='/users-data'>Users Data on click</Link></li>
                        <li><Link to='/users-list'>Users List</Link></li>
                        <li><Link to='/users-table'>Users Table</Link></li>
                    </ul>
                </div>
            </>
        );
    }
}





// export function Navbar() {
//     return (
//         <>
//             <div>
//                 <ul>
//                     <li><a href="#">Home</a></li>
//                     <li><a href="#">About</a></li>
//                     <li><a href="#">Services</a></li>
//                     <li><a href="#">Contact</a></li>
//                 </ul>
//             </div>
//         </>
//     )
// }