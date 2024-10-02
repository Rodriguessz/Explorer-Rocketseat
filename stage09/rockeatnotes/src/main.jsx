import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Details } from './pages/details';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';


import {theme} from "./styles/theme"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Details />
    </ThemeProvider>
  </StrictMode>,
)
