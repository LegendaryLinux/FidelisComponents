import React from 'react';
import ReactDOM from 'react-dom';
import { forEach as _forEach, map as _map } from 'lodash-es';
import Moment from 'react-moment';
import 'moment-timezone';
import BannerMessage from '@fidelisppm/banner-message';

class Utils {
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

	static getStates() {
		return this.states;
	}

	static getStateOptions(selected = []) {
		const options = _map(Object.keys(this.states),
			(state, id) => (
				<option value={state} key={id} selected={selected.indexOf(state) !== -1}>
					{this.states[state]}
				</option>
			));

		return (
			<optgroup key="United States" label="United States">
				{ options }
			</optgroup>
		);
	}

	static getMiniStateOptions() {
		return _map(Object.keys(this.states), state => <option value={state} key={state}>{state}</option>);
	}

	static verifyEmail(email) {
		if (typeof (email) === 'undefined' || email === null) { return false; }
		const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email);
	}

	static verifyPhone(phone) {
		if (typeof (phone) === 'undefined' || phone === null) { return false; }
		const regex = /^[0-9]{10}$/;
		return regex.test(phone);
	}

	static verifyZip(zip) {
		if (typeof (zip) === 'undefined' || zip === null) { return false; }
		const regex = /^[0-9]{5}$/;
		return regex.test(zip);
	}

	static verifyZipPlusFour(zip) {
		if (typeof (zip) === 'undefined' || zip === null) { return false; }
		const regex = /^[0-9]{5}(-?[0-9]{4})?$/;
		return regex.test(zip);
	}

	static verifyNumber(string) {
		if (typeof (string) === 'undefined' || string === null) { return false; }
		const regex = /^\d*$/;
		return regex.test(string);
	}

	static verifyDecimal(string) {
		if (typeof (string) === 'undefined' || string === null) { return false; }
		const regex = /^\d(\d*|\.)+\d*$/;
		return regex.test(string);
	}

	static resetBannerMessage() {
		// Delete any previous banner message's parent div
		const oldBanner = document.getElementById('fidelis-banner-message-container');
		if (oldBanner !== null) document.body.removeChild(oldBanner);

		// Create a new div for our banner message
		const bannerParent = document.createElement('div');
		bannerParent.id = 'fidelis-banner-message-container';
		document.body.insertBefore(bannerParent, document.body.firstChild);
	}

	static showSuccessBanner(message) {
		this.resetBannerMessage();
		ReactDOM.render(
			<BannerMessage message={message} />,
			document.getElementById('fidelis-banner-message-container'),
		);
	}

	static showWarningBanner(message) {
		this.resetBannerMessage();
		ReactDOM.render(
			<BannerMessage message={message} isWarning={true} />,
			document.getElementById('fidelis-banner-message-container'),
		);
	}

	static showErrorBanner(message) {
		this.resetBannerMessage();
		ReactDOM.render(
			<BannerMessage message={message} isError={1 === 1} />,
			document.getElementById('fidelis-banner-message-container'),
		);
	}

	static isArrayUnique(arr) {
		const temp = [];
		let unique = true;

		_forEach(arr, (val) => {
			if (temp.indexOf(val) > -1) {
				unique = false;
			}

			temp.push(val);
		});

		return unique;
	}

	static getParam(param) {
		let value = null;
		let thisParam = [];
		location.search.substr(1).split('&').forEach((item) => {
			thisParam = item.split('=');
			if (thisParam[0] === param) {
				value = decodeURIComponent(thisParam[1]);
			}
		});
		if (value) { return value; }
		return null;
	}

	static genUUID(a) {
		return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
			.replace(/[018]/g, this.genUUID);
	}

	/**
	 * Transform an ISO-8601 date string and return a human-readable date string
	 * @param dateString
	 * @returns {string}
	 */
	static makeReadableDate = dateString => <Moment date={dateString} interval={0} format="ddd MMM DD YYYY, h:mma" />;

	/**
	 * Transform a string into a readable phone number. If there are more then ten digits present in the
	 * passed value, only the first ten will be returned
	 * @param {string} phone
	 * @returns {string}
	 */
	static makeReadablePhone = (phone) => {
		const stripped = phone.replace(/\D/g, '');
		return `(${stripped.substr(0, 3)}) ${stripped.substring(3, 6)}-${stripped.substr(6)}`;
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
