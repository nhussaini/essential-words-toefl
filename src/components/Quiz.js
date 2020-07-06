import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import { AiFillEdit } from "react-icons/ai";
import words from '../../src/words.json';


class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {
            whichLesson : [],
            currentLesson : [],
            currentWord : null,
            optionA : null,
            optionB : null,
            optionC : null,
            optionD : null,
            progress : 0
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

        const currentWord= selectedLesson.vocabulary[0].word;
        const optionA = selectedLesson.vocabulary[0].optionA;
        const optionB = selectedLesson.vocabulary[0].optionB;
        const optionC = selectedLesson.vocabulary[0].optionC;
        const optionD = selectedLesson.vocabulary[0].optionD;

        console.log("selected lesson is:", selectedLesson);
        this.setState({
            currentLesson : selectedLesson,
            currentWord : currentWord,
            optionA : optionA,
            optionB : optionB,
            optionC : optionC,
            optionD : optionD
        })
    }

    handleNext =(e)=>{
        console.log("next word");
        console.log(e.target.value);

        const oldWord=this.state.currentWord;
        let index=this.state.currentLesson.vocabulary.findIndex(obj=>obj.word===oldWord);
        const currentWord = this.state.currentLesson.vocabulary[index+1];
        const nextWord = this.state.currentLesson.vocabulary[index+2];
        console.log("this is the current word: ", currentWord);
        console.log("this is the next word", nextWord);

        this.setState({
            currentWord : currentWord.word,
            currentWordMeaning : currentWord.correctAnswer,
            nextWord : nextWord,
            optionA : currentWord.optionA,
            optionB : currentWord.optionB,
            optionC : currentWord.optionC,
            optionD : currentWord.optionD,
            progress : this.state.progress + 1,


        });

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
                        <progress max="16" value={this.state.progress} style={{width: "90%", height:"30px"}}></progress>
                        </div>
                        <div className="progress-text">
                        <span className="progress-word">progress</span> <span className="progress-number">{this.state.progress}/17</span>
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
                            <div className="col s12 m6  answer"><p onClick={this.handleNext}>{this.state.optionA}</p></div>
                            <div className="col s12 m6  answer"><p onClick={this.handleNext}>{this.state.optionB}</p></div>
                            <div className="col s12 m6  answer"><p onClick={this.handleNext}>{this.state.optionC}</p></div>
                            <div className="col s12 m6  answer"><p onClick={this.handleNext}>{this.state.optionD}</p></div>
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