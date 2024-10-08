import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import {theme} from "./styles/theme"

import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { Details } from './pages/details';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignIn />
    </ThemeProvider>
  </StrictMode>,
)
