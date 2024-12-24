import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Popover from '@fidelisppm/popover';
import './ActionLink.scss';

/**
 * @param actions {Array}
 * @param popoverPosition {string}
 * @constructor
 */
const ActionLink = ({actions, popoverPosition='left'}) => {
	return (
		<Popover
			trigger={(
				<div className="fidelis-action-link-trigger">
					<FontAwesomeIcon icon={faEllipsisV} />
				</div>
			)}
			content={(
				<div className="fidelis-action-link-content">
					{actions.map((action) => action)}
				</div>
			)}
			placement={popoverPosition}
		/>
	);
};

export default ActionLink;
