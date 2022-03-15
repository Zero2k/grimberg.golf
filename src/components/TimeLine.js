import React from 'react';
import 'twin.macro';

export default function TimeLine() {
  return (
    <div>
      <div tw="container mx-auto flex flex-col items-start xl:flex-row gap-8">
        <div tw="flex flex-col w-full sticky xl:top-36 xl:w-1/3 mt-2">
          <p tw="text-primary uppercase tracking-wide">Tävlingar</p>
          <h3 tw="font-medium text-4xl leading-normal md:leading-relaxed mb-2">
            Planer inför 2012
          </h3>
          <p tw="text-gray-700 text-base md:text-xl mb-4">
            Här hittar du några av de tidigare tävlingar där jag har medverkat.
            Du kan också se vilka tävlingar som jag planerar att spel det
            kommande året.
          </p>
        </div>
        <div tw="ml-0 xl:ml-12 w-full xl:w-2/3 sticky">
          <div tw="container mx-auto w-full h-full">
            <div tw="relative flex-wrap overflow-hidden px-10 h-full">
              <div
                tw="border-2 border-blue-500 absolute h-full border"
                style={{
                  right: '50%',
                  border: '2px solid #3b82f6',
                  borderRadius: '1%',
                }}
              ></div>
              <div
                tw="border-2 border-blue-500 absolute h-full border"
                style={{
                  left: '50%',
                  border: '2px solid #3b82f6',
                  borderRadius: '1%',
                }}
              ></div>
              <div tw="mb-8 flex justify-between flex-row-reverse items-center w-full">
                <div tw="order-1 w-5/12"></div>
                <div tw="order-1 w-5/12 px-1 py-4 text-right">
                  <p tw="mb-3 text-base text-primary">21-22 maj, 2021</p>
                  <h4 tw="mb-3 font-bold text-lg md:text-2xl">
                    Folksam Paragolf Tour (Bohuslän-Dals)
                  </h4>
                </div>
              </div>
              <div tw="mb-8 flex justify-between items-center w-full ">
                <div tw="order-1 w-5/12"></div>
                <div tw="order-1 w-5/12 px-1 py-4 text-left">
                  <p tw="mb-3 text-base text-primary">28-29 juni, 2021</p>
                  <h4 tw="mb-3 font-bold text-lg md:text-2xl">
                    Henrik Stenson Paragolf Challange (Skåne)
                  </h4>
                </div>
              </div>
              <div tw="mb-8 flex justify-between flex-row-reverse items-center w-full ">
                <div tw="order-1 w-5/12"></div>
                <div tw="order-1 w-5/12 px-1 py-4 text-right">
                  <p tw="mb-3 text-base text-primary">1-2 juli, 2021</p>
                  <h4 tw="mb-3 font-bold text-lg md:text-2xl">
                    RF SM Folksam Paragolf Tour (Östergötland)
                  </h4>
                </div>
              </div>
              <div tw="mb-8 flex justify-between items-center w-full ">
                <div tw="order-1 w-5/12"></div>
                <div tw="order-1 w-5/12 px-1 py-4 text-left">
                  <p tw="mb-3 text-base text-primary">6-7 augusti, 2021</p>
                  <h4 tw="mb-3 font-bold text-lg md:text-2xl">
                    Folksam Paragolf Tour (Västmanland)
                  </h4>
                </div>
              </div>
              <div tw="mb-8 flex justify-between flex-row-reverse items-center w-full ">
                <div tw="order-1 w-5/12"></div>
                <div tw="order-1 w-5/12 px-1 py-4 text-right">
                  <p tw="mb-3 text-base text-primary">10-11 september, 2021</p>
                  <h4 tw="mb-3 font-bold text-lg md:text-2xl">
                    Folksam Paragolf Tour (Skåne)
                  </h4>
                </div>
              </div>
              <div tw="mb-8 flex justify-between items-center w-full ">
                <div tw="order-1 w-5/12"></div>
                <div tw="order-1 w-5/12 px-1 py-4 text-left">
                  <p tw="mb-3 text-base text-primary">18-21 november, 2021</p>
                  <h4 tw="mb-3 font-bold text-lg md:text-2xl">
                    Portugal Edga Algarve Open (Portugal)
                  </h4>
                </div>
              </div>
              <div tw="mb-8 flex justify-between flex-row-reverse items-center w-full ">
                <div tw="order-1 w-5/12"></div>
                <div tw="order-1 w-5/12 px-1 py-4 text-right">
                  <p tw="mb-3 text-base text-primary">21-23 juni, 2022</p>
                  <h4 tw="mb-3 font-bold text-lg md:text-2xl">
                    Czech Disabled Golf Masters (Prag)
                  </h4>
                </div>
              </div>
              {/* <div tw="mb-8 flex justify-between items-center w-full">
                <div tw="order-1 w-5/12"></div>

                <div tw="order-1  w-5/12 px-1 py-4">
                  <p tw="mb-3 text-base text-primary">12 May, 2021</p>
                  <h4 tw="mb-3 font-bold  text-lg md:text-2xl text-left">
                    Finale - X
                  </h4>
                  <p tw="text-base md:text-lg leading-snug text-opacity-100">
                    Lorem Ipsum is not simply random text. It has roots in a
                    piece of classical Latin literature from 45 BC, making it
                    over 2000 years old.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
