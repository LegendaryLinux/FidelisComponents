# LimitedInput
A collection of `<input>` style components which limit the user's
capability of entering text in various ways

## Components

### LimitedInput
Display an input preventing the user from entering more than a specified
amount of characters. Also display a character count with the
input.

#### Props
**maxChars** (number)  
The maximum number of characters allowed. Defaults to 64.

**alwaysShowLimit** (bool)  
If true, always display the character limit. If false, display the limit
only when it is reached or exceeded. Defaults to false.

**alertPosition** (string)  
`bottom` or `right`. Defaults to `bottom`. 

```jsx harmony
import LimitedInput from 'limited-input';

// In render function
<LimitedInput
	maxChars={32}
	alwaysShowLimit={true}
	alertPosition="right" 
/>
```

### NumberInput
Display an input which allows only digits to be entered

```jsx harmony
import { NumberInput } from 'limited-input';

// In render function
<NumberInput id="foo" className="bar"/>
```

### PhoneInput
Display an input allowing only digits to be entered, and show an adaptive
hint in the text field in the form of a phone number format

```jsx harmony
import { PhoneInput } from 'limited-input';

// In render function
<PhoneInput id="foo" className="bar"/>
```

### ZipInput
Display an input allowing only digits to be entered, and show an adaptive
hint in the text field in the form of a five-digit zip code

```jsx harmony
import { ZipInput } from 'limited-input';

// In render function
<ZipInput id="foo" className="bar"/>
```
