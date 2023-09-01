'use client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';
import makeSSRClinet from './ssrClient';

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeSSRClinet}>
      {children}
    </ApolloNextAppProvider>
  );
}
