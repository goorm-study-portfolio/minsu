import { ThemeProvider } from "@emotion/react";
import theme from "@app/styles/theme.ts";
import type { ReactNode } from "react";

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
