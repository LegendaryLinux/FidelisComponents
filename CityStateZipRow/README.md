# CityStateZipRow
An input for city, a select for state, and an input for zip in a single
horizontal row. In case your graphics designer hates you.

City is a simple `input` element.  
State is a `select` element populated with
`@fidelisppm/utils: getMiniStateOptions`  
Zip is an `input` element created by
`@fidelisppm/limited-input: {ZipInput}`

Props
---
**updateCity** (func)  
Function to run `onkeyup`.

**defaultCity** (string)  
Optional default value.

**updateState** (func)  
Function to run `onchange`.

**defaultState** (string)  
Optional default value.

**updateZip** (func)  
Function to run `onchange`.

**defaultZip** (string)  
Optional default value.

Usage
---
```jsx harmony
<CityStateZipRow
	updateCity={props.updateCity}
	defaultCity="Boston"
	updateState={props.updateState}
	defaultState="MA"
	updateZip={props.updateZip}
	defaultZip="02108"
/>
```
