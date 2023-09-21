import * as Types from '../../graphql';

import { gql } from '@apollo/client';
import { NavMenuGroupFragmentDoc } from '../Fragments/NavMenuGroupFragment.graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type FooterMenuQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;

export type FooterMenuQuery = {
  __typename?: 'Query';
  footerMenu?: {
    __typename?: 'FooterMenu';
    menuItemsCollection?: {
      __typename?: 'FooterMenuMenuItemsCollection';
      items: Array<{
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
      } | null>;
    } | null;
    legalLinks?: {
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
    } | null;
    socialLinks?: {
      __typename?: 'SocialLinks';
      externalLinksCollection?: {
        __typename?: 'SocialLinksExternalLinksCollection';
        items: Array<{
          __typename?: 'ExternalLink';
          externalName?: string | null;
          url?: string | null;
        } | null>;
      } | null;
    } | null;
  } | null;
};

export const FooterMenuDocument = gql`
  query FooterMenu($id: String!) {
    footerMenu(id: $id) {
      menuItemsCollection {
        items {
          ...NavMenuGroup
        }
      }
      legalLinks {
        ...NavMenuGroup
      }
      socialLinks {
        externalLinksCollection {
          items {
            externalName
            url
          }
        }
      }
    }
  }
  ${NavMenuGroupFragmentDoc}
`;

/**
 * __useFooterMenuQuery__
 *
 * To run a query within a React component, call `useFooterMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooterMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooterMenuQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFooterMenuQuery(
  baseOptions: Apollo.QueryHookOptions<
    FooterMenuQuery,
    FooterMenuQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FooterMenuQuery, FooterMenuQueryVariables>(
    FooterMenuDocument,
    options,
  );
}
export function useFooterMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FooterMenuQuery,
    FooterMenuQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FooterMenuQuery, FooterMenuQueryVariables>(
    FooterMenuDocument,
    options,
  );
}
export type FooterMenuQueryHookResult = ReturnType<typeof useFooterMenuQuery>;
export type FooterMenuLazyQueryHookResult = ReturnType<
  typeof useFooterMenuLazyQuery
>;
export type FooterMenuQueryResult = Apollo.QueryResult<
  FooterMenuQuery,
  FooterMenuQueryVariables
>;
