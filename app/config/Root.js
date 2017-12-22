import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Sample from '../components/pages/Sample/Sample';

const Root = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={ Home } />
        <Route path="/sample" component={ Sample } />
      </div>
    </Router>
  );
};

export default Root;

