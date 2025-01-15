import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import Utils from './Utils';

const Test = () => {
  const [text, setText] = useState('Default Text');

  const showSuccess = () => {
    Utils.showSuccessBanner(text);
  };

  const showWarning = () => {
    Utils.showWarningBanner(text);
  };

  const showError = () => {
    Utils.showErrorBanner(text);
  };

  const clearBanner = () => {
    Utils.resetBannerMessage();
  };

  return (
    <div>
      <input onChange={(e) => setText(e.target.value || '')} defaultValue={text} />
      <br />
      <button onClick={showSuccess}>Show Success</button>
      <button onClick={showWarning}>Show Warning</button>
      <button onClick={showError}>Show Error</button>
      <button onClick={clearBanner}>Dismiss Banner</button>
    </div>
  );
};

window.addEventListener('load', () => {
  const root = createRoot(document.getElementById('app'));
  root.render(<Test />);
});
