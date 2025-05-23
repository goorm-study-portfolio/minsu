import { ThemeProvider } from "@emotion/react";
import type { ReactNode } from "react";
import theme from "@app/styles/theme.ts";

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
