import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from './Footer';


const Home=()=> (
    <>
        <Helmet>
            <title>Home</title>
    
            
        </Helmet>
        <div id="home">
            <section>
                <h1 className="first">essential</h1>
                <h1 className="first">words</h1>
                <h1 className="first">for the</h1>
                <h1 className="second">toefl</h1>
                <div className="choice">
                    <Link to="/learn" className="play-button learn">learn</Link>
                    <Link to="/quiz" className="play-button quiz">quiz</Link>
                </div>
            </section>
            
        </div>
        <Footer />
    </>
    );

export default Home;