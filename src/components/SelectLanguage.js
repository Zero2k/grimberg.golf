import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { languages } from '@/config/languages';

export default function SelectLanguage() {
  const router = useRouter();
  const selectedLocale = languages[router.locale].filter(
    lang => lang.locale === router.locale,
  )[0];
  const [selected, setSelected] = useState(selectedLocale);

  const changeLocale = language => {
    const { pathname, asPath, query } = router;
    setSelected(language);
    router.push({ pathname, query }, asPath, { locale: language.locale });
  };

  return (
    <div tw="relative inline-flex">
      <Listbox value={selected} onChange={changeLocale}>
        <div tw="relative">
          <Listbox.Button tw="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 appearance-none w-32">
            <span tw="flex font-medium">{selected.name}</span>
            <span tw="absolute inset-y-0 right-1 flex items-center pr-2 pointer-events-none">
              <SelectorIcon tw="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options tw="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {languages[router.locale].map((language, languageIdx) => (
                <Listbox.Option
                  key={languageIdx}
                  tw="cursor-pointer select-none relative py-2 pl-10 pr-4"
                  value={language}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        css={[
                          tw`block truncate hocus:font-bold`,
                          selected ? tw`font-bold` : tw`font-normal`,
                        ]}
                      >
                        {language.name}
                      </span>
                      {selected ? (
                        <span
                          css={[
                            tw`absolute inset-y-0 left-0 flex items-center pl-3`,
                            active ? tw`text-blue-800` : tw`text-blue-800`,
                          ]}
                        >
                          <CheckIcon tw="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
