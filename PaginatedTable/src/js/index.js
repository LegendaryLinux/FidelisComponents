import React from 'react';
import ReactDOM from 'react-dom';
import PaginatedTable, { HTTPaginatedTable } from "./PaginatedTable";

const headers = [
	{ key: 'title', name: 'Title', center: false },
	{ key: 'platform', name: 'Platform', center: false },
	{ key: 'genre', name: 'Genre', center: false },
	{ key: 'completed', name: 'Completed', center: false },
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

const fetchDataSlowly = (page) => {
	switch(page){
		case 1: return new Promise((resolve, reject) => {
			setTimeout(() => {resolve({headers, pageCount:3, data:data.slice(0,5)})},5000)
		});
		case 2: return new Promise((resolve, reject) => {
			setTimeout(() => {resolve({headers, pageCount:3, data:data.slice(5,10)})},5000)
		});
		case 3: return new Promise((resolve, reject) => {
			setTimeout(() => {resolve({headers, pageCount:3, data:data.slice(10,15)})},5000)
		});
		default: return null;
	}
};

const App = () => (
	<div>
		<h3>PaginatedTable</h3>
		<PaginatedTable dataRows={data} headers={headers} />
		<h3>HTTPaginatedTable (5s delay)</h3>
		<HTTPaginatedTable fetchPageData={fetchDataSlowly} />
	</div>
);

window.onload = () => {
	ReactDOM.render(<App />,document.getElementById('app'));
};
