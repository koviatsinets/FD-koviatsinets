var FilterBlock = React.createClass({

    displayName: 'FilterBlock',

    propTypes: {
        words: React.PropTypes.arrayOf(React.PropTypes.string)
    },

    getInitialState: function() {
        return { 
            wordsList: this.props.words,
            inputValue: '',
            checkboxValue: false,
            resultWordsList: '',
         };
      },

    settingState: function(EO) {
        switch(EO.target.type) {
            case 'checkbox':
                this.setState( {checkboxValue: !(this.state.checkboxValue)} );
                break;
            case 'text':
                this.setState( {inputValue: EO.target.value} );
                break;
            case 'button':
                this.setState( {checkboxValue: false, inputValue: ''} );
                break;
          };
    },

    render: function() {

        let result = this.state.wordsList.slice(0, this.state.wordsList.length);
        if (this.state.checkboxValue === true) {
            result = result.sort();
        }
        if (this.state.checkboxValue === false) {
            result = this.state.wordsList;
        }
        result = result.filter(el=>el.includes(this.state.inputValue)).join('\n');


        return React.DOM.div( {className:'FilterBlock'},
            React.DOM.input({type: 'checkbox', checked: this.state.checkboxValue, onChange: this.settingState}),
            React.DOM.input({type: 'text', value: this.state.inputValue, onChange: this.settingState}),
            React.DOM.input({type: 'button', value: 'сброс', onClick: this.settingState}),
            React.DOM.div({className:'Field'}, result),
        )
    }

})