import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';



import fruitsArray from './fruits';
import { choice, remove } from './helpers';




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


// import fruitsArray from './fruits';
// import { choice, remove } from './helpers';

let fruit = choice(fruitsArray);
let fruitsLeft = remove(fruitsArray, fruit);

console.log('fruitsLeft', fruitsLeft);
console.log('fruitsLeft length', fruitsLeft.length);


console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);
console.log(`I'm sorry, we're all out. We have ${fruitsLeft.length} left.`);