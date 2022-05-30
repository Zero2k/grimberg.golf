import React from 'react';
import 'twin.macro';

export default function Results() {
  const results = [
    {
      name: 'Order of Merit',
      tour: 'Folksam Paragolf Tour',
      course: 'Barsebäck Golf & Sports Club',
      county: 'Skåne',
      placement: '4',
      date: '2021-XX-XX',
    },
    {
      name: 'Henrik Stenson',
      tour: 'Paragolf Challenge Barsebäck G & CC',
      course: 'Barsebäck Golf & Sports Club',
      county: 'Skåne',
      placement: '1',
      date: '2020-07-02',
    },
  ];

  return (
    <div tw="flex flex-col">
      <div tw="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div tw="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div tw="overflow-hidden border-b border-gray-200">
            <table tw="min-w-full divide-y divide-gray-200">
              <thead tw="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    tw="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Tävling
                  </th>
                  <th
                    scope="col"
                    tw="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Golfbana
                  </th>
                  <th
                    scope="col"
                    tw="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Placering
                  </th>
                  <th
                    scope="col"
                    tw="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Datum
                  </th>
                </tr>
              </thead>
              <tbody tw="bg-white divide-y divide-gray-200">
                {results.map(result => (
                  <tr key={result.name}>
                    <td tw="px-6 py-4 whitespace-nowrap">
                      <div tw="flex items-center">
                        <div>
                          <div tw="text-lg font-medium text-gray-900">
                            {result.name}
                          </div>
                          <div tw="text-sm text-gray-500">{result.tour}</div>
                        </div>
                      </div>
                    </td>
                    <td tw="px-6 py-4 whitespace-nowrap">
                      <div tw="text-base text-gray-900">{result.course}</div>
                      <div tw="text-sm text-gray-500">{result.county}</div>
                    </td>
                    <td tw="px-6 py-4 whitespace-nowrap">
                      <span tw="w-6 h-6 inline-flex items-center justify-center text-base font-medium rounded-full bg-green-100 text-green-800">
                        {result.placement}
                      </span>
                    </td>
                    <td tw="px-6 py-4 whitespace-nowrap text-base text-gray-500">
                      {result.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
