import { HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const getLink = () => {
  const token = process.env.API_GRAPHQL_TOKEN;
  const setAuthorizationLink = setContext(async (_, { headers }) => {
    // This means we set the auth inline for create user
    if (headers?.authorization) return { headers };
    if (token) {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    }
    return { headers };
  });
  const link = new HttpLink({
    uri: 'https://graphql.contentful.com/content/v1/spaces/5xo8mpmc94me',
  });
  return { link, setAuthorizationLink };
};
