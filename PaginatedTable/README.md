# PaginatedTable
A paginated table made in React/ES6.

## Features
- Pagination!
- Sort by clicking on headers!
- Choose how many rows are shown per page!
- Null values automatically replaced by hyphens!
- Automatic formatting of phone numbers!
- Looks fancy!
- **Now includes a second component,** `HTTPaginatedTable`, which fetches
its data from a function you specify!

## Props

### `headers`
The first of two mandatory props is `headers`. This should contain an
array of objects. Each object has the following properties:
- `key`: (string) The name of a key provided in the `dataRows` prop
- `name`: (string) The name you want to be displayed on the table header
- `center` (bool) If true, the column header and data will be centered. Defaults to false
- `sortable`: (bool) If false, clicking the column header will not sort the data. Defaults to true

**Example `headers` array:**
```
const exampleHeaders = [
	{ key: 'first', name: 'First', center: true }, // Center defaults to false
	{ key: 'last', name: 'Last' },
	{ key: 'job', name: 'Job', sortable: false }, // Sortable defaults to true
];
```


### `dataRows`
The second mandatory prop is `dataRows`. This should be an array of objects, each representing
a row of data to be displayed in the table. Each data object may optionally contain a special
property `overrides`. This property should be an object whose properties are
named the same as the key it is intended to override. Its value will be
 displayed to the user instead of the value associated with its key. This allows you to sort and filter
by the real value, but show something different to the user.

**Example dataRows array:**
```
const exampleRows = [
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

### `entriesPerPage`
An optional prop which accepts an integer representing the number of rows
to display per page. Defaults to 10.

### `initialSortKey`
An optional prop which accepts a string representing a property found in the
`dataRows` objects. The table will render initially sorted by that value
according to the `initialSortAsc` prop.

### `initialSortAsc`
An optional prop which accepts a boolean value. If false, will sort the column
specified in `initialSortKey` in descending order when the table first renders.
Defaults to true.

### `initialPage`
An optional prop which accepts a boolean value. This represents the page number
to be displayed upon the initial render. If the value is greater than the
total number of pages, the last page will be displayed. Defaults to 1.

## How to use it
In your React app, import `PaginatedTable` and use it in your `render` function.
```
import PaginatedTable from '@fidelisppm/paginated-table';
...
<PaginatedTable headers={exampleHeaders} dataRows={exampleRows} />
``` 

# HTTPaginatedTable
A variant on PaginatedTable which pulls its data from a Promise
you provide.

## Props

### `headers`
An optional prop which accepts an array of objects specified in the
corresponding prop in `PaginatedTable` above. If not provided, the
resolution of `fetchPageData` must provide a headers object.

### `initialSortKey`
See `PaginatedTable` component.

### `initialSortAsc`
See `PaginatedTable` component.

### `allowSorting`
An optional prop which accepts a boolean that can be used to disable all
sorting functionality. Defaults to `false`, causing sorting to be disabled
by default in this component.

### `initialPage`
An optional prop which accepts an integer indicating which page the table
should request initially. Defaults to `1`.

### `loadingComponent`
An optional prop which accepts a React component which will be displayed
while the table is loading data. If not provided, a generic loading indicator
will be shown instead.

### `fetchPageData`
A mandatory prop which accepts a function which returns a Promise. The
function will be provided three arguments:  
- **pageNum**: Integer. The page to retrieve
- **sortValue**: String. A `key` from the objects provided in the `headers` prop
- **sortAsc**: Boolean. Indicates if the sorted data should be in ascending order

The function should return a promise which resolves into an object:
```js
const pageDataObject = {
  pageCount: 6, // Total number of pages available in result set
  headers: [], // See headers prop from PaginatedTable, not required if prop is provided
  data: [], // See dataRows prop from PaginatedTable
};
```

Example function:
```js
const fetchPageData = (pageNum, sortValue, sortAsc) => {
  return new Promise((resolve, reject) => {
    // Some code here
    resolve(pageDataObject);
  });
}
```

**Additional data filters:**  
If you need to apply filters to the data beyond the builtin sorting functionality, and you need
users to control those filters, you may use the parent component's state in your `fetchPageData`
function. Since the parent state will not cause a re-render on the table, you should manually
run the `HTTPaginatedTable` fetch function using a `ref` like so:
```js
// In parent component constructor
this.exampleRef = React.createRef();

// In a function in the parent component
const currentRef = this.exampleRef.current;
currentRef.fetchPageData(currentRef.state.currentPage);

// In parent component render() function
<HTTPaginatedTable ref={this.exampleRef} fetchPageData={fetchPageData} />
```

## How to use it
In your React app, import `{ HTTPaginatedTable }` and use it in
your `render` function.
```
import { HTTPaginatedTable } from '@fidelisppm/paginated-table';
...
<HTTPaginatedTable fetchPageData={fetchPageData} />
``` 
