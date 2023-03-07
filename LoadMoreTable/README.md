# LoadMoreTable
A table with a "Load More" button

## Features

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

## How to use it
In your React app, import `LoadMoreTable` and use it in
your `render` function.
```
import LoadMoreTable from '@fidelisppm/load-more-table';
...
<LoadMoreTable  />
``` 
