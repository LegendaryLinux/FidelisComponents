import React, { Component } from 'react';
import {createRoot} from 'react-dom/client';
import TextMask from './TextMask';

class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value1: '(123) 456-7890',
			value2: null,
		};
	}

	updateValue1 = (evt) => this.setState({ value1: evt.target.value || null });
	updateValue2 = (evt) => this.setState({ value2: evt.target.value || null });

	render() {
		return (
			<div id="text-mask-example">
				<TextMask
					{...this.props}
					mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
					showMask={false}
					placeholder={this.props.placeholder ? this.props.placeholder : '(316) 555-1114'}
					keepCharPositions={true}
					onKeyUp={this.updateValue1}
					value={this.state.value1}
				/>
				<br />
				Current Value: {this.state.value1}

				<br /><br />

				<TextMask
					{...this.props}
					mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
					showMask={false}
					placeholder={this.props.placeholder ? this.props.placeholder : '(316) 555-1114'}
					keepCharPositions={true}
					onKeyUp={this.updateValue2}
				/>
				<br />
				Current Value: {this.state.value2}
			</div>
		);
	}
}

window.onload = function(){
	const root = createRoot(document.getElementById('app'));
	root.render(<Example />);
};
