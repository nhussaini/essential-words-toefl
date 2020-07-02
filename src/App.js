import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import Learn from './components/Learn';
import Quiz from './components/Quiz';




function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/learn" component={Learn} />
      <Route path="/quiz" component={Quiz}/>
    </Router>
  );
}

export default App;
