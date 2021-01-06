import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _forEach from 'lodash-es/forEach';
import '../styles/AutoComplete.scss';

class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.optionBoxRef = React.createRef();
        this.inputRef = React.createRef();
        this.state = {
            displayOptions: false,
            options: this.props.options,
            highlightedKey: 0,
            inputValue: null,
        };
    }

    handleInputFocusOrClick = () => {
        this.setState({ displayOptions: true }, () => {
            document.addEventListener('click', this.handleGlobalClick);
        });
    };

    handleInputBlur = () => {
        // On blur, ensure the value displayed in the text box matches the currently selected value
        this.inputRef.current.value = this.state.inputValue || '';
    };

    handleGlobalClick = (e) => {
        // If the user clicks inside the input box, do nothing
        if (e.target === this.inputRef.current) { return; }

        // If the user clicks an option, let the option's event handler run
        if (e.target.classList.contains('autocomplete-option')) { return; }

        // Remove the click event listener from the page and close the options box
        document.removeEventListener('click', this.handleGlobalClick);
        this.setState({ displayOptions: false });
    };

    handleOptionClick = (e) => {
        this.props.onUpdate(e.target.getAttribute('data-value'));
        this.inputRef.current.value = e.target.innerText;
        document.removeEventListener('click', this.handleGlobalClick);
        this.setState({
            displayOptions: false,
            highlightedKey: parseInt(e.target.getAttribute('data-key'), 10),
            inputValue: e.target.innerText
        });
    };

    handleKeyDown = (e) => {
        if (['Enter', 'Tab'].indexOf(e.key) !== -1) {
            this.setState({ displayOptions: false });
        }

        // If the user presses enter, they probably want to use a highlighted value in the list
        if (e.key === 'Enter') {
            if (this.state.options.length !== 0) {
                this.inputRef.current.value = this.state.options[this.state.highlightedKey].name;
                this.props.onUpdate(this.state.options[this.state.highlightedKey].value);
                this.setState({ inputValue: this.state.options[this.state.highlightedKey].name });
            } else if (!this.props.allowUserValues) {
                this.inputRef.current.value = '';
                this.props.onUpdate(null);
                this.setState({ inputValue: '' });
            }
            return;
        }

        // If the user tabs out of the field, blank or fill the input box as appropriate
        if (e.key === 'Tab') {
            // If custom values are allowed, do nothing
            if (this.props.allowUserValues || this.inputRef.current.value === '') { return; }

            if (this.state.options.length === 0) {
                this.inputRef.current.value = '';
                this.props.onUpdate(null);
                this.setState({ inputValue: '' });
            } else {
                this.inputRef.current.value = this.state.options[this.state.highlightedKey].name;
                this.props.onUpdate(this.state.options[this.state.highlightedKey].value);
                this.setState({ inputValue: this.state.options[this.state.highlightedKey].name });
            }
            return;
        }

        this.setState({ displayOptions: true }, () => {
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
                this.setState({ highlightedKey: newKey }, () => {
                    // Scroll the option into view the fancy way if possible, fallback to the less fnacy way
                    this.optionBoxRef.current.childNodes[newKey].scrollIntoViewIfNeeded ?
                        this.optionBoxRef.current.childNodes[newKey].scrollIntoViewIfNeeded(false) :
                        this.optionBoxRef.current.childNodes[newKey].scrollIntoView();
                });
            }
        });
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

        if (this.props.allowUserValues || e.target.value === '') {
            this.props.onUpdate(e.target.value || null);
            this.setState({ inputValue: e.target.value });
        }
    }

    handleOptionMouseIn = (e) => {
        this.setState({ highlightedKey: parseInt(e.target.getAttribute('data-key'), 10) });
    };

    buildOptionsBox = () => {
        const optionBoxStyle = {
            width: `${this.wrapperRef.current.offsetWidth - 2}px`,
        };

        const options = [];
        _forEach(this.state.options, (opt, key) => {
            const highlighted = parseInt(this.state.highlightedKey, 10) === parseInt(key, 10) ? 'highlighted' : '';
            options.push(
                <div
                    key={key}
                    className={`autocomplete-option ${highlighted}`}
                    data-value={opt.value}
                    data-key={key}
                    onMouseEnter={this.handleOptionMouseIn}
                    onClick={this.handleOptionClick}
                >{opt.name}
                </div>
            );
        });

        return options.length > 0 ?
            <div className="autocomplete-options" style={optionBoxStyle} ref={this.optionBoxRef}>{options}</div>
            : null;
    };

    render() {
        return (
            <div className="autocomplete-wrapper" ref={this.wrapperRef}>
                <input
                    type="text"
                    ref={this.inputRef}
                    className="autocomplete-input"
                    onClick={this.handleInputFocusOrClick}
                    onFocus={this.handleInputFocusOrClick}
                    onBlur={this.handleInputBlur}
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
    allowUserValues: PropTypes.bool,
};

AutoComplete.defaultProps = {
    allowUserValues: true,
};

export default AutoComplete;
