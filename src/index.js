import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Minter from './components/Minter';
import Connector from './components/Connect';

ReactDOM.render(
React.createElement(Connector, {}, null),
document.getElementById('btn_connect')
);

ReactDOM.render(
React.createElement(Minter, {}, null),
document.getElementById('btn_mint')
);