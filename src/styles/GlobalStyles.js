import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  .light {
    --text-primary: ${theme`colors.indigo.700`};
    --text-primary-hover: ${theme`colors.indigo.800`};
    --text-secondary: ${theme`colors.indigo.400`};
    --text-secondary-hover: ${theme`colors.indigo.600`};
  }
  .dark {
    --text-primary: #22252d;
    --text-secondary: #222831;
  }
  body {
    ${tw`antialiased`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
