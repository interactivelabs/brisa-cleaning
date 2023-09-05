import { getClient } from '@lib/apollo/rscClient';
import {
  NavigationMenuDocument,
  NavigationMenuQuery,
} from '@graphql/Shared/Queries/NavigationMenu.graphql';
import Link from 'next/link';

const getData = async (): Promise<NavigationMenuQuery> => {
  const { data, error } = await getClient().query({
    query: NavigationMenuDocument,
    variables: { id: 'BtIJpF1q3Td9pT0lkzipx' },
  });
  if (error) throw new Error('Failed to fetch data');
  return data;
};

export default async function MainMenu() {
  const data = await getData();

  if (!data.navigationMenu?.menuItemsCollection?.items)
    return <div className="p-8">ERROR</div>;

  const menuItems = data.navigationMenu.menuItemsCollection.items;

  const menuItemsContent = menuItems.map((item) => {
    if (!item) return null;
    if (item.groupLink)
      return (
        <Link key={item.groupName} href={item.groupLink?.slug || '/'}>
          {item.groupName}
        </Link>
      );
    return <span key={item.groupName}>{item.groupName}</span>;
  });

  return <nav>{menuItemsContent}</nav>;
}
