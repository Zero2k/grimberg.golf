import React from 'react';
import 'twin.macro';
import Section from './Section';

export default function PageTitle({ title }) {
  return (
    <Section tw="py-12 md:py-16 lg:py-20 text-left bg-gray-100">
      <h1 tw="text-4xl lg:text-5xl font-bold tracking-wider">{title}</h1>
    </Section>
  );
}
