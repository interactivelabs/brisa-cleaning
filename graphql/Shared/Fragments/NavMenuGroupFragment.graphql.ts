import * as Types from '../../graphql';

import { gql } from '@apollo/client';
export type LinkToPageFragment = {
  __typename?: 'Page';
  slug?: string | null;
  pageName?: string | null;
};

export type NavMenuGroupFragment = {
  __typename?: 'MenuGroup';
  groupName?: string | null;
  featuredPagesCollection?: {
    __typename?: 'MenuGroupFeaturedPagesCollection';
    items: Array<{
      __typename?: 'Page';
      slug?: string | null;
      pageName?: string | null;
    } | null>;
  } | null;
  groupLink?: {
    __typename?: 'Page';
    slug?: string | null;
    pageName?: string | null;
  } | null;
};

export const LinkToPageFragmentDoc = gql`
  fragment LinkToPage on Page {
    slug
    pageName
  }
`;
export const NavMenuGroupFragmentDoc = gql`
  fragment NavMenuGroup on MenuGroup {
    groupName
    featuredPagesCollection {
      items {
        ...LinkToPage
      }
    }
    groupLink {
      ...LinkToPage
    }
  }
  ${LinkToPageFragmentDoc}
`;
