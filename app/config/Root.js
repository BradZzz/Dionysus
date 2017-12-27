import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Sample from '../components/pages/Sample/Sample';
import Main from '../components/pages/Main/Main';

const Root = () => {
  return (
    <Router>
      <div>
        <Route path="/main" component={ Main } />
        <Route path="/" component={ Home } />
        <Route path="/sample" component={ Sample } />
      </div>
    </Router>
  );
};

export default Root;

