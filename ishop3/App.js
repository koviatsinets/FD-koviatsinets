import React from 'react';
import ReactDOM from 'react-dom';

import Market from './components/Market/Market';

let productsArr=require('./products.json');

ReactDOM.render(
  
  <Market 
    title={'Техника STIHL'}
    products={productsArr}
  />
  , document.getElementById('container') 
);

