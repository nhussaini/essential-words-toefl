import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import { AiFillEdit } from "react-icons/ai";
import words from '../../src/words.json';


class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {
            whichLesson : [],
            currentWord : null
        };
    }
    componentDidMount(){
        const whichLesson=words.map(word=> word);
        this.setState({
            whichLesson: whichLesson
        },
        console.log("from state:", this.state.whichLesson));

    }

    handleSelect= (e)=>{

        const newWords = words;
        let selectedLesson = [];
        console.log("new words are: ", newWords );

        for(let i=0; i<newWords.length; i++){
            if(newWords[i].lesson === e.target.value){
                selectedLesson = newWords[i];
            }

        }
        console.log("selected lesson is:", selectedLesson);
        this.setState({
            currentWord : 'abroad'
        })
    }



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
                         <select className="browser-default" onChange={this.handleSelect}>
                            <option value="">Choose a Lesson</option>
                            {this.state.whichLesson.map(lesson=>{
                                return <option value={lesson.lesson} key={lesson.lesson}>{lesson.lesson}</option>
                            })}
                            
                         </select>
                      </div>
                      <div className="quit">
                         <a className="waves-effect waves-light btn quit-button" href="/">quit</a>
                      </div>
                    </div>


                    <div className="word-container">
                    {this.state.currentWord ?
                    <>
                        <div className="word">
                        <p className="current-word">{this.state.currentWord}</p>
                        </div>
                        
                        <div className=" row answer-container">
                            <div className="col s12 m6  answer"><p>overseas</p></div>
                            <div className="col s12 m6  answer"><p>on the plane</p></div>
                            <div className="col s12 m6  answer"><p>in the city</p></div>
                            <div className="col s12 m6  answer"><p>far</p></div>
                        </div>
                        </>
                        : <p className="choose-lesson"> Choose a lesson to start the Quiz</p>}
                    </div>

                    

                  </main>
                </div>
            </>
           
        );
    }
}

export default Quiz