import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _forEach from 'lodash-es/forEach';
import _cloneDeep from 'lodash-es/cloneDeep';
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

    componentDidMount() {
        if (this.props.defaultValue) {
            let matchFound = false;
            _forEach(this.props.options, (opt, key) => {
                if (this.props.defaultValue === opt.value || this.props.defaultValue === opt.name) {
                    this.inputRef.current.value = opt.name;
                    this.setState({ highlightedKey: key, inputValue: opt.name });
                    this.props.onUpdate(opt.value);
                    matchFound = true;
                    return false;
                }
            });

            if (!matchFound && this.props.allowUserValues) {
                this.inputRef.current.value = this.props.defaultValue;
                this.setState({ inputValue: this.props.defaultValue });
                this.props.onUpdate(this.props.defaultValue);
            }
        }
    }

    handleInputFocusOrClick = () => {
        if (!this.props.showListOnFocus) { return; }
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
        const optionSet = this.inputRef.current.value ? this.state.options : this.props.options;
        this.setState({
            displayOptions: false,
            options: optionSet,
        });
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
        if (['Enter', 'Tab', 'Esc'].indexOf(e.key) !== -1) {
            this.setState({ displayOptions: false, highlightedKey: 0 });
        }

        if (e.key === 'Escape') {
            // If the user presses escape, blank the input field and hide the list
            this.inputRef.current.value = '';
            this.props.onUpdate(null);
            this.setState({ displayOptions: false, inputValue: '' });
            return;
        }

        // If the options list is not currently shown, there is nothing else to do
        if (!this.state.displayOptions) { return; }

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
                // Scroll the option into view the fancy way if possible, fallback to the less fancy way
                this.optionBoxRef.current.childNodes[newKey].scrollIntoViewIfNeeded ?
                    this.optionBoxRef.current.childNodes[newKey].scrollIntoViewIfNeeded(false) :
                    this.optionBoxRef.current.childNodes[newKey].scrollIntoView();
            });
        }
    };

    handleKeyUp = (e) => {
        if (['ArrowDown','ArrowUp','ArrowLeft','ArrowRight','Tab','Shift','Escape'].indexOf(e.key) !== -1) { return; }
        const options = [];

        _forEach(this.props.options, (opt) => {
            // Do not render options which do not match the filter
            if (e.target.value && opt.name.toLowerCase().search(e.target.value.toLowerCase()) === -1) { return; }

            // Include option in renderable options array
            options.push(opt);
        });

        this.setState({ options, highlightedKey: 0 });
        if (!this.state.displayOptions) {
            this.setState({ displayOptions: true }, () => {
                document.addEventListener('click', this.handleGlobalClick);
            });
        }

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

    buildProps = () => {
        // Clone props and remove custom props which should not appear in DOM
        const props = {..._cloneDeep(this.props)};
        delete props.onUpdate;
        delete props.options;
        delete props.allowUserValues;
        delete props.showListOnFocus;
        delete props.key;

        // defaultValue is handled in componentDidMount
        delete props.defaultValue;

        // Overwrite props assigned to input element with our own handlers, then run user-defined handlers afterward
        props.onClick = (e) => {this.handleInputFocusOrClick(); this.props.onclick ? this.props.onclick(e) : null};
        props.onFocus = (e) => {this.handleInputFocusOrClick(); this.props.onfocus ? this.props.onfocus(e) : null};
        props.onBlur = (e) => {this.handleInputBlur(); this.props.onblur ? this.props.onblur(e) : null};
        props.onKeyUp = (e) => {this.handleKeyUp(e); this.props.onkeyup ? this.props.onkeyup(e) : null};
        props.onKeyDown = (e) => {this.handleKeyDown(e); this.props.onkeydown ? this.props.onkeydown(e) : null};
        return props;
    };

    render() {
        return (
            <div className="autocomplete-wrapper" ref={this.wrapperRef}>
                <input ref={this.inputRef} className="autocomplete-input" {...this.buildProps()} />
                { this.state.displayOptions ? this.buildOptionsBox() : null }
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
    showListOnFocus: PropTypes.bool,
};

AutoComplete.defaultProps = {
    allowUserValues: true,
    showListOnFocus: true,
};

export default AutoComplete;
