import GlobalStyles from '@/styles/GlobalStyles';
import { appWithTranslation } from 'next-i18next';
import { AnimateSharedLayout } from 'framer-motion';

const App = ({ Component, pageProps }) => (
  <AnimateSharedLayout>
    <GlobalStyles />
    <Component {...pageProps} />
  </AnimateSharedLayout>
);

export default appWithTranslation(App);
