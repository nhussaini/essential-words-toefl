import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import { AiFillEdit } from "react-icons/ai";
import words from '../../src/words.json';
import M from 'materialize-css';
import correctAnswerSound from '../assets/audio/Correct-answer.mp3';
import incorrectAnswerSound from '../assets/audio/Fail-trombone.mp3';


class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {
            whichLesson : [],
            currentLesson : [],
            currentWord : null,
            nextWord : null,
            optionA : null,
            optionB : null,
            optionC : null,
            optionD : null,
            correctAnswer: null,
            NumOfCorrectAnswer : 0,
            NumOfWrongAnswer : 0,
            progress : 0
        };

        this.correctSound = React.createRef();
        this.wrongSound = React.createRef();
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
        const correctAnswer = selectedLesson.vocabulary[0].correctAnswer;

        //console.log("selected lesson is:", selectedLesson);
        
        this.setState({
            currentLesson : selectedLesson,
            currentWord : currentWord,
            progress : 0,
            NumOfCorrectAnswer: 0,
            NumOfWrongAnswer : 0,
            optionA : optionA,
            optionB : optionB,
            optionC : optionC,
            optionD : optionD,
            correctAnswer : correctAnswer
        })
    }

    handleNext =(e)=>{
        //console.log("next word");
        //console.log("you selected: ", e.target.innerHTML);
        //console.log("the correct answer is: ", this.state.currentWord.correctAnswer);
        // M.toast({
        //     html: 'option clicked!'
        // })
        if(this.state.nextWord === undefined){
            if(e.target.innerHTML === this.state.correctAnswer){
                setTimeout(()=>{
                    //document.getElementById('correct-answer').play();
                    this.correctSound.current.play();
                },500)
                
                M.toast({
                    html: 'Correct!',
                    classes: 'toast-valid rounded',
                    displayLength: 1500
                });
                this.setState(prevState =>({
                    NumOfCorrectAnswer : prevState.NumOfCorrectAnswer + 1
                }), ()=>{
                    this.endQuiz();
                })
            }else{
                setTimeout(()=>{
                    //document.getElementById('incorrect-answer').play();
                    this.wrongSound.current.play();
                },500)
                
                M.toast({
                    
                    html: 'Incorrect!',
                    classes: 'toast-invalid rounded',
                    displayLength: 1500
                });
                this.setState(prevState =>({
                    NumOfWrongAnswer : prevState.NumOfWrongAnswer + 1
                }),()=>{
                    this.endQuiz();
                })
            }
            
        }
        else{
        if(e.target.innerHTML === this.state.correctAnswer){
            setTimeout(()=>{
                //document.getElementById('correct-answer').play();
                this.correctSound.current.play();
            },500)
            
            M.toast({
                html: 'Correct!',
                classes: 'toast-valid rounded',
                displayLength: 1500
            });
            this.setState(prevState =>({
                NumOfCorrectAnswer : prevState.NumOfCorrectAnswer + 1
            }))
        }else{
            setTimeout(()=>{
                //document.getElementById('incorrect-answer').play();
                this.wrongSound.current.play();
            },500)
            
            M.toast({
                
                html: 'Incorrect!',
                classes: 'toast-invalid rounded',
                displayLength: 1500
            });
            this.setState(prevState =>({
                NumOfWrongAnswer : prevState.NumOfWrongAnswer + 1
            }))
        }

        const oldWord=this.state.currentWord;
        let index=this.state.currentLesson.vocabulary.findIndex(obj=>obj.word===oldWord);
        const currentWord = this.state.currentLesson.vocabulary[index+1];
        const nextWord = this.state.currentLesson.vocabulary[index+2];
       // console.log("this is the current word: ", currentWord);
        //console.log("this is the next word", nextWord);

        this.setState({
            currentWord : currentWord.word,
            currentWordMeaning : currentWord.correctAnswer,
            correctAnswer : currentWord.correctAnswer,
            nextWord : nextWord,
            optionA : currentWord.optionA,
            optionB : currentWord.optionB,
            optionC : currentWord.optionC,
            optionD : currentWord.optionD,
            progress : this.state.progress + 1,


        });
        
    }     

    }

    endQuiz =()=>{
        //alert('Quiz has ended!');

        const quizStats ={
            NumOfCorrectAnswer : this.state.NumOfCorrectAnswer,
            NumOfWrongAnswer : this.state.NumOfWrongAnswer,
            Lesson : this.state.currentLesson.lesson
        };
        console.log(quizStats);

        setTimeout(()=>{
            this.props.history.push('/quiz/quizsummary', quizStats);
        },2000)
        // this.props.history.push('/');
    }



    render(){
        return(
            <>
                <Helmet>
                    <title>Quiz Page</title>
                </Helmet>
                 <div className="quiz-main-page">
                 <audio ref={this.correctSound} src={correctAnswerSound}></audio>
                 <audio ref={this.wrongSound} src={incorrectAnswerSound}></audio>
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