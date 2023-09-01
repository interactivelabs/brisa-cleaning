import * as Types from '../graphql/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type HomePageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', internalName?: string | null, pageName?: string | null, slug?: string | null, pageContent?: { __typename?: 'ComponentProductTable', internalName?: string | null, headline?: string | null, subline?: string | null, productsCollection?: { __typename?: 'ComponentProductTableProductsCollection', items: Array<{ __typename?: 'TopicProduct', internalName?: string | null, name?: string | null, price?: number | null, description?: { __typename?: 'TopicProductDescription', json: any } | null } | null> } | null } | { __typename?: 'TopicBusinessInfo' } | { __typename?: 'TopicProduct' } | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<{ __typename?: 'ComponentCta', headline?: string | null, ctaText?: string | null, urlParameters?: string | null, colorPalette?: string | null, targetPage?: { __typename?: 'Page', slug?: string | null } | null, subline?: { __typename?: 'ComponentCtaSubline', json: any } | null } | { __typename?: 'ComponentDuplex', internalName?: string | null, containerLayout?: boolean | null, headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, colorPalette?: string | null, targetPage?: { __typename?: 'Page', slug?: string | null } | null, bodyText?: { __typename?: 'ComponentDuplexBodyText', json: any } | null, image?: { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, size?: number | null, url?: string | null, width?: number | null, height?: number | null } | null } | { __typename?: 'ComponentHeroBanner' } | { __typename?: 'ComponentInfoBlock' } | { __typename?: 'ComponentQuote' } | { __typename?: 'ComponentTextBlock' } | null> } | null } | null> } | null };


export const HomePageDocument = gql`
    query HomePage {
  pageCollection(where: {slug: "home"}) {
    items {
      internalName
      pageName
      slug
      pageContent {
        ... on ComponentProductTable {
          internalName
          headline
          subline
          productsCollection {
            items {
              internalName
              name
              price
              description {
                json
              }
            }
          }
        }
      }
      topSectionCollection(limit: 10) {
        items {
          ... on ComponentCta {
            headline
            ctaText
            targetPage {
              ... on Page {
                slug
              }
            }
            urlParameters
            colorPalette
            subline {
              json
            }
          }
          ... on ComponentDuplex {
            internalName
            containerLayout
            headline
            ctaText
            targetPage {
              ... on Page {
                slug
              }
            }
            imageStyle
            colorPalette
            bodyText {
              json
            }
            image {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomePageQuery(baseOptions?: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
      }
export function useHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
        }
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<typeof useHomePageLazyQuery>;
export type HomePageQueryResult = Apollo.QueryResult<HomePageQuery, HomePageQueryVariables>;