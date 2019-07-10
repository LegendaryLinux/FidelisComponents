import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Tooltip.scss';

const Tooltip = props => (
	<div className="fidelis-tooltip" data-fidelis-tooltip={props.tooltip}>
		{props.target}
	</div>
);

Tooltip.propTypes = {
	target: PropTypes.object.isRequired,
	tooltip: PropTypes.string.isRequired,
};

export default Tooltip;
