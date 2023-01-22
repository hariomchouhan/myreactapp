import { Component } from "react";

export class ScoreBoard extends Component{
    constructor(){
        super();
        this.state = {
            score: 0
        }
    }
    render(){
        return(
            <>
                <h1>{this.state.score}</h1>
                <input type="button" value="+" />
                <input type="button" value="-" />
            </>
        );
    }
}