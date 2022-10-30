import React from 'react';
import ReactDOM from 'react-dom';

import Market from './components/Market/Market';

let arrProducts=require('./products.json');

ReactDOM.render(
  
  <Market 
    title={'Техника STIHL'}
    products={arrProducts}
  />
  , document.getElementById('container') 
);

