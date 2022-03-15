import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  .light {
    --text-primary: ${theme`colors.blue.500`};
    --text-primary-hover: ${theme`colors.blue.600`};
    --text-secondary: ${theme`colors.blue.300`};
    --text-secondary-hover: ${theme`colors.blue.400`};
    --bg-primary: ${theme`colors.blue.500`};
    --bg-primary-hover: ${theme`colors.blue.600`};
    --bg-secondary: ${theme`colors.green.400`};
    --bg-secondary-hover: ${theme`colors.green.500`};
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
