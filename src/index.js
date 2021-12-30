import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

//Apollo GraphQL
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
        <Layout />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);