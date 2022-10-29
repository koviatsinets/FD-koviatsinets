var ProductItem = React.createClass({

    displayName: 'ProductItem',

    propsTypes: {
        product: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        amount: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
        cbDeleteItem: React.PropTypes.func.isRequired,
        cbMarkItem: React.PropTypes.func.isRequired,
        id: React.PropTypes.number.isRequired
    },

    render: function() {
        var classNameStyle = this.props.checkedId === this.props.id? 'ProductItem Checked' : 'ProductItem';
        return React.DOM.tr( {className: classNameStyle, onClick: () => this.props.cbMarkItem(this.props.id)},
            React.DOM.td( null, this.props.product),
            React.DOM.td( null, this.props.price),
            React.DOM.td( null, this.props.amount),
            React.DOM.td( null,
              React.DOM.img( {className:'Img', src:`${this.props.url}`} ),
            ),
            React.DOM.td( null,
              React.DOM.button( {className:'Button', 
              onClick: (EO) => this.props.cbDeleteItem(EO, this.props.id)}, 'Удалить' ),
            )
          )
          
    }

});