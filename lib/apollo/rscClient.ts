import { ApolloClient, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { getLink } from './clientLink';

export const { getClient } = registerApolloClient(() => {
  const { link, setAuthorizationLink } = getLink();
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: setAuthorizationLink.concat(link),
  });
});
