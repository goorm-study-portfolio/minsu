import '@emotion/react'

declare module '@emotion/react' {
  import { ColorsTypes, FontsTypes } from '@app/styles/theme';
  export interface Theme {
    colors: ColorsTypes;
    fonts: FontsTypes;
  }
}
