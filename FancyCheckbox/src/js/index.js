import React, { Component } from 'react';
import {createRoot} from 'react-dom/client';
import FancyCheckbox from "./FancyCheckbox";

const containerStyle = {
	margin: '1em',
};

class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChecked: false,
		};
	}

	handleChange = (event) => {
		this.setState({ isChecked: event.target.checked });
	};

	render() {
		return (
			<div style={containerStyle}>
				<FancyCheckbox id="one" value="1" name="one" /> Starts unchecked, no onChange<br/>
				<FancyCheckbox checked={true} id="two" value="2" /> Starts checked, no onChange<br />
				<FancyCheckbox onChange={this.handleChange} id="three" /> Starts unchecked, toggles message below<br />
				<FancyCheckbox disabled={true} /> Disabled checkbox
				<br /><br />
				The box is { this.state.isChecked ? 'checked' : 'empty' }!
			</div>
		);
	}
}

window.onload = () => {
	const root = createRoot(document.getElementById('app'));
	root.render(<Example />);
};
