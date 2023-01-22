import { Component } from "react";

export class Header extends Component{
    render(props){
        return(
            <>
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </>
        );
    }
}

// export function Header(props) {
//     return(
//         <>
//             <h1>{props.heading}</h1>
//             <p>{props.text}</p>
//         </>
//     );
// }