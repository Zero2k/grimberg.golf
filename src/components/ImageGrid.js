import React from 'react';
import 'twin.macro';
import Image from 'next/image';

export default function ImageGrid() {
  return (
    <div tw="max-w-7xl mx-auto px-6 lg:px-20 xl:px-12 mt-10 mb-6 lg:mb-32">
      <div tw="flex justify-center">
        <h3 tw="font-medium text-center text-4xl pb-10 xl:pb-20">
          Bilder från tävlingar där jag har medverkat
        </h3>
      </div>
      <div tw="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
        <div tw="lg:(transform scale-110 -rotate-6 -translate-x-5)">
          <div tw="w-full h-40 lg:h-60 xl:h-80 bg-white rounded lg:rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center">
            <img
              tw="object-cover object-center w-full h-40 lg:h-60 xl:h-80 rounded lg:rounded-xl"
              src="https://images.unsplash.com/photo-1605144884374-ecbb643615f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=692&q=80"
              alt=""
            />
          </div>
        </div>
        <div tw="col-start-3 lg:(transform scale-90 rotate-6 translate-x-7 translate-y-14)">
          <div tw="w-full h-40 lg:h-60 xl:h-80 bg-white rounded lg:rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center">
            <img
              tw="object-cover object-center w-full h-40 lg:h-60 xl:h-80 rounded lg:rounded-xl"
              src="https://images.unsplash.com/photo-1597369150710-64d6e1b61ad1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
        </div>
        <div tw="lg:(transform scale-90 -translate-x-7 translate-y-11)">
          <div tw="w-full h-40 lg:h-60 xl:h-80 bg-white rounded lg:rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center">
            <img
              tw="object-cover object-center w-full h-40 lg:h-60 xl:h-80 rounded lg:rounded-xl"
              src="https://images.unsplash.com/photo-1597369237991-5c95d1b6e0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
        </div>
        <div tw="lg:(transform translate-y-24)">
          <div tw="w-full h-40 lg:h-60 xl:h-80 bg-white rounded lg:rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center">
            <img
              tw="object-cover object-bottom w-full h-40 lg:h-60 xl:h-80 rounded lg:rounded-xl"
              src="https://images.unsplash.com/photo-1532508583690-538a1436f423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
              alt=""
            />
          </div>
        </div>
        <div tw="row-start-1 col-start-2 col-span-2 lg:(transform translate-x-12)">
          <div tw="w-full h-40 lg:h-60 xl:h-80 bg-white rounded lg:rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center">
            <img
              tw="object-cover object-bottom w-full h-40 lg:h-60 xl:h-80 rounded lg:rounded-xl"
              src="https://images.unsplash.com/photo-1584837140804-599306fb37f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
