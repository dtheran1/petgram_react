import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from '@apollo/react-hooks'
// import { InMemoryCache } from '@apollo/client'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const urlAPI = 'https://petgram-server-daniel-dtheran1.vercel.app/graphql'
const root = ReactDOM.createRoot(document.getElementById('app'))
const client = new ApolloClient({
  uri: urlAPI,
  cache: new InMemoryCache()
})

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
