import React from 'react'
import { Helmet } from 'react-helmet';

export default function Learn() {
    return (
        <>
        <Helmet>
            <title>Learn Page</title>
        </Helmet>
         <main className="main-page">
                <h1>Study Mode</h1>
                <div className="controls">
                    <h1>flashcards</h1>
                    <p>progress 1/17</p>
                    <button>quit X</button>
                </div>

                <div className="flashcard-container">
                    <div className="flashcard">
                        <p>Seletct a lesson to learn</p>
                    </div>

                 </div>
         </main>
        </>
        
    )
}
