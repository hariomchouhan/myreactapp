import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

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
            <Container className="mx-5 text-center">
            <h1>{score}</h1>
            <input type="button" className="btn btn-success mx-3" value="+" onClick={handlePlusClick} />
            <input type="button" className="btn btn-danger" value="-" onClick={handleMinusClick} />
            </Container>
            <Container>
                <Row>
                    <Col lg={4}>
                        <h2>This is heading</h2>
                        <p>This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para.  This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. </p>
                    </Col>
                    <Col lg={4}>
                        <h2>This is heading</h2>
                        <p>This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para.  This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. </p>
                    </Col>
                    <Col lg={4}>
                        <h2>This is heading</h2>
                        <p>This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para.  This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. This is dummy para. </p>
                    </Col>
                </Row>
            </Container>
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
//     handleMinusClick = ()=>{
//         this.setState({score:this.state.score-1});
//     }
//     render(){
//         return(
//             <>
//                 <h1>{this.state.score}</h1>
//                 <input type="button" value="+" onClick={this.handlePlusClick} />
//                 <input type="button" value="-" onClick={this.handleMinusClick} />
//             </>
//         );
//     }
// }