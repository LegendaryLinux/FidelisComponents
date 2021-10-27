import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { isString as _isString } from 'lodash-es';
import ReactModalContent from './ReactModalContent';
import '../styles/ReactModal.scss';

class ReactModal extends React.Component {
	constructor(props) {
		super(props);
		this.modalId = `modal-${Math.floor(Math.random() * (10000 - 1))}${1}`;
		this.overlayId = `modal-overlay-${Math.floor(Math.random() * (10000 - 1))}${1}`;
		this.containerId = `modal-container-${Math.floor(Math.random() * (10000 - 1))}${1}`;
	}

	showModal = () => {
		const modalContainer = document.createElement('div');
		modalContainer.id = this.containerId;
		document.body.appendChild(modalContainer);

		// Render the modal content into the newly created div
		ReactDOM.render(
			<ReactModalContent
				modalId={this.modalId}
				overlayId={this.overlayId}
				modalContent={this.props.content}
				closeModal={this.closeModal}
			/>,
			document.getElementById(this.containerId), () => {
				// Allow the escape key to close the modal
				document.body.addEventListener('keydown', this.closeModalOnEscape);

				// Properly align the modal on the page
				const visibleModal = document.getElementById(this.modalId);
				visibleModal.style.left = `calc(50% - ${visibleModal.offsetWidth / 2}px)`;
			},
		);
	};

	closeModalOnEscape = (event) => {
		// Pressing the Escape key can close the modal
		if (event.key && event.key === 'Escape') { this.closeModal(); }
	};

	closeModal = () => {
		// Remove the modal from the body entirely
		document.body.removeChild(document.getElementById(this.containerId));

		// Remove the event listener on the document body
		document.body.removeEventListener('keydown', this.closeModalOnEscape);
	}

	render() {
		return (
			<div className="react-modal-trigger">
				<span onClick={this.showModal}>{this.props.trigger}</span>
			</div>);
	}
}

ReactModal.propTypes = {
	trigger: PropTypes.object.isRequired,
	content: PropTypes.object.isRequired,
};

export default ReactModal;
