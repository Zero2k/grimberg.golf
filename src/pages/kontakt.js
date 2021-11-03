import React from 'react';
import 'twin.macro';
import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import Section from '@/components/Section';

export default function Kontakt() {
  return (
    <React.Fragment>
      <Layout>
        <PageTitle title="Kontakt" />
        <Section>
          <div tw="max-w-5xl mx-auto">
            <div tw="overflow-hidden">
              <div tw="grid grid-cols-1 md:grid-cols-2 bg-gray-50 rounded space-x-0 lg:space-x-2">
                <div tw="p-6 lg:p-10 bg-gray-100 rounded">
                  <h1 tw="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight">
                    Get in touch
                  </h1>
                  <p tw="text-lg sm:text-2xl font-medium text-gray-600 mt-2">
                    Fill in the form to start a conversation
                  </p>

                  <div tw="flex items-center mt-8 text-gray-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      tw="w-8 h-8 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div tw="ml-4 tracking-wide font-medium w-40">
                      Acme Inc, Street, State, Postal Code
                    </div>
                  </div>

                  <div tw="flex items-center mt-5 text-gray-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      tw="w-8 h-8 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div tw="ml-4 tracking-wide font-medium w-40">
                      +44 1234567890
                    </div>
                  </div>

                  <div tw="flex items-center mt-5 text-gray-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      tw="w-8 h-8 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div tw="ml-4 tracking-wide font-medium w-40">
                      info@acme.org
                    </div>
                  </div>
                </div>

                <form tw="p-6 lg:p-10 flex flex-col justify-center">
                  <div tw="flex flex-col">
                    <label htmlFor="name" tw="hidden">
                      Namn
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Namn"
                      tw="mt-2 py-3 px-3 rounded bg-white border border-gray-400 text-gray-800 font-medium focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div tw="flex flex-col mt-2">
                    <label htmlFor="email" tw="hidden">
                      E-post
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="E-post"
                      tw="mt-2 py-3 px-3 rounded bg-white border border-gray-400 text-gray-800 font-medium focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div tw="flex flex-col mt-2">
                    <label htmlFor="tel" tw="hidden">
                      Text
                    </label>
                    <textarea
                      name="text"
                      rows="3"
                      id="text"
                      placeholder="Text"
                      tw="mt-2 py-3 px-3 rounded bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    tw="w-full bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full mt-4 hover:bg-indigo-800 disabled:(opacity-80 cursor-not-allowed)"
                    disabled
                  >
                    Skicka
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    </React.Fragment>
  );
}
