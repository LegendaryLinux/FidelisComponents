import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _forEach from 'lodash-es/forEach';
import _assign from 'lodash-es/assign';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/FancySelect.scss';

class FancySelect extends Component {
	constructor(props) {
		super(props);

		// Options are mandatory
		if(this.props.options.length === 0){
			throw new Error('FancySelect component was provided an empty options array');
		}

		// Transform props options array into object keyed by array index, save to state
		const keyedOpts = {};
		_forEach(this.props.options, (opt) => {
			keyedOpts[this.props.options.indexOf(opt)] = _assign({}, opt, {
				key: this.props.options.indexOf(opt),
			});
		});

		this.state = {
			options: keyedOpts,
			selected: 0,
			optionsVisible: false,
		};

		this.selectRef = React.createRef();
		this.optionsRef = React.createRef();
	}

	componentDidMount(){
		// If props.selected is provided, find the key of the object in state.options whose options.value matches it
		// and set state.selected to that value
		if(this.props.selected){
			_forEach(this.state.options, (opt) => {
				if(opt.value === this.props.selected){
					this.setState({ selected: opt.key }, () => {
						this.props.handleOnChange(this.state.options[opt.key].value);
					});
					// Exit _forEach
					return false;
				}
			});
			return;
		}
		// Run the onChange function for the first value in options if no selected prop is provided
		this.props.handleOnChange(this.state.options[0].value);
	}

	closeOnOutsideClick = (event) => {
		// If the user clicked on the FancySelect options, do nothing
		if (event.target.classList.contains('fidelis-fancy-select-options-container') ||
			event.target.classList.contains('fidelis-fancy-select-option')){
			return;
		}

		// Close the select list otherwise
		this.toggleOptionsVisible();
	};

	toggleOptionsVisible = () => {
		this.setState((prevState) => ({
			optionsVisible: !prevState.optionsVisible,
		}),() => {
			// If the options are visible, set their height appropriately
			if (!this.state.optionsVisible) {
				document.removeEventListener('click', this.closeOnOutsideClick);
				return;
			}
			const selectHeight = this.selectRef.current.offsetTop;
			this.optionsRef.current.top = selectHeight+55+'px';

			// Add an event listener to the DOM which will close the options list if the user clicks outside the list
			document.addEventListener('click', this.closeOnOutsideClick)
		});
	};

	handleOptionClick = (optKey) => {
		this.setState({ selected: optKey }, () => {
			this.toggleOptionsVisible();
			this.props.handleOnChange(this.state.options[optKey].value);
		});
	};

	generateOptions = () => {
		const renderOpts = [];
		_forEach(this.state.options, (opt) => {
			renderOpts.push((
				<div
					key={opt.key}
					className={`fidelis-fancy-select-option ${opt.key === this.state.selected ? 'selected' : null}`}
					onClick={() => {this.handleOptionClick(opt.key)}}
				>{opt.name}
				</div>
			))
		});
		return renderOpts;
	};

	render() {
		return (
			<div className="fidelis-fancy-select-container" style={{width: `${this.props.width}px`}}>
				<div className="fidelis-fancy-select-wrapper" ref={this.selectRef} style={{width: `${this.props.width}px`}}>
					<div
						className={`fidelis-fancy-select ${this.state.optionsVisible ? 'active' : null}`}
						onClick={this.toggleOptionsVisible}
						style={{width: `${this.props.width - 30}px`}}
					>{this.state.options[this.state.selected].name}
					</div>
					<div
						className={`fidelis-fancy-select-icon ${this.state.optionsVisible ? 'active' : null}`}
						onClick={this.toggleOptionsVisible}
					>
						<FontAwesomeIcon icon={faCaretUp} />
						<FontAwesomeIcon icon={faCaretDown} />
					</div>
				</div>
				{
					this.state.optionsVisible ? (
						<div
							className="fidelis-fancy-select-options-container"
							ref={this.optionsRef}
							style={{width: `${this.props.width - 2}px`}}
						>{this.generateOptions()}
						</div>
					) : null
				}
			</div>
		);
	}
}

const fancySelectOptionsShape = {
	name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number,]).isRequired,
};

FancySelect.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape(fancySelectOptionsShape)),
	selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	handleOnChange: PropTypes.func.isRequired,
	width: PropTypes.number,
};

FancySelect.defaultProps = {
	width: 280,
};

export default FancySelect;
