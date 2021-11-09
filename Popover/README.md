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
Defaults to `bottom`.

**hideArrow** (bool):  
Optional. If true, the arrow will not be displayed.  
Defaults to `false`.

**distance** (int):  
Optional. If positive, the distance to move the content of the popover away from the trigger.
If negative, moves the content towards the trigger. If less than 8, will cause the arrow
to disappear.
Defaults to `8`.

**skidding** (int):  
Optional. Distance to slide the popover and its arrow along the edge of the trigger.  
Defaults to `0`.

## Usage

```jsx harmony
import { Popover } from '@fidelisppm/popover';

<Popover
  trigger={document.getElementById('example-element')}
  content={<span>I am popover text!</span>}
  position="bottom"
  hideArrow={false}
  distance={8}
  skidding={0}
/>
```
