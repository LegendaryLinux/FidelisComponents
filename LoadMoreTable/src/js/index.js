import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	render() {
		return (
			<div>
				LoadMoreTable
			</div>
		);
	}
}

window.onload = () => {
	ReactDOM.render(<App />,document.getElementById('app'));
};
