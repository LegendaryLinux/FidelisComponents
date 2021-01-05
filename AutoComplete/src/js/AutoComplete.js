import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _forEach from 'lodash-es/forEach';
import '../styles/AutoComplete.scss';

class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            displayOptions: false,
            options: this.props.options,
            highlightedKey: 0,
        };
    }

    handleInputFocus = () => {
        console.log('1');
        this.setState({ displayOptions: true }, () => {
            document.addEventListener('click', this.handleGlobalClick);
        });
    }

    handleInputBlur = () => {
        // TODO: Disallow custom values by checking for a previously set value.
        // If no value is set, set the last highlighted option as the new value
    };

    // TODO: This has a race contition with handleInputFocus. Figure that out.
    handleInputClick = (e) => {
        if (!this.state.displayOptions) {
            console.log('2')
            this.setState({ displayOptions: true }, () => {
                document.addEventListener('click', this.handleGlobalClick);
            });
        }
    };

    handleGlobalClick = (e) => {
        // If the user clicks inside the input box, do nothing
        if (e.target.classList.contains('autocomplete-input')) { return; }

        // If the user clicks an option, let the option's event handler run
        if (e.target.classList.contains('autocomplete-option')) { return; }

        // Remove the click event listener from the page and close the options box
        document.removeEventListener('click', this.handleGlobalClick);
        this.setState({ displayOptions: false });
    };

    handleOptionClick = (e) => {
        this.props.onUpdate(e.target.getAttribute('data-value'));
        this.inputRef.current.value = e.target.innerHTML;
        document.removeEventListener('click', this.handleGlobalClick);
        this.setState({
            displayOptions: false,
            highlightedKey: parseInt(e.target.getAttribute('data-key'), 10),
        });
    };

    handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            return;
        }

        if (e.key === 'Enter') {
            this.inputRef.current.value = this.state.options[this.state.highlightedKey].name;
            this.props.onUpdate(this.state.options[this.state.highlightedKey].value);
            this.setState({ displayOptions: false });
            return;
        }

        let newKey = this.state.highlightedKey;
        if (e.key === 'ArrowUp') {
            // Scroll up the list, or cycle to the bottom
            if (this.state.highlightedKey === 0) { newKey = this.state.options.length - 1; }
            else { --newKey; }
        }

        if (e.key === 'ArrowDown') {
            // Scroll down the list, or cycle to the top
            if (this.state.highlightedKey === (this.state.options.length - 1)) { newKey = 0; }
            else { ++newKey; }
        }

        if (newKey !== this.state.highlightedKey) {
            this.setState({ highlightedKey: newKey });
        }
    };

    handleKeyUp = (e) => {
        if (['ArrowDown','ArrowUp','ArrowLeft','ArrowRight','Tab','Shift'].indexOf(e.key) !== -1) { return; }
        const options = [];

        _forEach(this.props.options, (opt) => {
            // Do not render options which do not match the filter
            if (e.target.value && opt.name.toLowerCase().search(e.target.value.toLowerCase()) === -1) { return; }

            // Include option in renderable options array
            options.push(opt);
        });

        this.setState({ options, highlightedKey: 0 });
    }

    buildOptionsBox = () => {
        const options = [];
        _forEach(this.state.options, (opt, key) => {
            const highlighted = parseInt(this.state.highlightedKey, 10) === parseInt(key, 10) ? 'highlighted' : '';
            options.push(
                <div
                    key={key}
                    className={`autocomplete-option ${highlighted}`}
                    data-value={opt.value}
                    data-key={key}
                    onClick={this.handleOptionClick}
                >{opt.name}
                </div>
            );
        });

        return options.length > 0 ? (<div className="autocomplete-options">{options}</div>) : null;
    };

    render() {
        return (
            <div className="autocomplete-wrapper">
                <input
                    type="text"
                    ref={this.inputRef}
                    className="autocomplete-input"
                    onFocus={this.handleInputFocus}
                    onBlur={this.handleInputBlur}
                    onClick={this.handleInputClick}
                    onKeyUp={this.handleKeyUp}
                    onKeyDown={this.handleKeyDown}
                />
                {
                    this.state.displayOptions ? this.buildOptionsBox() : null
                }
            </div>
        );
    }
}

AutoComplete.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })).isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default AutoComplete;
