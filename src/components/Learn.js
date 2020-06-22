import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BsCardText } from "react-icons/bs";
import Select from 'react-select'





const options = [
    {label:'Lesson 1', value: 'Lesson 1'},
    {label:'Lesson 2', value: 'Lesson 2'},
    {label:'Lesson 3', value: 'Lesson 3'}
];

class Learn extends Component  {
 
   
    render(){
    return (
        <>
        <Helmet>
            <title>Learn Page</title>
        </Helmet>
        <div className="main-page">
        <div className="input-field col s12">

  </div>
        <h1>Study Mode</h1>
         <main className="main-content">
                <div className="controls-container">
                    <h5><span className="flashcard-icon"><BsCardText /></span><span className="flashcard-name">Flashcards</span></h5>              

                    <div className="progress-container">
                        <div className="progress-bar"></div>
                        <div className="progress-text">
                        <span className="progress-word">progress</span> <span className="progress-number">1/17</span>
                        </div>
                    </div>
                    <div className="select-container">
                        <Select
                         options={options}
                         className="select-lesson"
                         placeholder="Select a lesson"
                         />
                    </div>
                    
                    <div className="quit">
                    <Link to="/" className="quit-button">quit</Link>
                    </div>
                    
                </div>

                <div className="flashcard-container">
                    <div className="flashcard">
                        <p>Seletct a lesson to learn</p>
                    </div>
                    <div className="flashcards-button">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>

                 </div>
         </main>
         </div>
        </>
        
    )
}
}

export default Learn;