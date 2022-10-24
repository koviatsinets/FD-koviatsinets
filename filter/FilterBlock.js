var FilterBlock = React.createClass({

    displayName: 'FilterBlock',

    propTypes: {
        words: React.PropTypes.arrayOf(React.PropTypes.string)
    },

    getInitialState: function() {
        return { 
            wordsList: this.props.words,
            inputValue: '',
            isChecked: false,
            resultWordsList: this.props.words,
         };
      },

    settingStateCheckbox: function() {
        this.setState( {isChecked: !(this.state.isChecked)}, this.check );
    },

    settingStateText: function(EO) {
        this.setState( {inputValue: EO.target.value}, this.check );
    },

    settingStateButton: function() {
        this.setState( {isChecked: false, inputValue: ''}, this.check );
    },

    check: function() {
        let result = this.state.wordsList.slice();
        if (this.state.isChecked === true) {
            result = result.sort();
        } else {
            result = this.state.wordsList;
        }
        result = result.filter(el=>el.includes(this.state.inputValue));
        this.setState( {resultWordsList: result} );
    },

    render: function() {

        return React.DOM.div( {className:'FilterBlock'},
            React.DOM.input({type: 'checkbox', checked: this.state.isChecked, onChange: this.settingStateCheckbox}),
            React.DOM.input({type: 'text', value: this.state.inputValue, onChange: this.settingStateText}),
            React.DOM.input({type: 'button', value: 'сброс', onClick: this.settingStateButton}),
            React.DOM.div({className:'Field'}, this.state.resultWordsList.join('\n')),
        )
    }
})