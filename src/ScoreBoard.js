import { useState } from "react";

export function ScoreBoard() {
    const [score, setScore]=useState(0);
    const handlePlusClick=()=>{
        setScore(score+4);
    }
    const handleMinusClick=()=>{
        setScore(score-1);
    }
    return(
        <>
            <h1>{score}</h1>
            <input type="button" value="+" onClick={handlePlusClick} />
            <input type="button" value="-" onClick={handleMinusClick} />
        </>
    );
}

// import { Component } from "react";

// export class ScoreBoard extends Component{
//     constructor(){
//         super();
//         this.state = {
//             score: 0
//         }
//     }
//     handlePlusClick = ()=>{
//         this.setState({score:this.state.score+4});
//     }
//     handelMinusClick = ()=>{
//         this.setState({score:this.state.score-1});
//     }
//     render(){
//         return(
//             <>
//                 <h1>{this.state.score}</h1>
//                 <input type="button" value="+" onClick={this.handlePlusClick} />
//                 <input type="button" value="-" onClick={this.handelMinusClick} />
//             </>
//         );
//     }
// }