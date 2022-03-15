import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import SelectLanguage from '@/components/SelectLanguage';
import { menu } from '@/config/menu';

const NavLink = styled.a(({ isActive = false, isMobile = false }) => [
  tw`transition duration-300 text-white border-b-2 border-transparent`,
  isActive && tw`border-white bg-gray-600`,
  isMobile
    ? tw`block px-3 py-2 rounded-md text-base font-medium hocus:(text-white bg-gray-600) border-transparent`
    : tw`font-medium text-base lg:text-lg hocus:(text-white border-white) bg-transparent pb-1`,
]);
const Logo = tw.svg``;

export default function Navbar() {
  const router = useRouter();

  return (
    <Popover>
      <div tw="bg-gray-800 py-4 px-5 sm:px-6 lg:px-8">
        <nav
          tw="max-w-7xl mx-auto flex items-center justify-between sm:h-14"
          aria-label="Meny"
        >
          <div tw="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div tw="flex items-center justify-between w-full md:w-auto">
              <Link href="/" passHref>
                <a>
                  <span tw="sr-only">Workflow</span>
                  <img
                    tw="hidden md:block lg:hidden h-14 w-auto sm:h-20 text-white"
                    src="/images/logo.svg"
                    alt="Workflow"
                  />
                  <img
                    tw="block md:hidden lg:block h-20 w-auto sm:h-20 text-white"
                    src="/images/logo.svg"
                    alt="Workflow"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div tw="hidden lg:block lg:ml-5 lg:pr-5 lg:space-x-8">
            {menu[router.locale].map(item => (
              <Link
                key={item.name}
                href={item.url}
                passHref
                locale={router.locale}
              >
                <NavLink isActive={item.url === router.asPath}>
                  {item.name}
                </NavLink>
              </Link>
            ))}
          </div>
          {/* SELECT LANGUAGE */}
          <SelectLanguage />
          <div tw="-mr-1 ml-4 flex items-center lg:hidden">
            <Popover.Button tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span tw="sr-only">Open main menu</span>
              <MenuIcon tw="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          tw="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div tw="rounded-lg shadow-md bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div tw="px-4 sm:px-5 pt-5 sm:pt-2 flex items-center justify-between">
              <div>
                <img
                  tw="block h-14 w-auto sm:h-14 text-white"
                  src="/images/logo.svg"
                  alt="Workflow"
                />
              </div>
              <div tw="-mr-2">
                <Popover.Button tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span tw="sr-only">Close main menu</span>
                  <XIcon tw="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div tw="px-2 pt-4 pb-3 space-y-1">
              {menu[router.locale].map(item => (
                <Link
                  key={item.name}
                  href={item.url}
                  locale={router.locale}
                  passHref
                >
                  <NavLink isActive={item.url === router.asPath} isMobile>
                    {item.name}
                  </NavLink>
                </Link>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
