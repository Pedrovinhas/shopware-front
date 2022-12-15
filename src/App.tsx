import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme'
import { Router } from './routes/routes';
import { CartContextProvider } from './contexts/CartContext';
import { AuthContextProvider } from './contexts/AuthContext';

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

