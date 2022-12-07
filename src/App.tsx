import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme'
import { Router } from './routes/routes';
import { CartContextProvider } from './contexts/CartContext';

export function App() {


  return (
    <CartContextProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router/>
    </ThemeProvider>
    </CartContextProvider>
  )
}

