import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/global'
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // decorators: [
  //   (Story:any) => (
  //     <ThemeProvider theme={theme}>
  //       {Story()}
  //     </ThemeProvider>
  //   )
  // ]
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        {Story()}
    </ThemeProvider>
  )
]