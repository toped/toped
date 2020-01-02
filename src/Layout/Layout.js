import React from 'react'
import PropTypes from 'prop-types'
import AOS from 'aos'

import { ThemeContextProvider } from './ThemeContext'
import { useEffect } from 'react'

function Layout({ children }) {

	useEffect(() => { AOS.init() })
	return (
		<ThemeContextProvider>
			<div>
				{children}
			</div>
		</ThemeContextProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
