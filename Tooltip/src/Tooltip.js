import React from 'react';
import './Tooltip.scss';

const Tooltip = ({target, tooltip}) => {
	return (
		<div className="fidelis-tooltip" data-fidelis-tooltip={tooltip}>
			{target}
		</div>
	);
};

export default Tooltip;
