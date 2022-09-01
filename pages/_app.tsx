import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import { GlobalStyle } from '../styles/Global.styles';
import { FC } from 'react';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);
// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <GlobalStyle />
//       <Component {...pageProps} />
//     </>
//   );
// }

export default wrapper.withRedux(WrappedApp);
