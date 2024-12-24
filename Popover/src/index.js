import React from 'react';
import {createRoot} from 'react-dom/client';
import Popover from './Popover';

const outerWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  height: '100vh',
  margin: 0,
  padding: 0,
};

const innerWrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
};

const triggerStyle = {
  padding: '8px', backgroundColor: 'grey'
};

const itemStyle = {
  width: 'calc(100% - 1em)',
  padding: '0.5em',
  textAlign: 'center',
};

const Example = () => (
  <div style={outerWrapperStyle}>
    <div style={innerWrapperStyle}>
      <Popover
        content={(
          <div style={{ width: '10em', border: '1px solid black' }}>
            <div style={itemStyle}>Item 1</div>
            <div style={itemStyle}>Item 2</div>
            <div style={itemStyle}>Item 3</div>
          </div>
        )}
        trigger={<div style={triggerStyle}>I have 30 pixels of positive distance.</div>}
        distance={30}
      />
      <Popover
        content={(
          <div style={{ width: '10em', border: '1px solid black' }}>
            <div style={itemStyle}>Item 1</div>
            <div style={itemStyle}>Item 2</div>
            <div style={itemStyle}>Item 3</div>
          </div>
        )}
        trigger={<div style={triggerStyle}>Hi, mom!</div>}
      />
    </div>
    <div style={innerWrapperStyle}>
      <Popover
        content={(
          <div style={{ width: '10em', border: '1px solid black' }}>
            <div style={itemStyle} onClick={() => console.log('Hello!')}>Console log "Hello!"</div>
            <div style={itemStyle} onClick={() => alert('Hello!')}>Alert "Hello!"</div>
            <div style={itemStyle}>Item 3</div>
          </div>
        )}
        trigger={<div style={triggerStyle}>I have a normal Popover on bottom.</div>}
        position="bottom"
      />
    </div>
    <div style={innerWrapperStyle}>
      <Popover
        content={(
          <div style={{ width: '10em', border: '1px solid black' }}>
            <div style={itemStyle}>Item 1</div>
            <div style={itemStyle}>Item 2</div>
            <div style={itemStyle}>Item 3</div>
          </div>
        )}
        trigger={<div style={triggerStyle}>I have 30 pixels of negative distance.</div>}
        distance={-30}
      />
      <Popover
        content={(
          <div style={{ width: '10em', border: '1px solid black' }}>
            <div style={itemStyle}>Item 1</div>
            <div style={itemStyle}>Item 2</div>
            <div style={itemStyle}>Item 3</div>
          </div>
        )}
        trigger={<div style={triggerStyle}>Don't forget your towel!</div>}
      />
    </div>
    <div style={{position: 'absolute', top: 0, left: 0}}>
      <Popover
        content={(
          <div style={{ border: '1px solid black' }}>
            <div style={itemStyle}>This is some really wide text!</div>
            <div style={itemStyle}>Wow, there&apos;s so much text in this box!</div>
            <div style={itemStyle}>Who would even do this in a popover!?</div>
          </div>
        )}
        trigger={<div style={triggerStyle}>Upper-left corner with a hidden arrow.</div>}
        hideArrow={true}
      />
    </div>
    <div style={{position: 'absolute', top: 0, right: 0}}>
      <Popover
        content={(
          <div style={{ border: '1px solid black' }}>
            <div style={itemStyle}>This is some really wide text!</div>
            <div style={itemStyle}>Wow, there&apos;s so much text in this box!</div>
            <div style={itemStyle}>Who would even do this in a popover!?</div>
          </div>
        )}
        trigger={<div style={triggerStyle}>I'm in a corner!</div>}
      />
    </div>
    <div style={{position: 'absolute', bottom: 0, left: 0}}>
      <Popover
        content={(
          <div style={{ border: '1px solid black' }}>
            <div style={itemStyle}>This is some really wide text!</div>
            <div style={itemStyle}>Wow, there&apos;s so much text in this box!</div>
            <div style={itemStyle}>Who would even do this in a popover!?</div>
          </div>
        )}
        trigger={<div style={triggerStyle}>Unmodified in the lower-left corner.</div>}
      />
    </div>
    <div style={{position: 'absolute', bottom: 0, right: 0}}>
      <Popover
        content={(
          <div style={{ border: '1px solid black' }}>
            <div style={itemStyle}>This is some really wide text!</div>
            <div style={itemStyle}>Wow, there&apos;s so much text in this box!</div>
            <div style={itemStyle}>Who would even do this in a popover!?</div>
          </div>
        )}
        trigger={<div style={triggerStyle}>Hi there, friend!</div>}
      />
    </div>
  </div>
);

window.onload = function() {
  const root = createRoot(document.getElementById('app'));
  root.render(<Example />);
};
