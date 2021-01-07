# AutoComplete
A custom AutoComplete component which optionally prevents custom input

Props
---
**options** (array of objects)
An array of objects used to populate the option box. Each object must contain a `name`
and `value` key.

**onUpdate** (function)
A function which accepts a single parameter `value`. This function is called when the
value of the AutoComplete is updated.

**allowUserValues** (boolean)
An optional prop which specifies if user-provided values will be accepted. If false,
the component will require that a value from the options array be selected. Defaults
to true.

Usage
---
```jsx harmony
import AutoComplete from '@fidelisppm/autocomplete';

const options = [
    { name: 'James T. Kirk', value: 'kirk' },
    { name: 'Spock', value: 'spock' },
    { name: 'Leonard McCoy', value: 'mccoy' },
    { name: 'Nyota Uhura', value: 'uhura' },
    { name: 'Montgomery Scott', value: 'scott' },
    { name: 'Pavel Chekov', value: 'chekov' },
    { name: 'Hikaru Sulu', value: 'sulu' },
];

const onUpdate = (value) => { this.setState({ value }) };


// In render()
<AutoComplete
    options={options}
    onUpdate={onUpdate}
    allowUserValues={false}
/>
```
