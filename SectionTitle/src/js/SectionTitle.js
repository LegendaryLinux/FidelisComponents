import PropTypes from 'prop-types';
import React from 'react';
import '../styles/SectionTitle.scss';

const SectionTitle = props => (
	<div className="section-title">
		{props.text}
	</div>
);

SectionTitle.propTypes = {
	text:	PropTypes.string.isRequired,
};

export default SectionTitle;
