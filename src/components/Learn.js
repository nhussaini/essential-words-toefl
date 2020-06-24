import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BsCardText } from "react-icons/bs";
//import Select from 'react-select'

import words from '../../src/words.json';





// const options = [
//     {label:'Lesson 1', value: 'Lesson 1'},
//     {label:'Lesson 2', value: 'Lesson 2'},
//     {label:'Lesson 3', value: 'Lesson 3'}
// ];

class Learn extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            lesson: words,
            whichLesson:[],
            words:[],
            currentWord:null,
            nextWord: null,
            prevWord:null,
            numberOfWords:0
        };
      }
      componentDidMount(){
          const whichLesson=words.map(word=> word);
          this.setState({
              whichLesson: whichLesson
          });

      }

      handleChange =(e)=>{
          e.preventDefault();
         console.log("selected option", e.target.value);
        // const lesson=e.target.value;
         if(words.lesson===e.target.value){
             console.log("yes equal");
         }

          const newWords= words;
          let selectedLesson=[];
          console.log(newWords[0].lesson);
          for(let i=0; i<newWords.length; i++){
              if(newWords[i].lesson === e.target.value){
                  selectedLesson=newWords[i];
              }

          }
          console.log("hopefully!", selectedLesson)
         console.log(newWords);
         

         // const vocabulary = newWords.vocabulary;
         // const currentWord = vocabulary[0].word;
        
        //   this.setState({
        //       words: vocabulary,
        //       currentWord: currentWord,
             
        //   })
        
          

      }
   
    render(){
    //console.log(this.state);
   // console.log(this.state.whichLesson)
    return (
        <>
        <Helmet>
            <title>Learn Page</title>
        </Helmet>
        <div className="main-page">
        <div className="input-field col s12">

  </div>
        <h4>Study Mode</h4>
         <main className="main-content">
  
                <div className="controls-container">
                    <h5><span className="flashcard-icon"><BsCardText /></span><span className="flashcard-name">Flashcards</span></h5>              

                    <div className="progress-container">
                        <div className="progress-bar"></div>
                        <div className="progress-text">
                        <span className="progress-word">progress</span> <span className="progress-number">1/17</span>
                        </div>
                    </div>
                    <div className=" input-field col s12 select-container">
                        {/* <Select
                         options={this.state.whichLesson.map(lesson=>{
                             return  
                         })}
                         className="select-lesson"
                         placeholder="Select a lesson"
                         onChange={this.handleChange}
                         /> */}

                         <select className="browser-default" onChange={this.handleChange}>
                            <option value="">Choose a Lesson</option>
                            {this.state.whichLesson.map(lesson =>{
                                return <option value={lesson.lesson} key={Math.random()*10}>{lesson.lesson}</option>
                            })}
                        </select>

      
 


                    </div>
                    
                    <div className="quit">
                    <Link to="/" className="quit-button">quit</Link>
                    </div>
                    
                </div>

                <div className="flashcard-container">
                    <div className="flashcard">{
                        this.state.currentWord ? <p>{this.state.currentWord}</p>: <p> Choose a lesson to learn</p>
                        
                    }
                        <p></p>
                    </div>
                    <div className="flashcards-buttons">
                        <Link to="#" className="waves-effect waves-light btn prev-button">previous</Link>
                        <Link to="#" className="waves-effect waves-light btn next-button">next</Link>
                        
                    </div>

                 </div>
         </main>
         </div>
        </>
        
    )
}
}

export default Learn;