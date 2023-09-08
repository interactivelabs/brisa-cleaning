import type { NavMenuGroupFragment } from '@graphql/Shared/Queries/NavigationMenu.graphql';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Fragment } from 'react';

interface IMainMenuWide {
  menuItems: (NavMenuGroupFragment | null)[];
}

const MainMenuWide = ({ menuItems }: IMainMenuWide) => {
  const menuItemsContent = menuItems.map((item) => {
    if (!item) return null;
    if (item.groupLink)
      return (
        <Link key={item.groupName} href={item.groupLink?.slug || '/'}>
          {item.groupName}
        </Link>
      );
    return (
      <Popover className="relative" key={item.groupName}>
        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
          {item.groupName}
          <ChevronDownIcon
            className="h-5 w-5 flex-none text-gray-400"
            aria-hidden="true"
          />
        </Popover.Button>

        {/* <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        > */}
        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {item.featuredPagesCollection?.items.map((page) => (
              <div
                key={page?.slug}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div className="flex-auto">
                  <Link href={page?.slug || '/'}>
                    {page?.pageName}
                    <span className="absolute inset-0" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Popover.Panel>
        {/* </Transition> */}
      </Popover>
    );
  });

  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
      {menuItemsContent}
    </Popover.Group>
  );
};

export default MainMenuWide;
