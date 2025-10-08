import { AppRouterProvider, AppThemeProvider } from "@app/providers";
import { Global } from "@emotion/react";
import { globalStyles } from "@app/styles/global.ts";
import { ThemeProvider } from "@shared/components/ThemProvider.tsx";
import { QueryProvider } from "@app/providers/QueryProvider.tsx";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <AppThemeProvider>
        <ThemeProvider>
          <QueryProvider>
            <AppRouterProvider />
          </QueryProvider>
        </ThemeProvider>
      </AppThemeProvider>
    </>
  );
}

export default App;
