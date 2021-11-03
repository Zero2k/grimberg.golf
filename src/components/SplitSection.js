import React from 'react';
import 'twin.macro';

export default function SplitSection({ left, right }) {
  return (
    <div tw="px-5 sm:px-6 lg:px-8">
      <div tw="mx-auto max-w-7xl my-12 md:my-16 lg:my-20">
        <div tw="flex flex-wrap overflow-hidden">
          {/* Left section */}
          {left}
          {/* Right section */}
          {right}
        </div>
      </div>
    </div>
  );
}
