# StringToggler
A component which renders two strings of text, and toggles between them
when clicked. Mostly useful for prompting a user to click to display
sensitive data.

Props:
---

**cover** (string):  
Optional. The string to display initially. Defaults to `Click to show`

**secret** (string):
Mandatory. The secret which will be revealed when the component is clicked

**reToggle** (bool):
Optional. If true, the component will automatically display the contents
of `cover` after the secret has been revealed for thirty seconds. Defaults
to `false`.

Usage:
---
```jsx harmony
<StringToggler
	cover="Click to reveal temporary password"
	secret="12345"
	reToggle={true}
/>
```
