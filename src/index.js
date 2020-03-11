import React from 'react';
import ReactDOM from 'react-dom';
import {Globalstyle} from './style.js';
import App from './App';
import {Globalicon} from './static/iconfonts/iconfont.js';

const Styleapp=(
  <div>
  <Globalstyle />
  <Globalicon />
    <App />
  </div>
);

ReactDOM.render(Styleapp , document.getElementById('root'));
