import { createRoot } from 'react-dom/client';
import App from "@app/App";

if (import.meta.env.DEV) {
  const { browser } = await import('@shared/mock/browser')
  await browser.start({ onUnhandledRequest: 'warn' });
}

createRoot(document.getElementById('root')!).render(
  <App />,
);
