import { Fragment } from 'react';
import Link from 'next/link';
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
                  {/* <span tw="sr-only">Workflow</span>
                  <img
                    tw="hidden md:block lg:hidden h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    tw="block md:hidden lg:block h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                  <Logo tw="w-12 h-12 block md:hidden lg:block">
                    <svg viewBox="0 0 500 450">
                      <g>
                        <polygon
                          fill="#E6E7E8"
                          points="60.112,329.852 10.873,300.27 10.9,29.663 60.112,57.534 	"
                        />
                        <polygon
                          fill="#E6E7E8"
                          points="134.747,317.67 99.365,296.205 99.365,81.686 134.747,100.994 	"
                        />
                        <polygon
                          fill="#E6E7E8"
                          points="222.674,427.924 173.584,398.336 173.46,124.219 222.674,149.528 	"
                        />
                        <polygon
                          fill="#E6E7E8"
                          points="10.873,80.98 10.873,22.632 222.394,149.442 197.168,193.691 	"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#E6E7E8"
                          points="295.755,400.854 246.01,427.909 246.01,149.59 298.494,121.919 	"
                        />
                        <polygon
                          fill="#E6E7E8"
                          points="487.998,22.09 487.998,80.79 297.221,179.99 246.01,149.444 	"
                        />
                        <polygon
                          fill="#E6E7E8"
                          points="487.998,253.312 487.998,300.079 265.342,417.364 246.01,380.665 	"
                        />
                        <polygon
                          fill="#E6E7E8"
                          points="437.423,290.757 487.998,290.757 487.998,129.301 436.809,157.317 	"
                        />
                        <polygon
                          fill="#E6E7E8"
                          points="343.487,267.499 343.487,209.269 451.94,148.964 476.706,193.83 	"
                        />
                      </g>
                    </svg>
                  </Logo>
                </a>
              </Link>
            </div>
          </div>
          <div tw="hidden md:block md:ml-5 md:pr-5 md:space-x-8">
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
          <div tw="-mr-1 ml-4 flex items-center md:hidden">
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
          tw="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div tw="rounded-lg shadow-md bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div tw="px-4 sm:px-5 pt-2 sm:pt-4 flex items-center justify-between">
              <div>
                <Logo tw="w-10 h-10 block md:hidden lg:block">
                  <svg viewBox="0 0 500 450">
                    <g>
                      <polygon
                        fill="#E6E7E8"
                        points="60.112,329.852 10.873,300.27 10.9,29.663 60.112,57.534 	"
                      />
                      <polygon
                        fill="#E6E7E8"
                        points="134.747,317.67 99.365,296.205 99.365,81.686 134.747,100.994 	"
                      />
                      <polygon
                        fill="#E6E7E8"
                        points="222.674,427.924 173.584,398.336 173.46,124.219 222.674,149.528 	"
                      />
                      <polygon
                        fill="#E6E7E8"
                        points="10.873,80.98 10.873,22.632 222.394,149.442 197.168,193.691 	"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#E6E7E8"
                        points="295.755,400.854 246.01,427.909 246.01,149.59 298.494,121.919 	"
                      />
                      <polygon
                        fill="#E6E7E8"
                        points="487.998,22.09 487.998,80.79 297.221,179.99 246.01,149.444 	"
                      />
                      <polygon
                        fill="#E6E7E8"
                        points="487.998,253.312 487.998,300.079 265.342,417.364 246.01,380.665 	"
                      />
                      <polygon
                        fill="#E6E7E8"
                        points="437.423,290.757 487.998,290.757 487.998,129.301 436.809,157.317 	"
                      />
                      <polygon
                        fill="#E6E7E8"
                        points="343.487,267.499 343.487,209.269 451.94,148.964 476.706,193.83 	"
                      />
                    </g>
                  </svg>
                </Logo>
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
