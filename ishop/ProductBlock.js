var ProductBlock = React.createClass({

    displayName: 'ProductBlock',

    propTypes: {
      title: React.PropTypes.string.isRequired,
      products: React.PropTypes.array.isRequired,
   
      products:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          product: React.PropTypes.string.isRequired,
          price: React.PropTypes.number.isRequired,
          amount: React.PropTypes.number.isRequired,
          url: React.PropTypes.string.isRequired
        })
      )  
    },

    render: function() {

      return React.DOM.div( {className:'ProductBlock'},
        React.createElement( MarketTitle, {title: this.props.title} ),
        React.DOM.table( null,
          React.DOM.thead( null, 
          React.DOM.tr( null,
              React.DOM.th( null, 'Название продукта' ),
              React.DOM.th( null, 'Стоимость (руб.)' ),
              React.DOM.th( null, 'Количество на складе (шт.)' ),
              React.DOM.th( null, 'Изображение' ),
            )
          ),
          React.DOM.tbody( null, this.props.products.map(el => 
            React.DOM.tr( {key:el.id},
              React.DOM.td( null, el.product),
              React.DOM.td( null, el.price),
              React.DOM.td( null, el.amount),
              React.DOM.td( null,
                React.DOM.img( {className:'Img', src:`${el.url}`} ),
              )
            )
          ))
        )
      )
    }
  });