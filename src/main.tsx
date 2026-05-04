import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { WeddingProvider } from './state/WeddingContext.tsx';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WeddingProvider>
      <App />
    </WeddingProvider>
  </StrictMode>,
);
