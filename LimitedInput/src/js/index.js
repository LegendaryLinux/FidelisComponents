import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LimitedInput, { NumberInput, PhoneInput, ZipInput } from "./LimitedInput";
import '../styles/index.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.niRef = React.createRef();
	}

	controlNumberInput = (event) => this.niRef.current.value = event.target.value;

	render() {
		return (
			<div id="limited-input-test-wrapper">
				<h2>Limited Input:</h2>

				<div className="input-wrapper">
					Limited Input:<br />
					<LimitedInput alwaysShowLimit={true} alertPosition="bottom" maxChars={16} />
				</div>

				<div className="input-wrapper">
					Number Input:<br />
					<NumberInput ref={this.niRef} />
				</div>

				<div className="input-wrapper">
					Phone Input:<br />
					<PhoneInput />
				</div>

				<div className="input-wrapper">
					Zip Input:<br />
					<ZipInput />
				</div>

				<div className="input-wrapper">
					<table>
						<tbody>
							<tr>
								<th>Number Input control:</th>
								<td><input onKeyUp={this.controlNumberInput} /></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

window.onload = () => {
	ReactDOM.render(<App />, document.getElementById('app'));
};
