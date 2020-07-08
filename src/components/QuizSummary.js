import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { AiOutlineCheck } from "react-icons/ai";


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
                <div>
                    <div><AiOutlineCheck /></div>
                    <h4>Quiz Result</h4>
                    <div className="container">
                        <h4>{remark}</h4>
                        <h2>Your score: {this.state.score.toFixed(0)}&#37;</h2>
                        <span className="left stats">Lesson: </span>
                        <span className="right">{this.state.lesson}</span><br />

                        <span className="left stats">Number of words: </span>
                        <span className="right">17</span><br />

                        <span className="left stats">Number of correct answers: </span>
                        <span className="right">{this.state.numOfCorrectAnswer}</span><br />

                        <span className="left stats">Number of wrong answers: </span>
                        <span className="right">{this.state.numOfWrongAnswer}</span>
                    </div>
                </div>
            );
        }
        else{
            stats = (
                <p>Stats is not available</p>
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