import React, { Component } from 'react';
import {createRoot} from 'react-dom/client';
import PaginatedTable, { HTTPaginatedTable } from "./PaginatedTable";

const headers = [
	{ key: 'title', name: 'Title', center: false },
	{ key: 'platform', name: 'Platform', center: false },
	{ key: 'genre', name: 'Genre', center: false },
	{ key: 'completed', name: 'Completed', center: false },
];

const customHeaders = [
	{ key: 'title', name: 'Game Name', center: false },
	{ key: 'platform', name: 'System', center: false },
	{ key: 'genre', name: 'Game Type', center: false },
	{ key: 'completed', name: 'Did I Finish It?', center: false },
];

const data = [
	{
		title: 'The Legend of Zelda: A Link to the Past',
		platform: 'SNES',
		genre: 'Adventure',
		completed: 'Yes',
	},
	{
		title: 'Super Metroid',
		platform: 'SNES',
		genre: 'Action / Adventure',
		completed: 'Yes',
	},
	{
		title: 'Spyro the Dragon',
		platform: 'PS1',
		genre: 'Adventure / Platformer',
		completed: 'No',
	},
	{
		title: 'Mass Effect',
		platform: 'PC / 360 / PS3',
		genre: 'Action / RPG',
		completed: 'Yes',
	},
	{
		title: 'Dark Souls',
		platform: 'PC / 360 / PS3',
		genre: 'Action / Adventure / RPG',
		completed: 'Yes',
	},
	{
		title: 'Celeste',
		platform: 'PC / XB1 / PS4 / Switch',
		genre: 'Platformer',
		completed: 'Yes',
	},
	{
		title: 'Monster Hunter',
		platform: 'PS2',
		genre: 'Action',
		completed: 'No',
	},
	{
		title: 'Dark Cloud',
		platform: 'PS2',
		genre: 'Action / RPG',
		completed: 'No',
	},
	{
		title: 'Final Fantasy',
		platform: 'NES',
		genre: 'RPG',
		completed: 'No',
	},
	{
		title: 'Star Wars: Knights of the Old Republic',
		platform: 'PC / XBOX',
		genre: 'RPG',
		completed: 'Yes',
	},
	{
		title: 'Blaster Master',
		platform: 'NES',
		genre: 'Action / Adventure',
		completed: 'No',
	},
	{
		title: 'Starfox 64',
		platform: 'N64',
		genre: 'Rail Shooter',
		completed: 'Yes',
	},
	{
		title: 'Chrono Trigger',
		platform: 'SNES',
		genre: 'RPG',
		completed: 'Yes',
	},
	{
		title: 'Sonic the Hedgehog',
		platform: 'Sega Genesis',
		genre: 'Adventure',
		completed: 'Yes',
	},
	{
		title: 'Super Mario Bros.',
		platform: 'NES',
		genre: 'Platformer',
		completed: 'Yes',
	},
];

const fetchDataSlowly = (page, sortValue=null, sortAscending=null, delay=2) => {
	const sortedData = data;
	if (sortValue) {
		sortedData.sort((a, b) => (
			sortAscending ?
				((a[sortValue] > b[sortValue]) ? 1 : (b[sortValue] > a[sortValue]) ? -1 : 0) :
				((a[sortValue] > b[sortValue]) ? -1 : (b[sortValue] > a[sortValue]) ? 1 : 0)
		));
	}

	switch(page){
		case 1: return new Promise((resolve, reject) => {
			setTimeout(() => {resolve({headers, pageCount:3, data:sortedData.slice(0,5)})},5000)
		});
		case 2: return new Promise((resolve, reject) => {
			setTimeout(() => {resolve({headers, pageCount:3, data:sortedData.slice(5,10)})},5000)
		});
		case 3: return new Promise((resolve, reject) => {
			setTimeout(() => {resolve({headers, pageCount:3, data:sortedData.slice(10,15)})},5000)
		});
		default: return null;
	}
};

class App extends Component {
	constructor(props) {
		super(props);
		this._child = React.createRef();
	}

	render() {
		return (
			<div>
				<h3>PaginatedTable</h3>
				<PaginatedTable dataRows={data} headers={headers} />
				<h3>HTTPaginatedTable (2s delay)</h3>
				<HTTPaginatedTable fetchPageData={fetchDataSlowly} />
				<h3>HTTPaginatedTable (manual headers)</h3>
				<HTTPaginatedTable fetchPageData={fetchDataSlowly} headers={customHeaders} />
				<h3>
					HTTPaginatedTable (sortable)
					<button onClick={() => {this._child.current.fetchPageData(this._child.current.state.currentPage) }}>Force Re-render</button>
				</h3>
				<HTTPaginatedTable fetchPageData={fetchDataSlowly} allowSorting={true} ref={this._child} />
			</div>
		);
	}
}

window.onload = () => {
	const root = createRoot(document.getElementById('app'));
	root.render(<App />);
};
