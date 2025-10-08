import { createRoot } from 'react-dom/client';
import App from "@app/App";

// if (import.meta.env.DEV) {
if (import.meta.env.VITE_ENABLE_MSW === 'true') {
  const { browser } = await import('@shared/mock/browser');
  await browser.start({ onUnhandledRequest: 'warn' });
}

createRoot(document.getElementById('root')!).render(
  <App />,
);
