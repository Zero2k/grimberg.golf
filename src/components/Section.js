import React from 'react';
import 'twin.macro';

export default function Section({ children, ...rest }) {
  return (
    <div {...rest} tw="py-10 px-5 sm:px-6 lg:px-8">
      <div tw="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
