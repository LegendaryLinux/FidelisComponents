# ActionLink
A clickable vertical ellipsis image that displays a popover to the user.
Intended to contain a div with a list of clickable options.

Props
---
**actions** (array of objects)  
Each object in the provided array should be renderable by React. It is
recommended to use divs.

**popoverPosition** (string)  
The position the popover should appear relative to the action link.
Acceptable values are `top`, `left`, `right`, and `bottom`. Defaults to
`left`.

Usage
---
```jsx harmony
<ActionLink
	actions: {[
		<div>Update</div>,
		<div>Delete</div>
	]}
	position: 'left'
/>
```
