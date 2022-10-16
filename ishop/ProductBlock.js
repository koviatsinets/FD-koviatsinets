var ProductBlock = React.createClass({

    displayName: 'ProductBlock',

    render: function() {

      var productsCode=[];

      for ( var a=0; a<this.props.products.length; a++ ) {
        var currentProduct = this.props.products[a];
        console.log(this.props.products[a]);
   
        var currentCode=
          React.DOM.tr({key:currentProduct.id},
            React.DOM.td({}, currentProduct.product),
            React.DOM.td({}, currentProduct.price),
            React.DOM.td({}, currentProduct.amount),
            React.DOM.td({},
              React.DOM.img({className:'img', src:`${currentProduct.url}`}),
            ),
          );
        productsCode.push(currentCode);
        
      }
      return React.DOM.div( {className:''},
        React.DOM.p( {className:'title'}, this.props.title ),
        React.DOM.table( {},
          React.DOM.thead( {}, 
          React.DOM.tr( {},
              React.DOM.th( {}, 'Название продукта' ),
              React.DOM.th( {}, 'Стоимость (руб.)' ),
              React.DOM.th( {}, 'Количество на складе (шт.)' ),
              React.DOM.th( {}, 'Изображение' ),
            ),
          ),
          React.DOM.tbody( {}, productsCode ),
        ),
        )
    },
  });