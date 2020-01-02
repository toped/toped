import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout/Layout'

export const wrapRootElement = ({ element }) => {
	return (<Layout>{element}</Layout>)
}

wrapRootElement.propTypes = {
	element: PropTypes.any
}