import React from 'react';
import 'twin.macro';

export default function TimeLine() {
  return (
    <div>
      <div tw="container mx-auto flex flex-col items-start xl:flex-row gap-8">
        <div tw="flex flex-col w-full sticky xl:top-36 xl:w-1/3 mt-2 md:mt-12">
          <p tw="text-primary uppercase tracking-wide">
            Achievements and upcoming games
          </p>
          <p tw="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
            My Schedule for 2022
          </p>
          <p tw="text-base mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div tw="ml-0 xl:ml-12 xl:w-2/3 sticky">
          <div tw="container mx-auto w-full h-full">
            <div tw="relative flex-wrap overflow-hidden p-10 h-full">
              <div
                tw="border-2 border-indigo-700 absolute h-full border"
                style={{
                  right: '50%',
                  border: '2px solid #4338ca',
                  borderRadius: '1%',
                }}
              ></div>
              <div
                tw="border-2 border-indigo-700 absolute h-full border"
                style={{
                  left: '50%',
                  border: '2px solid #4338ca',
                  borderRadius: '1%',
                }}
              ></div>
              <div tw="mb-8 flex justify-between flex-row-reverse items-center w-full">
                <div tw="order-1 w-5/12"></div>
                <div tw="order-1 w-5/12 px-1 py-4 text-right">
                  <p tw="mb-3 text-base text-primary">1-6 May, 2022</p>
                  <h4 tw="mb-3 font-bold text-lg md:text-2xl">Qualifier - X</h4>
                  <p tw="text-base md:text-lg leading-snug text-opacity-100">
                    Lorem Ipsum is not simply random text. It has roots in a
                    piece of classical Latin literature from 45 BC, making it
                    over 2000 years old.
                  </p>
                </div>
              </div>
              <div tw="mb-8 flex justify-between items-center w-full ">
                <div tw="order-1 w-5/12"></div>
                <div tw="order-1 w-5/12 px-1 py-4 text-left">
                  <p tw="mb-3 text-base text-primary">6-9 May, 2022</p>
                  <h4 tw="mb-3 font-bold text-lg md:text-2xl">Tour - X</h4>
                  <p tw="text-base md:text-lg leading-snug text-opacity-100">
                    Lorem Ipsum is not simply random text. It has roots in a
                    piece of classical Latin literature from 45 BC, making it
                    over 2000 years old.
                  </p>
                </div>
              </div>
              <div tw="mb-8 flex justify-between flex-row-reverse items-center w-full ">
                <div tw="order-1 w-5/12"></div>
                <div tw="order-1 w-5/12 px-1 py-4 text-right">
                  <p tw="mb-3 text-base text-primary"> 10 May, 2022</p>
                  <h4 tw="mb-3 font-bold text-lg md:text-2xl">Tour - X</h4>
                  <p tw="text-base md:text-lg leading-snug text-opacity-100">
                    Lorem Ipsum is not simply random text. It has roots in a
                    piece of classical Latin literature from 45 BC, making it
                    over 2000 years old.
                  </p>
                </div>
              </div>

              <div tw="mb-8 flex justify-between items-center w-full">
                <div tw="order-1 w-5/12"></div>

                <div tw="order-1  w-5/12 px-1 py-4">
                  <p tw="mb-3 text-base text-primary">12 May, 2022</p>
                  <h4 tw="mb-3 font-bold  text-lg md:text-2xl text-left">
                    Finale - X
                  </h4>
                  <p tw="text-base md:text-lg leading-snug text-opacity-100">
                    Lorem Ipsum is not simply random text. It has roots in a
                    piece of classical Latin literature from 45 BC, making it
                    over 2000 years old.
                  </p>
                </div>
              </div>
            </div>
            <img
              tw="mx-auto -mt-36 md:-mt-36"
              src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
