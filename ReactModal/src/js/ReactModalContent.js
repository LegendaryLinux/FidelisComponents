import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ReactModal.scss';

class ReactModalContent extends Component {
	detectCloseClick = (event) => {
		if (event.target.classList.contains('react-modal-close')) { this.props.closeModal(); }
		event.stopPropagation();
	};

	render() {
		return (
			<div id={this.props.overlayId} className="react-modal-overlay" onClick={this.props.closeModal}>
				<div id="react-modal-close" onClick={this.props.closeModal} />
				<div id={this.props.modalId} className="react-modal" onClick={this.detectCloseClick}>
					{this.props.modalContent}
				</div>
			</div>
		);
	}
}

ReactModalContent.propTypes = {
	modalId: PropTypes.string.isRequired,
	overlayId: PropTypes.string.isRequired,
	modalContent: PropTypes.object.isRequired,
	closeModal: PropTypes.func.isRequired,
};

export default ReactModalContent;
