var ProductItem = React.createClass({

    displayName: 'ProductItem',

    propsTypes: {
        product: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        amount: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired
    },

    render: function() {
      
        var classNameStyle = this.props.checked? 'ProductItem Checked' : 'ProductItem';
        return React.DOM.tr( {className: classNameStyle, onClick: this.props.cbMarkItem},
            React.DOM.td( {'data-item': this.props.id}, this.props.product),
            React.DOM.td( {'data-item': this.props.id}, this.props.price),
            React.DOM.td( {'data-item': this.props.id}, this.props.amount),
            React.DOM.td( {'data-item': this.props.id},
              React.DOM.img( {className:'Img', src:`${this.props.url}`, 'data-item': this.props.id} ),
            ),
            React.DOM.td( {'data-item': this.props.id},
              React.DOM.button( {className:'Button', 'data-button': this.props.id, 
              onClick: this.props.cbDeleteItem}, 'Удалить' ),
            )
          )
    }

});