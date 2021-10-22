import React from 'react';
import tw from 'twin.macro';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Content = tw.div``;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </React.Fragment>
  );
}
