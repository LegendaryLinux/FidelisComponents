import React from 'react';
import ReactDOM from 'react-dom';
import Popover from './Popover';

const itemStyle = {
  width: 'calc(100% - 1em)',
  padding: '0.5em',
};

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
};
const triggerStyle = { padding: '8px', backgroundColor: 'grey' };

const Example = () => (
  <div style={wrapperStyle}>
    <Popover
      content={(
        <div style={{ width: '10em', border: '1px solid black' }}>
          <div style={itemStyle}>Item 1</div>
          <div style={itemStyle}>Item 2</div>
          <div style={itemStyle}>Item 3</div>
        </div>
      )}
      trigger={<div style={triggerStyle}>Click me!</div>}
    />
  </div>
);

window.onload = function(){
  ReactDOM.render(<Example />, document.getElementById('app'));
};
