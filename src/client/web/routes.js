/**
 * Created by liujinhe on 17/2/22.
 */

import React from 'react';
import layout from './pages/layout.js'
import home from './pages/home.js'
import users from './pages/users.js'


import {Router,Route,IndexRoute,browserHistory} from 'react-router'

import configureStore from './store';

var store = configureStore();


export default (
    <Router history={browserHistory}>
        <Route path='/' component={layout}>
        </Route>
    </Router>
)
