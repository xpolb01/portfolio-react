'use strict';
import '../stylesheets/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';

import {store} from './store';

import { App } from './components/App'

ReactDOM.render(
   <Provider store={store}>
     <Router history={browserHistory}>
       <Route path="/" component={App} />
     </Router>
   </Provider>,
   document.getElementById('app')
);
