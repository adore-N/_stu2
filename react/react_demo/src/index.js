import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layouts/App/App.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Route component={App}></Route>
  </BrowserRouter>
  ,
  document.getElementById('root')
  );

serviceWorker.unregister();
