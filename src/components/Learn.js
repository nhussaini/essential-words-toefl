import React from 'react'
import { Helmet } from 'react-helmet';

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
                <span className="mdi mdi-card-text"></span>
                    <h2><span><BsCardText /></span>Flashcards</h2>
                    <p>progress 1/17</p>
                    <p>
                        <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span>
                    </p>
                    <button>quit X</button>
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
