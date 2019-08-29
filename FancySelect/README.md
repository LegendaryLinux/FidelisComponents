# FancySelect
A React/JSX component which renders a replacement for a `<select>` node.

![https://imgur.com/vRiJi06.png](https://imgur.com/vRiJi06.png)

Props
-----
**options** (mandatory: array of objects)  
An array of objects having keys `name` and `value`. These objects will be used
to populate the list of selectable user options. An empty array will not be
accepted, and will cause a `new Error` to be thrown.

**selected** (optional: string|number)  
A `value` contained in one of the `options` props. This will be used to
pre-select an option from the list. If not provided, the first option
in the array will be automatically selected.

**handleOnChange** (mandatory: function)  
A function which will be invoked when the user selects an option. This function
will be provided a single argument, being the `value` of the chosen object
provided in the `options` prop. This function is automatically run when the
component is first mounted.

Example Usage
-------------
Install:
```bash
npm install --save @fidelisppm/fancy-select
``` 

Import:
```jsx harmony
import FancySelect from '@fidelisppm/fancy-select';
```

Use:
```jsx harmony
const opts = [
  {name: 'James T. Kirk', value: 'kirk'},
  {name: 'Leonard McCoy', value: 'mccoy'},
  ...
];

<FancySelect
  options={opts}
  selected="mccoy"
  handleOnChange={(val) => { console.log(val); }} // Will print "mccoy"
/>
```

Impress:  
[![https://imgur.com/2IglBnh.png](https://imgur.com/2IglBnh.png)](https://imgur.com/2IglBnh.png)
