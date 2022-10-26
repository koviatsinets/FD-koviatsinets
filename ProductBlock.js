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
          url: React.PropTypes.string.isRequired,
          id: React.PropTypes.number.isRequired,
        })
      )  
    },

    getInitialState: function() {
      return { 
          stateArr: this.props.products
       };
    },

    deleteItem: function(EO) {
      EO.stopPropagation();
      var resultArr = this.state.stateArr.filter(el => (el.id !== +EO.target.dataset.button));
      this.setState( {stateArr: resultArr} );
    },

    markItem: function(EO) {
      var resultArr = this.state.stateArr.map(el => {
        el.checked = (el.id === +EO.target.dataset.item)? true : false;
        return el;
      });
      this.setState( {stateArr: resultArr} );
    },

    render: function() {

      return React.DOM.div( {className:'ProductBlock'},
        React.DOM.div( {className:'MarketTitle'}, this.props.title ),
        React.DOM.table( null,
          React.DOM.thead( null, 
          React.DOM.tr( null,
              React.DOM.th( null, 'Название продукта' ),
              React.DOM.th( null, 'Стоимость (руб.)' ),
              React.DOM.th( null, 'Количество на складе (шт.)' ),
              React.DOM.th( null, 'Изображение' ),
              React.DOM.th( null, 'Удалить элемент' ),
            )
          ),
          React.DOM.tbody( null, this.state.stateArr.map(el=> 
            React.createElement( ProductItem, { key: el.id, id: el.id, product: el.product, 
                price: el.price, amount: el.amount, url: el.url, checked: el.checked, 
                cbDeleteItem: this.deleteItem, cbMarkItem: this.markItem}
              )
          ))
        )
      )
    }
  });