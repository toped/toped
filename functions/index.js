const admin = require('firebase-admin')
const functions = require('firebase-functions')
const express = require('express')

var Twit = require('twit')

const typeDefs = require('./types')
const resolvers = require('./resolvers')
var serviceAccount = require('./service_key.json')

var twitterClient = new Twit({
	consumer_key: functions.config().twitterapi.consumer_key,
	consumer_secret: functions.config().twitterapi.consumer_secret,
	access_token: functions.config().twitterapi.access_token,
	access_token_secret: functions.config().twitterapi.access_token_secret,
	timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
	strictSSL: true // optional - requires SSL certificates to be valid.
})

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://memez-f18eb.firebaseio.com/',
	storageBucket: 'memez-f18eb.appspot.com'
})

const { ApolloServer, gql } = require('apollo-server-express')

const app = express()

const TimerModule = () => {
	let timers = {}
	const addTimer = (id, timer) => {
		timers[id] = timer
	}
	const getTimers = () => timers
	return {
		addTimer,
		getTimers
	}
}

const timerModule = TimerModule()

const context = async ({ req, res }) => {
	return {
		req,
		res,
		admin,
		twitterClient,
		timerModule
	}
}

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context
})

apolloServer.applyMiddleware({
	app,
	path: '/',
	cors: true,
	credentials: true
})

exports.graphql = functions.https.onRequest(app)
