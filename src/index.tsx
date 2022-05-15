import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './style.scss';

const App = () => (
  <div>
    <h1>
      Hello <span className={styles.react}>React!</span>
    </h1>
  </div>
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
