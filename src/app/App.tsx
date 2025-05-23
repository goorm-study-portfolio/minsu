import { AppRouterProvider, AppThemeProvider } from "@app/providers";
import { Global } from "@emotion/react";
import { globalStyles } from "@app/styles/global.ts";

function App() {

  return (
    <AppThemeProvider>
      <Global styles={globalStyles} />
      <AppRouterProvider />
    </AppThemeProvider>
  )
}

export default App
