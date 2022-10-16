var ProductBlock = React.createClass({

    displayName: 'ProductBlock',

    render: function() {

      return React.DOM.div( {className:''},
        React.DOM.p( {className:'title'}, this.props.title ),
        React.DOM.table( {},
          React.DOM.thead( {}, 
          React.DOM.tr( {},
              React.DOM.th( {}, 'Название продукта' ),
              React.DOM.th( {}, 'Стоимость (руб.)' ),
              React.DOM.th( {}, 'Количество на складе (шт.)' ),
              React.DOM.th( {}, 'Изображение' ),
            )
          ),
          React.DOM.tbody( {}, this.props.products.map(el => 
            React.DOM.tr({key:el.id},
              React.DOM.td({}, el.product),
              React.DOM.td({}, el.price),
              React.DOM.td({}, el.amount),
              React.DOM.td({},
                React.DOM.img({className:'img', src:`${el.url}`}),
              )
            )
          ))
        )
      )
    }
  });