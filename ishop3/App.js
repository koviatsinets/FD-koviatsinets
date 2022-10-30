import React from 'react';
import ReactDOM from 'react-dom';

// import VotesBlock from './components/VotesBlock';
import ProductBlock from './components/ProductBlock';

// let questionText='Как вы относитесь к программированию?';
// let arrProducts = require('./products.json');
// let defaultFreeAnswerText="???";

let arrProducts=require('./products.json');

ReactDOM.render(
  
  <ProductBlock 
    title={'Техника STIHL'}
    products={arrProducts}
  />
  , document.getElementById('container') 
);

