import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import FacebookIcon from '@/icons/facebook-icon';
import TwitterIcon from '@/icons/twitter-icon';

const Container = tw.div`bg-gray-900 text-gray-100 -mb-8`;
const Content = tw.div`max-w-7xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`text-lg border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-8`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-400 transition duration-300 mx-4`}
  svg {
    ${tw`w-10 h-10`}
  }
`;
const CopyrightText = tw.p`text-center mt-8 font-medium tracking-wide text-sm text-gray-200`;

export default function Footer() {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            {/* <LogoImg src={logo} /> */}
            <LogoText>Magnus Grimberg</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="#">Startsida</Link>
            <Link href="#">Golf</Link>
            <Link href="#">RP</Link>
            <Link href="#">Sponsorer</Link>
            <Link href="#">Om sidan</Link>
            <Link href="#">Kontakt</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright {new Date().getFullYear()}, Magnus Grimberg. All
            Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
}
