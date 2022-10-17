var MarketTitle = React.createClass({

    displayName: 'MarketTitle',

    render: function() {
        return React.DOM.p(
            {className:'MarketTitle'},
            this.props.title
        );
    }
});