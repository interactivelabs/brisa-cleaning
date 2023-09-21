import type { NavMenuGroupFragment } from '@graphql/Shared/Fragments/NavMenuGroupFragment.graphql';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import LogoSmall from './logo_temp_small.png';
import Link from 'next/link';
import MainCta from './MainCta';

interface IMainMenuMobile {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  menuItems: (NavMenuGroupFragment | null)[];
}

const MainMenuMobile = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  menuItems,
}: IMainMenuMobile) => (
  <Dialog
    as="div"
    className="lg:hidden"
    open={mobileMenuOpen}
    onClose={setMobileMenuOpen}
  >
    <div className="fixed inset-0 z-10" />
    <Transition
      enter="transition ease-out duration-500"
      enterFrom="translate-x-1"
      enterTo="translate-x-0"
      leave="transition ease-in duration-350"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-1"
      show={mobileMenuOpen}
    >
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="/" className="-m-1.5 p-1.5">
            <Image
              src={LogoSmall}
              alt="Brisa Cleaning Logo"
              height={50}
              width={50}
            />
            <span className="sr-only">Brisa Cleaning</span>
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {menuItems.map((item) => {
                if (!item) return null;
                if (item.groupLink)
                  return (
                    <Link
                      key={item.groupName}
                      href={item.groupLink?.slug || '/'}
                      className="-mx-3 block rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-50"
                    >
                      {item.groupName}
                    </Link>
                  );
                return (
                  <Disclosure as="div" className="-mx-3" key={item.groupName}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-gray-900 hover:bg-gray-50">
                          {item.groupName}
                          <ChevronDownIcon
                            className={`h-4 w-4 duration-200 translate ${
                              open ? 'rotate-180' : 'rotate-0'
                            }`}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Transition
                          enter="transition ease-out duration-300"
                          enterFrom="translate-y-3"
                          enterTo="translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="translate-y-0"
                          leaveTo="translate-y-1"
                        >
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {item.featuredPagesCollection?.items.map((page) => (
                              <Disclosure.Button
                                as={Link}
                                key={page?.slug}
                                href={page?.slug || '/'}
                                className="block rounded-lg py-2 pl-6 pr-3 text-gray-900 hover:bg-gray-50"
                              >
                                {page?.pageName}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                );
              })}
            </div>
            <div className="py-6">
              <MainCta />
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Transition>
  </Dialog>
);

export default MainMenuMobile;
