import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import { AiFillEdit } from "react-icons/ai";


class Quiz extends Component{

    render(){
        return(
            <>
                <Helmet>
                    <title>Quiz Page</title>
                </Helmet>
                 <div className="quiz-main-page">
                  <h4>Quiz Mode</h4>

                  <main className="quiz-main-content">

                    <div className="quiz-controls-container">
                      <h5><span className="flashcard-icon"><AiFillEdit /></span><span className="flashcard-name">Quiz</span></h5>
                      <div className="progress-container">
                        <div className="">
                        <progress max="16" value="5" style={{width: "90%", height:"30px"}}></progress>
                        </div>
                        <div className="progress-text">
                        <span className="progress-word">progress</span> <span className="progress-number">0/17</span>
                        </div>
                      </div>
                      <div className=" input-field col s12 select-container">
                         <select className="browser-default">
                            <option value="">Choose a Lesson</option>
                            <option value="lesson 1"> Lesson 1</option>
                         </select>
                      </div>
                      <div className="quit">
                         <a class="waves-effect waves-light btn quit-button" href="/">quit</a>
                      </div>
                    </div>


                    <div className="word-container">
                        <div className="word">
                        <p className="question">abroad</p>
                        </div>
                        
                        <div className=" row answer-container">
                            <div className="col s12 m6  answer"><p>overseas</p></div>
                            <div className="col s12 m6  answer"><p>on the plane</p></div>
                            <div className="col s12 m6  answer"><p>in the city</p></div>
                            <div className="col s12 m6  answer"><p>far</p></div>
                        </div>
                    </div>

                    

                  </main>
                </div>
            </>
           
        );
    }
}

export default Quiz