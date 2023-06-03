import { GraphQLClient } from 'graphql-request';
import { SANITY_GRAPHQL_URL } from '../env';
import { getSdk } from './gql-sdk';

export const api = getSdk(new GraphQLClient(SANITY_GRAPHQL_URL, {}));
