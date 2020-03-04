import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import '../styles/FancyCheckbox.scss';

class FancyCheckbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked,
		};
	}

	handleOnChange = (event) => {
		this.setState({ checked: event.target.checked });
		if (this.props.onChange) {
			this.props.onChange(event);
		}
	};

	render() {
		return (
			<div className={`fidelis-fancy-checkbox-wrapper ${this.props.className}`}>
				<label className="fidelis-fancy-checkbox">
					<input
						type="checkbox"
						defaultChecked={this.props.checked}
						value={this.props.value}
						name={this.props.name}
						onChange={this.handleOnChange}
					/>
					<span className="fidelis-fancy-select-check">
						{ this.state.checked ? <FontAwesomeIcon icon={faCheck} /> : null }
					</span>
				</label>
			</div>
		);
	}
}

FancyCheckbox.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	value: PropTypes.string,
	name: PropTypes.string,
};

FancyCheckbox.defaultProps = {
	checked: false,
};

export default FancyCheckbox;
