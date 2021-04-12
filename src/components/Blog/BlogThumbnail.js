import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Moment from 'react-moment'
import  Link from 'gatsby-link'

import { useTheme, ThemedStyles } from '../../Layout/ThemeProvider'

const HR = styled.hr`
  color: ${({theme}) => theme.text};
	border-width: .5px !important;
  opacity: .1;
`

import { Typography } from '../primitives'

const BlogThumbnail = ({blog}) => {

	const [theme] = useTheme()

	return (
		<Link to={`${blog?.topic}/${(new Date(blog?.publishDate)).getFullYear()}/${blog?.slug}`}>
			<div className="flex flex-col">
				<Typography variant="small" weight="bold" color={ThemedStyles[theme].grey} className="m-0 py-2">
					{blog?.topic}
				</Typography>
				<Typography variant="h2" weight="bold" color={ThemedStyles[theme].grey} className="m-0 py-4">
					{blog?.title}
				</Typography>
				<div className="flex">
					{
						<Typography 
							variant="small" 
							className="m-0 py-2 mr-2"
							color={ThemedStyles[theme].grey}>
						By
							{
								blog?.authorCollection.items.map((author, index) => (
									<React.Fragment key={author.sys.id}>
										{
											blog?.authorCollection.items.length > 1 
												? index === blog?.authorCollection.items.length - 1 
													? ` and ${author.firstName} ${author.lastName} on `
													: ` ${author.firstName} ${author.lastName},`
												: ` ${author.firstName} ${author.lastName} on `
										}
									</React.Fragment>
								))
							}
							<Moment date={blog?.publishDate} format="dddd, D MMMM YYYY"/>
						</Typography>
					}
				</div>
				<HR className="w-full mt-12"/>
			</div>
		</Link>
	)
}

BlogThumbnail.propTypes = {
	blog: PropTypes.object
}

export default BlogThumbnail
