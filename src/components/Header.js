import 'react';
import 'twin.macro';
import Link from 'next/link';

export default function Header({ header }) {
  return (
    <div tw="relative bg-white overflow-hidden px-5 sm:px-6 lg:px-8">
      <div tw="max-w-7xl mx-auto">
        <div tw="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            tw="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main tw="py-10 mx-auto max-w-7xl sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28">
            <div tw="sm:text-center lg:text-left">
              <h1 tw="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span tw="block xl:inline">{header.headerTitle.part1}</span>{' '}
                <span tw="block text-primary xl:inline">
                  {header.headerTitle.part2}
                </span>
              </h1>
              <p tw="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {header.headerText}
              </p>
              <div tw="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <Link href="/golf" passHref>
                    <a tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primaryHover md:py-4 md:text-lg md:px-10">
                      {header.headerBtnColor}
                    </a>
                  </Link>
                </div>
                <div tw="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/retinitis-pigmentosa" passHref>
                    <a tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-secondary hover:bg-secondaryHover md:py-4 md:text-lg md:px-10">
                      {header.headerBtnLight}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div tw="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          tw="h-56 w-full object-cover object-[50% 25%] sm:h-80 md:h-96 lg:w-full lg:h-full"
          src="https://ucb9b3a4d44f35c2d4feb1000702.previews.dropboxusercontent.com/p/thumb/ABj8fpvgTv-58-KKzVJb2cxgj4VruDmrWO1sBqhhIqYG98DCUAuwe_545AmLWEhGaTa06HQKS_MrPv9hkczlYtupADrG3wVpOCxXZagCn1VBq__J0omGkfXZPWIILWWdxs_-HLW2H2fHD_z0_YPGtBXGg6dVyHuvxO_QLtuj5wKWV-9fafKa4d_8tzVowedxvyS0wYErXMq1OgbG_RtKHayZsYWiQ4XKJf-aHyBAOyTJR51fX4MSVdvz3SlF8OQA39aDfNDEvHb_DA2yVB82MEAqTSv6GV8L55o0YxrAQkdkFdXkXb7MrfcVN7ltmFjWfuyx4tPDMxrGUtuU-J3BznSV7Veh2dtddwIFw6UUukCsIODPJyYT8zBR5pX2EnzzL0A/p.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}
