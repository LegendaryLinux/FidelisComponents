# InfiniteScrollTable
A table which attempts to load more data when the last row is scrolled into view

## Features

## Props

### `headers` (Array, required)
Should contain an array of objects. Each object has the following properties:
- `key`: (string) The name of a key provided in the `dataRows` prop
- `name`: (string) The name you want to be displayed on the table header
- `center` (bool) If true, the column header and data will be centered. Defaults to false
- `sortable`: (bool) If false, clicking the column header will not sort the data. Defaults to true

**Example `headers` array:**
```js
const exampleHeaders = [
	{ key: 'first', name: 'First', center: true }, // Center defaults to false
	{ key: 'last', name: 'Last' },
	{ key: 'job', name: 'Job', sortable: false }, // Sortable defaults to true
];
```

### loadMoreData (Function, required)
A function which returns a `Promise`. The function should accept a single optional
argument, `marker`. The promise should resolve to an object containing two
properties, `marker` and `data`.

`marker` should be a string used to identify the start of the next set of data to load

`data` should be an array of objects containing the fetched dataset

**Example `loadMoreData` function:**
```js
const loadMoreData = (marker = null) => new Promise((resolve, reject) => {
    // Request data from a remote source using the provided marker argument
    // ...
    // Possibly do some work to build a properly formatted data array
    // ...
    // Resolve with the marker and data
    resolve({
        marker: 'c92fnsz8h34v',
        data: [ {}, {}, ... ], // See example below
    });
});
```

**Example `data` array:**
```js
[
	{ first: 'James', last: 'Kirk', job: 'Captain' },
	{ first: 'Hikaru', last: 'Sulu', job: 'Helmsman' },
	{ first: 'Nyota', last: 'Uhura', job: 'Communications' },
	{ first: 'Montgomery', last: 'Scott', job: 'Engineer' },
	{ first: 'Pavel', last: 'Chekov', job: 'Tactical' },
	{ first: null, last: 'Spock', job: 'Science' },
	{ first: 'Jean-Luc', last: 'Picard', job: 'Captain' },
	{ first: 'Geordie', last: 'LaForge', job: 'Engineer' },
	{ first: 'Beverley', last: 'Crusher', job: 'Doctor' },
	{ first: 'Deanna', last: 'Troi', job: 'Counselor' },
	{ first: null, last: 'Data', job: 'Science' },
	{ first: 'Worf', last: 'Son of Mogh', job: 'Tactical' },
	{ first: 'William', last: 'Riker', job: 'First Officer' },
	{
		first: null,
		last: 'Guinan',
		job: 'Bartender',
		overrides: {
			last: <b>Guinan</b>,
		},
	},
];
```
In the example above, the last object in the array will have a true
value "Guinan" in its `last` property, but `<b>Guinan</b>` will be rendered
instead.

### loadingComponent (Component, optional)
A component to show in place of the "Load More" button while data is loading. If
not provided, defaults to a spinning FontAwesome icon.

### noDataMessage (String, optional)
If no data can be fetched, this string will be displayed inside a div with class `no-data`.

### initialMarker (String, optional)
If provided, the initial request will be made using the provided marker.

### initialSortKey (String, optional)
If provided, the results in the table will be automatically sorted by this value
after the initial fetch. The order of sorting is determined by `initialSortAsc`.

### initialSortAsc (Bool, optional)
This property is used along with `initialSortKey` to determine the order of
sorting after the initial fetch. Has no effect if `initialSortKey` is not provided.
Defaults to `true`.

## How to use it
In your React app, import `LoadMoreTable` and use it in
your `render` function.
```js
// In your imports
import InfiniteScrollTable from '@fidelisppm/infinite-scroll-table';

// In your render function:
<InfiniteScrollTable headers={headerArray} loadMoreData={fetchDataPromise} />
```
