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
            resultWordsList: (this.props.words.join('\n')),
         };
      },

    settingState: function(EO) {
        switch(EO.target.type) {
            case 'checkbox':
                this.setState( {isChecked: !(this.state.isChecked)}, this.check );
                break;
            case 'text':
                this.setState( {inputValue: EO.target.value}, this.check );
                break;
            case 'button':
                this.setState( {isChecked: false, inputValue: ''}, this.check );
                break;
          };
    },

    check: function() {
        let result = this.state.wordsList.slice(0, this.state.wordsList.length);
        if (this.state.isChecked === true) {
            result = result.sort();
        }
        if (this.state.isChecked === false) {
            result = this.state.wordsList;
        }
        result = result.filter(el=>el.includes(this.state.inputValue)).join('\n');
        this.setState( {resultWordsList: result} );
    },

    render: function() {

        return React.DOM.div( {className:'FilterBlock'},
            React.DOM.input({type: 'checkbox', checked: this.state.isChecked, onChange: this.settingState}),
            React.DOM.input({type: 'text', value: this.state.inputValue, onChange: this.settingState}),
            React.DOM.input({type: 'button', value: 'сброс', onClick: this.settingState}),
            React.DOM.div({className:'Field'}, this.state.resultWordsList),
        )
    }
})