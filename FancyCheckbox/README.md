# FancyCheckbox
A React/JSX component which renders a replacement for the default browser checkbox input.
A standard checkbox is placed into the DOM, but is hidden and controlled through a label.

## Props
**id** (optional: string)  
Applies an id to the invisible checkbox input

**className** (optional: string)  
Applies your specified classes to the container div of the FancyCheckbox component

**checked** (optional: boolean)  
If true, the checkbox will be checked when rendered. Defaults to false.

**onChange** (optional: function)
A function to call when the checkbox is toggled. This function accepts a single
`event` argument. This is the event fired by the DOM, passed through to your function.  

## Example Usage
Install:
```shell script
npm install --save @fidelisppm/fancy-checkbox
```

Use:
```jsx harmony
// Import the component
import FancyCheckbox from '@fidelisppm/fancy-checkbox';

// In your component
const myFunc = (event) => {
  if (event.target.checked) {
    // Do things
  }
};

// In your render function
<FancyCheckbox id="foo" onChange={myFunc} checked={true} />
```
