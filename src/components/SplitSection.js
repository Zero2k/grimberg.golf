import React from 'react';
import tw, { styled } from 'twin.macro';

const Row = styled.div(({ reverse = false }) => [
  tw`flex flex-wrap overflow-hidden`,
  reverse && tw`flex-row-reverse`,
]);

export default function SplitSection({ left, right, reverse }) {
  return (
    <div tw="px-5 sm:px-6 lg:px-8">
      <div tw="mx-auto max-w-7xl my-5 xl:my-10">
        <Row reverse={reverse}>
          {/* Left section */}
          {left}
          {/* Right section */}
          {right}
        </Row>
      </div>
    </div>
  );
}
