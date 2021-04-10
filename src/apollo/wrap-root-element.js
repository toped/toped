import React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './client'
import { ThemeProvider } from '../Layout/ThemeProvider'

export const wrapRootElement = ({ element }) => (
	<ApolloProvider client={client}>
		<ThemeProvider>
			{element}
		</ThemeProvider>
	</ApolloProvider>
)

wrapRootElement.propTypes = {
	element: PropTypes.any
}