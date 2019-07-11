# ReactModal
A modal component to make your life easier.

Props
---
**trigger** (object)  
An element which will be rendered on the DOM and, when clicked, will 
cause the modal to appear. The object provided will be wrapped
in a `span`, and given an onclick event.

**content** (object)  
The content of the modal body. This will be rendered on the page, but is
not visible to the user until the trigger is clicked. 

Usage
---
```jsx harmony
<ReactModal
	trigger={<span>Click me!</span>}
	content={<div>Whatever you want to put in the modal</div>}
/>
```
