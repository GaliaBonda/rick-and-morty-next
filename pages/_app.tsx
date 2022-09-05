import type { AppProps } from 'next/app';
import { wrapper } from '../store/configureStore';
import { GlobalStyle } from '../assets/Global.styles';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

const WrappedApp = wrapper.withRedux(App);

export default WrappedApp;
