import PropTypes from 'prop-types';
import React from 'react';
import '../styles/Popover.scss';

/**
 * Provides a render container for popups. The popups should be styled
 * as a rectangular box with a triangular pointer on the upside.
 *
 * Props content Anything passed in on this prop will be rendered in a contentId Div
 */
class Popover extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			lastAction: 0,
		};
		this.contentId = `popover-${Math.floor(Math.random() * (10000 - 1))}${1}`;
	}

	componentDidMount() {
		const content = document.getElementById(this.contentId);
		const contentHeight = content.offsetHeight;
		const contentWidth = content.offsetWidth;

		switch (this.props.position) {
			case 'top':
				content.style.bottom = `calc(100% - ${contentHeight / 4}px)`;
				content.style.left = `${contentWidth / 2}px`;
				break;
			case 'bottom':
				content.style.top = `calc(100% - ${contentHeight / 4}px)`;
				content.style.left = `${contentWidth / 2}px`;
				break;
			case 'right':
				content.style.top = `calc(50% - ${contentHeight / 2}px)`;
				break;
			default: // left
				content.style.top = `calc(50% - ${contentHeight / 2}px)`;
				break;
		}
	}

	getContentClass() {
		const visibility = (this.state.visible ? ' popover-visible' : ' popover-hidden');
		const position = `popover-${this.props.position}`;
		return `popover-content ${position} ${visibility}`;
	}

	openPopover = () => {
		// I hate myself for this race condition. If anyone comes along later and figures out a way to prevent
		// parent DOM elements firing events before their children, and can do it without event.stopPropagation(),
		// please submit a pull request then email me and share your knowledge
		if (Date.now() < (this.state.lastAction + 100)) { return; }
		document.body.addEventListener('click', this.closePopover);
		document.body.addEventListener('keydown', this.handleKeyDown);
		this.setState({ visible: true, lastAction: Date.now() });
	};

	closePopover = () => {
		if (Date.now() < (this.state.lastAction + 100)) { return; }
		document.body.removeEventListener('click', this.closePopover);
		document.body.removeEventListener('keydown', this.handleKeyDown);
		this.setState({ visible: false, lastAction: Date.now() });
	};

	togglePopover = (event) => {
		this.state.visible ? this.closePopover(event) : this.openPopover(event);
	};

	handleKeyDown = (event) => {
		// If the user pressed the escape key, close the popover
		if (event.keyCode === 27) {
			this.closePopover();
		}
	};

	render() {
		return (
			<div className="popover-container" onClick={this.togglePopover} onKeyDown={this.handleKeyDown}>
				{this.props.trigger}
				<div id={this.contentId} className={this.getContentClass()} onClick={this.closePopover}>
					{this.props.content}
				</div>
			</div>
		);
	}
}

Popover.propTypes = {
	trigger: PropTypes.object.isRequired,
	content: PropTypes.object.isRequired,
	position: PropTypes.string,
};

Popover.defaultProps = {
	position: 'left',
};

export default Popover;
