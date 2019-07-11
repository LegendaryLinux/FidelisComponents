import React from 'react';
import PropTypes from 'prop-types';
import Utils from '@fidelisppm/utils';
import { ZipInput } from '@fidelisppm/limited-input';

const CityStateZipRow = props => (
	<span className="fidelis-city-state-zip-row" style={{ display: 'flex', flexDirection: 'row' }}>
		<input
			style={{ width: '10em' }}
			onKeyUp={props.updateCity}
			defaultValue={props.defaultCity}
			className="csz-city"
		/>
		<select
			style={{ marginLeft: '0.25em', width: '5em' }}
			onChange={props.updateState}
			defaultValue={props.defaultState}
			className="csz-state"
		>{Utils.getMiniStateOptions()}
		</select>
		<ZipInput
			style={{ marginLeft: '0.25em', width: '5em' }}
			onKeyUp={props.updateZip}
			defaultValue={props.defaultZip}
			className="csz-zip"
		/>
	</span>
);

CityStateZipRow.propTypes = {
	updateCity: PropTypes.func.isRequired,
	defaultCity: PropTypes.string,
	updateState: PropTypes.func.isRequired,
	defaultState: PropTypes.string,
	updateZip: PropTypes.func.isRequired,
	defaultZip: PropTypes.string,
};

export default CityStateZipRow;
