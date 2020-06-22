import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BsCardText } from "react-icons/bs";

export default function Learn() {
    return (
        <>
        <Helmet>
            <title>Learn Page</title>
        </Helmet>
        <div className="main-page">
        <h1>Study Mode</h1>
         <main className="main-content">
                <div className="controls">
                    <h2><span className="icon"><BsCardText /></span><span className="card">Flashcards</span></h2>
                    <div className="progress">
                        <div className="progress-bar"></div>
                        <div className="progress-text">
                        <span className="progress-word">progress</span> <span className="progress-number">1/17</span>
                        </div>
                    </div>
                    
                    <p>
                        <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span>
                    </p>
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
