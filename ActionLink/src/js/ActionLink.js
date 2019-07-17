import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash-es/map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/pro-solid-svg-icons';
import Popover from '@fidelisppm/popover';
import Utils from '@fidelisppm/utils';
import '../styles/ActionLink.scss';

class ActionLink extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.actionLinkId = Utils.genUUID();
	}

	makeContent = () => (
		<div id={this.actionLinkId} className="fidelis-action-link-content">
			{_map(this.props.actions, action => action)}
		</div>
	);

	render() {
		return (
			<Popover
				trigger={(
					<div className="fidelis-action-link-trigger">
						<FontAwesomeIcon icon={faEllipsisV} />
					</div>
				)}
				content={this.makeContent()}
				position={this.props.popoverPosition}
			/>
		);
	}
}

ActionLink.propTypes = {
	actions: PropTypes.arrayOf(PropTypes.object),
	popoverPosition: PropTypes.string,
};

ActionLink.defaultProps = {
	popoverPosition: 'left',
};

export default ActionLink;
