import React from 'react';
import 'twin.macro';

export default function SplitSection() {
  return (
    <div tw="mx-auto max-w-7xl px-4 my-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div tw="flex flex-wrap overflow-hidden">
        <div tw="w-full xl:w-1/2 overflow-hidden self-center md:text-center lg:text-left">
          <h3 tw="font-bold text-4xl pb-4">
            Sponsored by some amazing companies
          </h3>
          <p tw="text-gray-700 italic text-base md:text-xl w-full lg:w-5/6">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>

          <div tw="mt-6 sm:flex sm:justify-center lg:justify-start">
            <div>
              <a
                href="#"
                tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-700 hover:bg-indigo-800"
              >
                View all
              </a>
            </div>
          </div>
        </div>

        <div tw="w-full xl:w-1/2 overflow-hidden mt-6 xl:mt-0">
          <div tw="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4, 5, 6].map(index => (
              <div key={index} tw="border h-auto rounded hover:bg-gray-100">
                <img
                  tw="p-8"
                  src="https://static.wixstatic.com/media/620c21_9e02d1d38f5449b3be2d1661347bdcde~mv2.png/v1/fill/w_440,h_157,al_c,q_85,usm_0.66_1.00_0.01/Black%20logo%20-%20no%20background.webp"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
