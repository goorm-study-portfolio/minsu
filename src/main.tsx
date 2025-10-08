import { createRoot } from 'react-dom/client';
import App from "@app/App";

async function bootstrap() {
  if (import.meta.env.VITE_ENABLE_MSW === 'true') {
    const { browser } = await import('@shared/mock/browser');
    await browser.start({
      onUnhandledRequest: 'warn',
    });
  }

  const container = document.getElementById('root')!;
  createRoot(container).render(<App />);
}

bootstrap();
