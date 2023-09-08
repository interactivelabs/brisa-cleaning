import MenuTopArrow from '@components/UI/Menus/MenuTopArrow';
import type { NavMenuGroupFragment } from '@graphql/Shared/Queries/NavigationMenu.graphql';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface IMainMenuWide {
  menuItems: (NavMenuGroupFragment | null)[];
}

const MainMenuWide = ({ menuItems }: IMainMenuWide) => (
  <Popover.Group className="hidden lg:flex lg:gap-x-12">
    {menuItems.map((item) => {
      if (!item) return null;
      if (item.groupLink)
        return (
          <Link
            key={item.groupName}
            href={item.groupLink?.slug || '/'}
            className="link-animatge-underline"
          >
            {item.groupName}
          </Link>
        );
      return (
        <Popover className="relative" key={item.groupName}>
          {({ open }) => (
            <>
              <Popover.Button className="flex items-center gap-x-1 focus:outline-none link-animatge-underline">
                {item.groupName}
                <ChevronDownIcon
                  className={`h-4 w-4 duration-200 translate ${
                    open ? 'rotate-180' : 'rotate-0'
                  }`}
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 translate-y-3"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <MenuTopArrow />
                <Popover.Panel className="absolute -left-4 top-full z-10 mt-6 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {item.featuredPagesCollection?.items.map((page) => (
                      <div
                        key={page?.slug}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-100"
                      >
                        <Link href={page?.slug || '/'}>
                          {page?.pageName}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      );
    })}
  </Popover.Group>
);

export default MainMenuWide;
