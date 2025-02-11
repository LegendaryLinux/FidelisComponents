import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import InfiniteScrollTable from './InfiniteScrollTable';

class App extends Component {
	headers = [
		{ key: 'username', name: 'Username', },
		{ key: 'first_name', name: 'First Name', },
		{ key: 'last_name', name: 'Last Name', },
		{ key: 'email', name: 'Email', },
		{ key: 'date_of_birth', name: 'Date of Birth' },
	];

	loadMoreData = (marker = null) => new Promise((resolve) => {
		setTimeout(() => {
			fetch('https://random-data-api.com/api/v2/users?size=10&response_type=json', {method: 'GET',})
				.then(async (response) => {
					const data = [];
					const json = await response.json();
					json.forEach((row) => {
						row.overrides = {
							email: <a href={`mailto:${row.email}`}>{row.email}</a>,
							date_of_birth: new Date(row.date_of_birth).toLocaleString(),
						};
						data.push(row);
					});

					resolve({
						data: data,
						marker: Math.floor(Math.random() * 2000000000000)
					});
				});
		}, 3000);
	});

	render() {
		return (
			<div>
				<InfiniteScrollTable headers={this.headers} loadMoreData={this.loadMoreData} />
			</div>
		);
	}
}

window.onload = () => {
	createRoot(document.getElementById('app')).render(<App />);
};
