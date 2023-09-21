import MainCta from '@components/MainHeader/MainCta';
import {
  LinkToPageFragment,
  NavMenuGroupFragment,
} from '@graphql/Shared/Fragments/NavMenuGroupFragment.graphql';
import {
  FooterMenuDocument,
  FooterMenuQuery,
} from '@graphql/Shared/Queries/FooterMenu.graphql';
import { getClient } from '@lib/apollo/rscClient';
import Link from 'next/link';

const getData = async (): Promise<FooterMenuQuery> => {
  const { data, error } = await getClient().query({
    query: FooterMenuDocument,
    variables: { id: '6c9tUMxxamKB9R7S16ne1X' },
  });
  if (error) throw new Error('Failed to fetch data');
  return data;
};

const MainFooter = async () => {
  const data = await getData();

  if (!data.footerMenu?.menuItemsCollection?.items)
    return <div className="p-8">ERROR</div>;

  const menuItems = data.footerMenu.menuItemsCollection.items;
  const legalLinks = data.footerMenu.legalLinks?.featuredPagesCollection?.items;
  const socialLinks =
    data.footerMenu.socialLinks?.externalLinksCollection?.items;

  const sectionSize = 2;
  const sections: Array<Array<NavMenuGroupFragment | null>> = [];
  for (let i = 0; i < menuItems.length; i += sectionSize) {
    const chunk = menuItems.slice(i, i + sectionSize);
    sections.push(chunk);
  }

  const FooterLink = ({ link }: { link: LinkToPageFragment | null }) =>
    !!link?.slug && (
      <li key={link.pageName}>
        <a href={link.slug || '/'} className="text-sm leading-6">
          {link.pageName}
        </a>
      </li>
    );

  const FooterSection = ({
    groupName,
    index,
    links,
  }: {
    groupName: string;
    index: number;
    links?: (LinkToPageFragment | null)[] | null;
  }) => (
    <div className={index % 2 ? 'mt-10 md:mt-0' : ''}>
      <h3 className="text-sm font-semibold leading-6">{groupName}</h3>
      <ul role="list" className="mt-6 space-y-4">
        {links?.map((link) => <FooterLink key={link?.slug} link={link} />)}
      </ul>
    </div>
  );

  return (
    <footer className="bg-sky-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            {sections.map(
              (section, i) =>
                section && (
                  <div
                    key={`section-${i}`}
                    className="md:grid md:grid-cols-2 md:gap-8"
                  >
                    {section.map(
                      (item, j) =>
                        !!item?.groupName && (
                          <FooterSection
                            index={j}
                            key={item.groupName}
                            groupName={item.groupName}
                            links={item.featuredPagesCollection?.items}
                          />
                        ),
                    )}
                    {i === sections.length - 1 && (
                      <FooterSection
                        index={1}
                        groupName="Legal"
                        links={legalLinks}
                      />
                    )}
                  </div>
                ),
            )}
          </div>
          <div className="mt-10 xl:mt-0">
            <MainCta />
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {socialLinks &&
              socialLinks.map(
                (item) =>
                  !!item?.url && (
                    <Link
                      key={item?.externalName}
                      href={item?.url}
                      target="_blank"
                      className="text-gray-300"
                    >
                      <span className="sr-only">
                        Brisa {item?.externalName} page
                      </span>
                      {item?.externalName}
                    </Link>
                  ),
              )}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-300 md:order-1 md:mt-0">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
