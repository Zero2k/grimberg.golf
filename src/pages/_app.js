import GlobalStyles from '@/styles/GlobalStyles';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(App);
