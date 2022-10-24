var MarketTitle = React.createClass({

    displayName: 'MarketTitle',

    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function() {
        return React.DOM.p( {className:'MarketTitle'}, this.props.title );
    }
});