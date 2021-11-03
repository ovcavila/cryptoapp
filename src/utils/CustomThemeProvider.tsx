import { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { theme } from '../../styles/theme';

export const CustomThemeProvider: FC = ({children}) => (
  <SCThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </SCThemeProvider>
);
