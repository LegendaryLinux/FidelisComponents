# Popover
A React component which displays a popover when a target element is clicked.

## Props

**trigger** (object):  
Required. A DOM element which will display the popover when clicked.

**content** (object):  
Required. A DOM element which will be rendered inside the popover.

**position** (string):  
Optional. The position relative to the trigger where the popover will be
displayed. Acceptable values are `top`, `bottom`, `left`, and `right`.  
Defaults to `top`.

**hideArrow** (bool):  
Optional. If true, the arrow will not be displayed.  
Defaults to `false`.

**arrowColor** (string):  
Optional. The color of the popover arrow.  
Defaults to "#000000".

**arrowSize** (int):  
Optional. The size in pixels of the width of the popover arrow.  
Defaults to 6.

**distance** (int):  
Optional. The distance in pixels the popover will be rendered away from the trigger.  
Defaults to 0.

## Usage

```jsx harmony
import { Popover } from '@fidelisppm/popover';

<Popover
  trigger={document.getElementById('example-element')}
  content={<span>I am popover text!</span>}
  position="top"
  hideArrow={false}
  arrowColor="#000000"
  arrowSize={6}
  distance={0}
/>
```
