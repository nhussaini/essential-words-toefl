import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home=()=> (
    <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <div id="home">
            <section>
                <h1>essential words for the toefl</h1>
                <div className="choice">
                    <Link to="/learn">learn</Link>
                    <Link to="/quiz">quiz</Link>
                </div>
            </section>
        </div>
    </>
    );

export default Home;