import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// import { Main, Weather, About, Examples } from './components'; // need to create index.js and refactor
import Main from './components/Main';
import About from './components/About';
import Weather from './components/Weather';
import Examples from './components/Examples';

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
            <IndexRoute component={Weather} />        
        </Route>
    </Router>,
    document.getElementById('app')
);
