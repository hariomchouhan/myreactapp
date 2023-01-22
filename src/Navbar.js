import { Component } from "react";

export class Navbar extends Component {
    render() {
        return (
            <>
                <div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
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