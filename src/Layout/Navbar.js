import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import  Link from 'gatsby-link'
import { Navbar, Alignment } from '@blueprintjs/core'

import { ThemeToggle, Typography } from '../components/primitives'
import { useTheme } from './ThemeProvider'

const Container = styled(Navbar)`
	background-color: ${({theme}) => theme.background};
	box-shadow: none;
`

const NavLinks = styled.div`
	display: flex;
`

const ThemedLink = styled(Link)`
	&& {
		* {
			color: ${({theme}) => theme.grey};
		}
	}
`

const NavbarLinks = [
	{ name: 'Home', link: '/' },
	{ name: 'Blog', link: '/blog' }
]

const _ = ({
	page, fixed, ...props
}) => {

	const [,setTheme] = useTheme()
	
	return (
		<Container {...props} fixedToTop={fixed}>
			<Navbar.Group align={Alignment.LEFT} className="pl-10">
				{/* no content */}
			</Navbar.Group>
			<Navbar.Group align={Alignment.RIGHT} className="pl-4">
				<NavLinks>
					{
						NavbarLinks.map(({ name, link }, i) => (
							<ThemedLink key={i} to={link}>
								<Typography variant="p" className="px-2 mb-0" weight={page === name ? 'bold' : 'normal'}>
									{ name }
								</Typography>
							</ThemedLink>
						))
					}
				</NavLinks>
				<ThemeToggle className="ml-4" onChange={() => setTheme(
					lastThemeType => (
						lastThemeType === 'light' ? 'dark' : 'light'
					)
				)} />
			</Navbar.Group>
		</Container>
	)
}
_.propTypes = {
	page: PropTypes.string,
	/** Specifies whether positioning should be fixed or relative */
	fixed: PropTypes.bool,
	background: PropTypes.string,
	boxshadow: PropTypes.string
}
_.defaultProps = {
	background: '#FFF',
	boxshadow: '0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.1);'
}

export default _
