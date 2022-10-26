var ProductItem = React.createClass({

    displayName: 'ProductItem',

    propsTypes: {
        product: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        amount: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired
    },
    
    render: function() {

        return React.DOM.tr( {className:'ProductItem'},
            React.DOM.td( null, this.props.product),
            React.DOM.td( null, this.props.price),
            React.DOM.td( null, this.props.amount),
            React.DOM.td( null,
              React.DOM.img( {className:'Img', src:`${this.props.url}`} ),
            ),
            React.DOM.td( null,
              React.DOM.button( {className:'Button'}, 'Удалить' ),
            )
          )
    }

});