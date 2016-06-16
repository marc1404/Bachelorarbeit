import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import Contacts from './Contacts';
import Contact from './Contact';

injectTapEventPlugin();

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/contacts"/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/contact/:id" component={Contact}/>
        </Route>
    </Router>,
    document.getElementById('app')
);