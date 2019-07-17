import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _forEach from 'lodash-es/forEach';
import MaskedInput from "react-text-mask";
import '../styles/LimitedInput.scss';

export default class LimitedInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			length: 0,
		};
	}

	componentWillMount = () => {
		this.setState({ length: this.props.defaultValue ? this.props.defaultValue.length : 0 });
	};

	getSpanClass = () => (
		(this.state.length > this.props.maxChars) ?
			'fidelis-limited-input-red-text' : null
	);

	genInputClass = () => (
		(this.state.length > this.props.maxChars) ?
			'fidelis-limited-input-red-border' : null
	);

	handleKeyUp = (event) => {
		this.setState({ length: parseInt(event.target.value.length, 10) });
		this.props.onKeyUp(event);
	};

	positionSetup = () => {
		switch (this.props.alertPosition) {
			case 'right':
				return <span>&nbsp;</span>;
			default:
				return <br />;
		}
	};

	makeInputProps = () => {
		// Strip props this component accepts and props that may conflict
		const props = {};
		_forEach(Object.keys(this.props), (prop) => {
			if (prop !== 'maxChars' && prop !== 'alwaysShowLimit' && prop !== 'onKeyUp'
				&& prop !== 'className' && prop !== 'alertPosition') {
				props[prop] = this.props[prop];
			}
		});
		return props;
	};

	makeDivClass = () =>
		((typeof (this.props.className) !== 'undefined') ?
			`fidelis-limited-input ${this.props.className}`
			: 'fidelis-limited-input');

	render() {
		return (
			<div className={this.makeDivClass()}>
				<input className={this.genInputClass()} onKeyUp={this.handleKeyUp} {...this.makeInputProps()} />
				{
					(this.props.alwaysShowLimit || (this.state.length > this.props.maxChars)) ?
						(
							<span className={this.getSpanClass()}>
								{this.positionSetup()}
								Character Limit: {this.state.length} / {this.props.maxChars}
							</span>
						) : null
				}
			</div>
		);
	}
}

LimitedInput.propTypes = {
	maxChars: PropTypes.number,
	alwaysShowLimit: PropTypes.bool,
	alertPosition: PropTypes.string,
};

LimitedInput.defaultProps = {
	maxChars: 64,
	alwaysShowLimit: false,
	alertPosition: 'bottom',
};

export class NumberInput extends Component {
	handleKeyDown = (event) => {
		const key = event.keyCode;
		// Allow number line
		if ((key >= 48 && key <= 57) ||
			// Allow number pad
			(key >= 96 && key <= 105) ||
			// Allow Shift, Home, End
			(event.shiftKey === true || key === 35 || key === 36) ||
			// Allow backspace, tab, delete
			(key === 8 || key === 9 || key === 46) ||
			(
				// Allow Ctrl/Command + A,C,V,X,Z
				(event.ctrlKey === true || event.metaKey === true) &&
				(key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
		) {
			return;
		}
		event.preventDefault();
		if (typeof (this.props.onKeyDown) === 'function') {
			this.props.onKeyDown(event);
		}
	};

	render() {
		return (
			<input type="number" onKeyDown={this.handleKeyDown} {...this.props} />
		);
	}
}

export const PhoneInput = props => (
	<MaskedInput
		{...props}
		mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
		showMask={false}
		placeholder={props.placeholder ? props.placeholder : '(316) 555-1114'}
		keepCharPositions={true}
	/>
);

export const ZipInput = props => (
	<MaskedInput
		{...props}
		mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
		showMask={false}
		placeholder={props.placeholder ? props.placeholder : '52327'}
		keepCharPositions={true}
	/>
);
