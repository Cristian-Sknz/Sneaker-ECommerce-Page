import React from 'react';
import GlobalStyle from'./styles/global';
import { ThemeProvider } from 'styled-components';

import LightTheme from './styles/theme/light';
import NavbarUI from './components/Navbar';
import ProductUI from './components/Product';

const App: React.FC<any> = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <>
        <NavbarUI/>
        <ProductUI/>
      </>
      <GlobalStyle/>
    </ThemeProvider>
  );
};

export default App;
