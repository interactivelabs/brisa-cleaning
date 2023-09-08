import Image from 'next/image';
import MainMenu from './MainMenu';
import LogoSmall from './logo_temp_small.png';
import MainCta from './MainCta';
import {
  NavigationMenuDocument,
  NavigationMenuQuery,
} from '@graphql/Shared/Queries/NavigationMenu.graphql';
import { getClient } from '@lib/apollo/rscClient';

const getData = async (): Promise<NavigationMenuQuery> => {
  const { data, error } = await getClient().query({
    query: NavigationMenuDocument,
    variables: { id: 'BtIJpF1q3Td9pT0lkzipx' },
  });
  if (error) throw new Error('Failed to fetch data');
  return data;
};

const MainHeader = async () => {
  const data = await getData();

  if (!data.navigationMenu?.menuItemsCollection?.items)
    return <div className="p-8">ERROR</div>;

  const menuItems = data.navigationMenu.menuItemsCollection.items;

  return (
    <header className="w-full flex justify-between lg:justify-around items-center px-4 pt-2 lg:pt-6 pb-2">
      <MainMenu menuItems={menuItems} />
      <Image src={LogoSmall} alt="Brisa Cleaning Logo" height={50} width={50} />
      <div className="hidden lg:block">
        <MainCta />
      </div>
    </header>
  );
};

export default MainHeader;
