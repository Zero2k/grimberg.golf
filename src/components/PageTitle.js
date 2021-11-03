import React from 'react';
import 'twin.macro';
import Section from './Section';

export default function PageTitle({ title }) {
  return (
    <Section tw="py-12 md:py-16 lg:py-20 text-center lg:text-left bg-gray-100">
      <h1 tw="text-2xl lg:text-4xl font-bold tracking-wider">{title}</h1>
    </Section>
  );
}
