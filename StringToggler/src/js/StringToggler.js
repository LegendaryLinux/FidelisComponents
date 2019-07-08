import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/StringToggler.scss';

class StringToggler extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSecret: false,
		};
	}

	toggleSecret = () => {
		if (this.props.reToggle) {
			setTimeout(() => { this.setState({ showSecret: false }); }, 30000);
		}
		this.setState({ showSecret: !this.state.showSecret });
	};

	render() {
		return (
			<span onClick={this.toggleSecret} className="string-toggler">
				{this.state.showSecret ? this.props.secret : this.props.cover}
			</span>
		);
	}
}

StringToggler.propTypes = {
	cover: PropTypes.string,
	secret: PropTypes.string.isRequired,
	reToggle: PropTypes.bool,
};

StringToggler.defaultProps = {
	cover: 'Click to show',
	reToggle: false,
};

export default StringToggler;
