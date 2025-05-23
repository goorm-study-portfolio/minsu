import '@emotion/react'
import type { BreakpointsTypes } from "@app/@types/theme";

declare module '@emotion/react' {
  import { ColorsTypes, FontsTypes } from '@app/styles/theme';
  export interface Theme {
    colors: ColorsTypes;
    fonts: FontsTypes;
    breakpoints: BreakpointsTypes;
  }
}
