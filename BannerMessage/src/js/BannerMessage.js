import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';
import '../styles/BannerMessage.scss';

class BannerMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: false,
		};
	}

	closeMessage = () => { this.setState({ hidden: true }); };

	render() {
		if (this.state.hidden) return <div />;

		// Automatically close success messages after ten seconds
		if (!this.props.isWarning && !this.props.isError) {
			setTimeout(this.closeMessage, 10000);
		}

		const bannerClass = this.props.isWarning ?
			'fidelis-banner-warning' :
			(this.props.isError ? 'fidelis-banner-error' : 'fidelis-banner-success');

		return (
			<div className={bannerClass}>
				{this.props.message}
				<div className="fidelis-banner-close-container" onClick={this.closeMessage}>
					<FontAwesomeIcon icon={faTimes} />
				</div>
			</div>
		);
	}
}

BannerMessage.propTypes = {
	message: PropTypes.string.isRequired,
	isWarning: PropTypes.bool,
	isError: PropTypes.bool,
};

BannerMessage.defaultProps = {
	isWarning: false,
	isError: false,
};

export default BannerMessage;
