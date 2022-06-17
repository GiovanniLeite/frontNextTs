import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { ToastContainer } from 'react-toastify';

import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
      <ToastContainer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
