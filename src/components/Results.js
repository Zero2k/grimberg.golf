import React from 'react';
import 'twin.macro';

export default function Results() {
  const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Admin',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
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
                    Name
                  </th>
                  <th
                    scope="col"
                    tw="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    tw="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    tw="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Role
                  </th>
                </tr>
              </thead>
              <tbody tw="bg-white divide-y divide-gray-200">
                {people.map(person => (
                  <tr key={person.email}>
                    <td tw="px-6 py-4 whitespace-nowrap">
                      <div tw="flex items-center">
                        <div tw="flex-shrink-0 h-10 w-10">
                          <img
                            tw="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        </div>
                        <div tw="ml-4">
                          <div tw="text-sm font-medium text-gray-900">
                            {person.name}
                          </div>
                          <div tw="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td tw="px-6 py-4 whitespace-nowrap">
                      <div tw="text-sm text-gray-900">{person.title}</div>
                      <div tw="text-sm text-gray-500">{person.department}</div>
                    </td>
                    <td tw="px-6 py-4 whitespace-nowrap">
                      <span tw="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td tw="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.role}
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
