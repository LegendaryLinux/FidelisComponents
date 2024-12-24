import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './BannerMessage.scss';

/**
 * BannerMessage component
 * @param message {String} Message to display in the banner
 * @param isWarning {Boolean} If true, will make the banner background yellow
 * @param isError {Boolean} If true, will make the banner background red. Takes precedence over isWarning
 * @returns {JSX.Element|null}
 * @constructor
 */
const BannerMessage = ({message, isWarning=false, isError=false, }) => {
	const [hidden, setHidden] = useState(true);

	useEffect(() => {
		// Leave error messages open until the user closes them
		if (isError) {return;}

		// Automatically close success and warning messages after ten seconds
		setTimeout(() => setHidden(true), 10000)
	}, []);

	if (hidden) {
		return null;
	}

	const bannerClass = isError ?
		'fidelis-banner-error' :
		(
			isWarning ?
				'fidelis-banner-warning' :
				'fidelis-banner-success'
		)

	return (
		<div className={bannerClass}>
			{message}
			<div className="fidelis-banner-close-container" onClick={() => setHidden(true)}>
				<FontAwesomeIcon icon={faTimes}/>
			</div>
		</div>
	);
};

export default BannerMessage;
