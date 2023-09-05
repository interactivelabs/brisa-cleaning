import * as Types from '../../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LinkToPageFragment = {
  __typename?: 'Page';
  slug?: string | null;
  pageName?: string | null;
};

export type NavigationMenuQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;

export type NavigationMenuQuery = {
  __typename?: 'Query';
  navigationMenu?: {
    __typename?: 'NavigationMenu';
    menuItemsCollection?: {
      __typename?: 'NavigationMenuMenuItemsCollection';
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
  } | null;
};

export const LinkToPageFragmentDoc = gql`
  fragment LinkToPage on Page {
    slug
    pageName
  }
`;
export const NavigationMenuDocument = gql`
  query NavigationMenu($id: String!) {
    navigationMenu(id: $id) {
      menuItemsCollection {
        items {
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
      }
    }
  }
  ${LinkToPageFragmentDoc}
`;

/**
 * __useNavigationMenuQuery__
 *
 * To run a query within a React component, call `useNavigationMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useNavigationMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNavigationMenuQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNavigationMenuQuery(
  baseOptions: Apollo.QueryHookOptions<
    NavigationMenuQuery,
    NavigationMenuQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NavigationMenuQuery, NavigationMenuQueryVariables>(
    NavigationMenuDocument,
    options,
  );
}
export function useNavigationMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NavigationMenuQuery,
    NavigationMenuQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<NavigationMenuQuery, NavigationMenuQueryVariables>(
    NavigationMenuDocument,
    options,
  );
}
export type NavigationMenuQueryHookResult = ReturnType<
  typeof useNavigationMenuQuery
>;
export type NavigationMenuLazyQueryHookResult = ReturnType<
  typeof useNavigationMenuLazyQuery
>;
export type NavigationMenuQueryResult = Apollo.QueryResult<
  NavigationMenuQuery,
  NavigationMenuQueryVariables
>;
