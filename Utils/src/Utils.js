import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * BannerMessage component
 * @param message {String} Message to display in the banner
 * @param isWarning {Boolean} If true, will make the banner background yellow
 * @param isError {Boolean} If true, will make the banner background red. Takes precedence over isWarning
 * @param alwaysOnTop {Boolean} If true, will use position: fixed. False uses position: static. Default false
 * @returns {JSX.Element|null}
 * @constructor
 */
const BannerMessage = ({message, isWarning=false, isError=false, alwaysOnTop=false }) => {
	const [hidden, setHidden] = useState(false);

	const baseStyle = {
		position: alwaysOnTop ? 'fixed' : 'static',
		top: 0,
		left: 0,
		width: '100vw',
		height: '50px',
		lineHeight: '50px',
		textAlign: 'center',
		zIndex: 50,
		boxShadow: '0 3px 4px 0 rgba(0,0,0,0.15)',
		color: '#ffffff',
		backgroundColor: isError ? '#ff0000' : (isWarning ? '#fbd913' : '#5ebf72'),
	};

	const closeStyle = {
		display: 'inline-block',
		float: 'right',
		marginRight: '0.75em',
		cursor: 'pointer',
	};

	useEffect(() => {
		// Leave error messages open until the user closes them
		if (isError) {return;}

		// Automatically close success and warning messages after ten seconds
		setTimeout(() => setHidden(true), 10000)
	}, []);

	// Don't show the banner if it's supposed to be hidden
	if (hidden) {
		Utils.resetBannerMessage(false);
	}

	return (
		<div style={baseStyle}>
			{message}
			<div className="fidelis-banner-close-container" onClick={() => setHidden(true)} style={closeStyle}>
				<FontAwesomeIcon icon={faTimes}/>
			</div>
		</div>
	);
};

class Utils {
	/**
	 * An object representing the US states
	 * @type {Object<string, string>}
	 */
	static states = {
		AL: 'Alabama',
		AK: 'Alaska',
		AS: 'American Samoa',
		AZ: 'Arizona',
		AR: 'Arkansas',
		CA: 'California',
		CO: 'Colorado',
		CT: 'Connecticut',
		DE: 'Delaware',
		FL: 'Florida',
		FM: 'Federated States of Micronesia',
		GA: 'Georgia',
		GU: 'Guam',
		HI: 'Hawaii',
		ID: 'Idaho',
		IL: 'Illinois',
		IN: 'Indiana',
		IA: 'Iowa',
		KS: 'Kansas',
		KY: 'Kentucky',
		LA: 'Louisiana',
		ME: 'Maine',
		MH: 'Marshall Islands',
		MD: 'Maryland',
		MA: 'Massachusetts',
		MI: 'Michigan',
		MN: 'Minnesota',
		MS: 'Mississippi',
		MO: 'Missouri',
		MT: 'Montana',
		NE: 'Nebraska',
		NV: 'Nevada',
		NH: 'New Hampshire',
		NJ: 'New Jersey',
		NM: 'New Mexico',
		NY: 'New York',
		NC: 'North Carolina',
		ND: 'North Dakota',
		MP: 'Northern Mariana Islands',
		OH: 'Ohio',
		OK: 'Oklahoma',
		OR: 'Oregon',
		PW: 'Palau',
		PA: 'Pennsylvania',
		PR: 'Puerto Rico',
		RI: 'Rhode Island',
		SC: 'South Carolina',
		SD: 'South Dakota',
		TN: 'Tennessee',
		TX: 'Texas',
		VI: 'U.S. Virgin Islands',
		UM: 'U.S. Minor Outlying Islands',
		UT: 'Utah',
		VT: 'Vermont',
		VA: 'Virginia',
		WA: 'Washington',
		WV: 'West Virginia',
		WI: 'Wisconsin',
		WY: 'Wyoming',
	};

	/**
	 * Returns an object containing US states
	 * @returns {Object<string, string>} - An object with state codes as keys and state names as values.
	 */
	static getStates() {
		return this.states;
	}

	/**
	 * Generate an optgroup of options for the selected states
	 * @returns {JSX.Element} - The generated state options wrapped in an optgroup.
	 */
	static getStateOptions() {
		return (
			<optgroup key="United States" label="United States">
				{
					Object.keys(this.states).map((abbr) => (
						<option value={abbr} key={abbr}>
							{this.states[abbr]}
						</option>
					))
				}
			</optgroup>
		);
	}

	/**
	 * Retrieves an array of mini state options.
	 * @returns {Array} An array of abbreviated state options.
	 */
	static getMiniStateOptions() {
		return Object.keys(this.states).map((abbr) => (
			<option value={abbr} key={abbr}>
				{abbr}
			</option>
		));
	}

	/**
	 * Verifies if the given email appears valid.
	 * @param {string} email - The email to be verified.
	 * @returns {boolean} - Returns true if the email is valid, otherwise returns false.
	 */
	static verifyEmail(email) {
		if (typeof (email) === 'undefined' || email === null) { return false; }
		const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email);
	}

	/**
	 * Verifies if a phone number appears valid.
	 * @param {string} phone - The phone number to verify.
	 * @return {boolean} - True if the phone number is valid, false otherwise.
	 */
	static verifyPhone(phone) {
		if (typeof (phone) === 'undefined' || phone === null) { return false; }
		const regex = /^[0-9]{10}$/;
		return regex.test(phone);
	}

	/**
	 * Verifies if a US zip code appears valid
	 * @param {string} zip - The zip code to be verified.
	 * @returns {boolean} - Returns true if the zip code is valid, false otherwise.
	 */
	static verifyZip(zip) {
		if (typeof (zip) === 'undefined' || zip === null) { return false; }
		const regex = /^[0-9]{5}$/;
		return regex.test(zip);
	}

	/**
	 * Verifies whether a zip code with optional plus-four code appears valid.
	 * @param {string} zip - The zip code to be verified.
	 * @returns {boolean} - True if the zip code is valid, otherwise false.
	 */
	static verifyZipPlusFour(zip) {
		if (typeof (zip) === 'undefined' || zip === null) { return false; }
		const regex = /^[0-9]{5}(-?[0-9]{4})?$/;
		return regex.test(zip);
	}

	/**
	 * Verifies if a given string contains a valid number.
	 * @param {string} string - The string to be verified.
	 * @returns {boolean} - True if the string represents a valid number, false otherwise.
	 */
	static verifyNumber(string) {
		if (typeof (string) === 'undefined' || string === null) { return false; }
		return /^\d*$/.test(string);
	}

	/**
	 * Verifies if a string represents a valid decimal number.
	 * @param {string} string - The string to be verified.
	 * @returns {boolean} - Returns true if the string represents a valid decimal number, false otherwise.
	 */
	static verifyDecimal(string) {
		if (typeof (string) === 'undefined' || string === null) { return false; }
		const regex = /^\d(\d*|\.)+\d*$/;
		return regex.test(string);
	}

	/**
	 * Destroys any existing batter message
	 * @return {void}
	 */
	static resetBannerMessage(replace=true) {
		// Delete any previous banner message's parent div
		const oldBanner = document.getElementById('fidelis-banner-message-container');
		if (oldBanner){
			document.body.removeChild(oldBanner);
		}

		if (!replace) {
			return;
		}

		// Create a new div for our banner message
		const bannerParent = document.createElement('div');
		bannerParent.id = 'fidelis-banner-message-container';
		document.body.prepend(bannerParent);
	}

	/**
	 * Displays a success banner with the given message.
	 * @param {string} message - The message to display
	 * @param alwaysOnTop {Boolean} If true, stays on top with position fixed. Default false for position static
	 */
	static showSuccessBanner(message, alwaysOnTop=false) {
		this.resetBannerMessage();
		const root = createRoot(document.getElementById('fidelis-banner-message-container'));
		root.render(<BannerMessage message={message} alwaysOnTop={alwaysOnTop} />);
	}

	/**
	 * Displays a warning banner with the given message.
	 * @param {string} message - The message to display
	 * @param alwaysOnTop {Boolean} If true, stays on top with position fixed. Default false for position static
	 */
	static showWarningBanner(message, alwaysOnTop=false) {
		this.resetBannerMessage();
		const root = createRoot(document.getElementById('fidelis-banner-message-container'));
		root.render(<BannerMessage message={message} isWarning={true} alwaysOnTop={alwaysOnTop} />);
	}

	/**
	 * Displays an error banner with the given message.
	 * @param {string} message - The message to display
	 * @param alwaysOnTop {Boolean} If true, stays on top with position fixed. Default false for position static
	 */
	static showErrorBanner(message, alwaysOnTop=false) {
		this.resetBannerMessage();
		const root = createRoot(document.getElementById('fidelis-banner-message-container'));
		root.render(<BannerMessage message={message} isError={true} alwaysOnTop={alwaysOnTop} />);
	}

	/**
	 * Checks if an array contains only unique elements.
	 * Check is shallow, and based on equivalency rather than accuracy.
	 * @param {array} arr - The input array to be checked.
	 * @returns {boolean} - Returns true if the array contains only unique elements, otherwise returns false.
	 * @deprecated
	 */
	static isArrayUnique(arr) {
		const temp = [];
		let unique = true;

		arr.forEach((val) => {
			if (temp.includes(val)) {
				unique = false;
			}

			temp.push(val);
		});

		return unique;
	}

	/**
	 *
	 * @param param
	 * @returns {*|null}
	 */
	static getParam(param) {
		let value = null;
		let thisParam = [];
		location.search.substring(1).split('&').forEach((item) => {
			thisParam = item.split('=');
			if (thisParam[0] === param) {
				value = decodeURIComponent(thisParam[1]);
			}
		});
		return value;
	}

	/**
	 * Generates a UUID (Universally Unique Identifier) based on the given parameter.
	 * @param {number} a - The parameter used to generate the UUID.
	 * @returns {string} - The generated UUID.
	 */
	static genUUID(a) {
		return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
			.replace(/[018]/g, this.genUUID);
	}

	/**
	 * Transform a string into a readable phone number. If there are more than ten digits present in the
	 * passed value, only the first ten will be returned
	 * @param {string} phone
	 * @returns {string}
	 */
	static makeReadablePhone = (phone) => {
		const stripped = phone.replace(/\D/g, '');
		return `(${stripped.substring(0, 3)}) ${stripped.substring(3, 6)} - ${stripped.substring(6, 10)}`;
	};

	/**
	 * Parse an ISO-8601 string and return an array of parts found by the regex
	 * @param iso8601
	 * @returns {*}
	 */
	static parseISO8601String = (iso8601) => {
		const isoRegex = /^(\d{4})-(\d{2})-(\d{2})[T| ](\d{2}):(\d{2}):(\d{2})(\.\d{3})?(Z|[+|-]\d{2}:\d{2})?$/;
		const dateParts = iso8601.match(isoRegex);

		if (dateParts === null) {
			throw new Error('Invalid date string passed to parseISO8601String. An ISO-8601 compliant string is required.');
		}

		return dateParts;
	};

	/**
	 * Generate a date in localtime, and set that date using a provided ISO-8601 string
	 * @param iso8601
	 * @returns {Date}
	 */
	static genLocaltimeDateFromISO8601String = (iso8601) => {
		const dateParts = Utils.parseISO8601String(iso8601);

		const date = new Date();
		date.setFullYear(parseInt(dateParts[1], 10));
		date.setMonth(parseInt(dateParts[2], 10) - 1);
		date.setDate(parseInt(dateParts[3], 10));
		date.setHours(parseInt(dateParts[4], 10));
		date.setMinutes(parseInt(dateParts[5], 10));
		date.setSeconds(parseInt(dateParts[6], 10));
		date.setMilliseconds(0);
		return date;
	};
}

export default Utils;
