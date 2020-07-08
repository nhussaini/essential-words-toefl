import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BsAwardFill } from "react-icons/bs";



class QuizSummary extends Component{
    constructor(props){
        super(props);
        this.state = {
            lesson : null,
            numOfCorrectAnswer : 0,
            numOfWrongAnswer : 0,
            score : 0
        }
    }

    componentDidMount(){
        console.log("quiz satats: ",this.props.location.state);
        const { state } = this.props.location;
        this.setState({
            numOfCorrectAnswer : state.NumOfCorrectAnswer,
            numOfWrongAnswer : state.NumOfWrongAnswer,
            lesson : state.Lesson,
            score : (state.NumOfCorrectAnswer/17) *100
        },()=>{
        console.log("state of quiz summary: ", this.state)
             }
        );
        
    }
    render (){
        const { state } = this.props.location;
        const { score } = this.state;
        let stats, remark;

        if(score <= 30){
            remark = 'You need to practice more!';
        }else if(score > 30 && score <= 50){
            remark = 'Better luck next time!';
        }else if(score <= 70 && score > 50){
            remark = 'You can still do better!';
        }else if(score >= 71 && score <= 84){
            remark = 'You did great!';
        }else{
            remark = 'You have aced this lesson!';
        }

        if(state !== undefined){
            stats = (
                <div className="summary-main">
                    <div className="tick-mark"><BsAwardFill /></div>
                    <h4 style={{textAlign:"center"}}>Quiz Result</h4>
                    <div className="container summary-container">
                        <h4 className="remark">{remark}</h4>
                        <h2 style={{textAlign:"center", color:"#84c547"}}>Your Score : {this.state.score.toFixed(0)}&#37;</h2>
                        <span className="left stats">Lesson: </span>
                        <span className="right stats">{this.state.lesson}</span><br />

                        <span className="left stats">Number of words: </span>
                        <span className="right stats">17</span><br />

                        <span className="left stats">Number of correct answers: </span>
                        <span className="right stats">{this.state.numOfCorrectAnswer}</span><br />

                        <span className="left stats">Number of wrong answers: </span>
                        <span className="right stats">{this.state.numOfWrongAnswer}</span><br />

                        
                    </div>
                    <div className="summary-button">
                            <button className="waves-effect waves-light btn back-home-button">Back to Home</button>
                            <button className="waves-effect waves-light btn another-quiz-button">Another Quiz</button>

                    </div>
                </div>
            );
        }
        else{
            stats = (
                <div className="container">
                    <h1>No Quiz Result Available!</h1>
                    <div className="no-result-button">
                        <button className="waves-effect waves-light btn">Back to Home</button>
                        <button className="waves-effect waves-light btn">Take a Quiz</button>
                    </div>
                </div>
            );
        }

        
        return (
            <>
                <Helmet>
                    <title>Quiz Summary</title>
                </Helmet>
                <div>
                {stats}
            </div>
            </>
           
        );
    }
}


export default QuizSummary