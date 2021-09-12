import ApolloClient, { InMemoryCache } from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import config from './config.js'

export const client = new ApolloClient({
	uri: config[process.env.GATSBY_NODE_ENV],
	cache: new InMemoryCache({
		addTypename: false
	}),
	fetch
})