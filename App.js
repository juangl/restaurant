import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloLink } from "apollo-link";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";

import { GRAPHQL_API_URL } from "./utils/constants";
import Restaurants from "./screens/Restaurants";

const httpLink = new HttpLink({ uri: GRAPHQL_API_URL });

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const middlewareLink = new ApolloLink((operation, forward) => {
  console.log("IN MIDDLEWARE");
  console.log("QUERY BODY");
  console.log(operation.query.loc.source.body);
  console.log("QUERY VARIABLES");
  console.log(operation.variables);
  return forward(operation);
});

const link = ApolloLink.from([middlewareLink, errorLink, httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Restaurants />
  </ApolloProvider>
);

export default App;
