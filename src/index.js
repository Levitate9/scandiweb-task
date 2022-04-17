import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const container = document.getElementById('root')
const root = createRoot(container)
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

root.render(
  <ApolloProvider client={client}>
    <App client={client} />
  </ApolloProvider>
)