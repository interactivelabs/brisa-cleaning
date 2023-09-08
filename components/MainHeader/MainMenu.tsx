'use client';

import type { NavMenuGroupFragment } from '@graphql/Shared/Queries/NavigationMenu.graphql';
import { Bars3Icon } from '@heroicons/react/24/outline';
import MainMenuWide from './MainMenuWide';

interface IMainMenu {
  menuItems: (NavMenuGroupFragment | null)[];
}

const MainMenu = ({ menuItems }: IMainMenu) => (
  <nav>
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <MainMenuWide menuItems={menuItems} />
  </nav>
);

export default MainMenu;
