'use client';

import { useState } from 'react';
import type { NavMenuGroupFragment } from '@graphql/Shared/Queries/NavigationMenu.graphql';
import { Bars3Icon } from '@heroicons/react/24/outline';
import MainMenuWide from './MainMenuWide';
import MainMenuMobile from './MainMenuMobile';

interface IMainMenu {
  menuItems: (NavMenuGroupFragment | null)[];
}

const MainMenu = ({ menuItems }: IMainMenu) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const MobileMenuButton = () => (
    <div className="flex lg:hidden">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );

  return (
    <>
      <nav>
        <MobileMenuButton />
        <MainMenuWide menuItems={menuItems} />
      </nav>
      <MainMenuMobile
        menuItems={menuItems}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
};

export default MainMenu;
