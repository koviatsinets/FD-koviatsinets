var ProductList = React.createClass({

    displayName: 'ProductList',

    render: function() {

      var productsCode=[];

      for ( var a=0; a<this.props.products.length; a++ ) {
        var currentProduct = this.props.products[a];
        console.log(this.props.products[a]);
   
        var currentCode=
          React.DOM.div({key:currentProduct.id,className:'Product'},
            React.DOM.span({className:'Product'},currentProduct.product),
            React.DOM.span({className:'Price'},currentProduct.price),
            React.DOM.span({className:'Amount'},currentProduct.amount),
          );
        productsCode.push(currentCode);
        
      }
      return React.DOM.div( {className:'productsList'}, 
        React.DOM.div( {className:'Products'}, productsCode ),
      );
    },
  
  });