import React, {useState} from 'react';
import './StringToggler.scss';

/**
 * @param secret {String} Secret value to display
 * @param cover {String} Value used as placeholder for secret value
 * @param reToggle {Boolean} If true, automatically re-hide the secret value after a given number of seconds
 * @param reToggleDuration {Number} If re-toggle is true, secret will be re-hidden after this number of seconds
 * @constructor
 */
const StringToggles = ({secret, cover='Click to show', reToggle=false, reToggleDuration=30}) => {
	const [showSecret, setShowSecret] = useState(false);

	const toggleSecret = () => {
		if (reToggle) {
			setTimeout(() => setShowSecret(false), reToggleDuration * 1000)
		}

		setShowSecret(true);
  };

	return (
		<span onClick={toggleSecret} className="string-toggler">
			{showSecret ? secret : cover}
		</span>
	);
};

export default StringToggler;
