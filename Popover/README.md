# Popover
A React component which displays a popover when a target element is clicked.

Props
---

**trigger** (object):  
Required. A DOM element which will display the popover when clicked.

**content** (object):  
Required. A DOM element which will be rendered inside the popover.

**position** (string):  
Optional. The position relative to the trigger where the popover will be
displayed. Acceptable values are `top`, `bottom`, `left`, and `right`.
Defaults to `left`.

Usage
---

```jsx harmony
<Popover
	trigger={document.getElementById('example-element')}
	content={<span>I am popover text!</span>}
	position="top"
/>
```
