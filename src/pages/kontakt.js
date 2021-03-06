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
          <div tw="max-w-5xl mx-auto shadow-lg">
            <div tw="overflow-hidden">
              <div tw="grid grid-cols-1 md:grid-cols-2 bg-gray-50 rounded space-x-0 lg:space-x-2">
                <div tw="p-6 lg:p-10 bg-gray-100 rounded">
                  <h1 tw="text-4xl text-gray-800 font-extrabold tracking-tight">
                    Behöver du kontakta mig?
                  </h1>

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
                    <div tw="ml-4 tracking-wide font-medium w-52">
                      Mossvägen 3, SE-30571, Haverdal. Sverige
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
                      +46 (0) 76 94 11 403
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
                      magnus.grimberg@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    </React.Fragment>
  );
}
