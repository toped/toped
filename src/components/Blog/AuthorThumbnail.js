import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from 'evergreen-ui'

import { Typography } from '../primitives'

const socials = [
	{
		name: 'Twitter',
		baseUrl: 'https://twitter.com/'
	},
	{
		name: 'GitHub',
		baseUrl: 'https://github.com/'
	}
]
const SocialLink = ({socialNetwork, handle}) => {

	handle = handle && socialNetwork.name === 'Twitter' 
		? `@${handle}`
		: handle 
	return(
		<>
			{
				handle && 
				<div className="flex my-2">
					<Typography variant="small" weight="bold" className="my-0 mr-2">
						{socialNetwork.name}: 
					</Typography>
					<a href={`${socialNetwork.baseUrl}/${handle}`}>
						<Typography variant="small" className="my-0">
							{handle}
						</Typography>
					</a>
				</div>
			}
		</>
	)
}

SocialLink.propTypes = {
	socialNetwork: PropTypes.object,
	handle: PropTypes.name
}

const AuthorThumbnail = ({author}) => {
	return (
		<div className="flex flex-col items-start md:items-center mb-8">
			<Avatar src={author.profileImageUrl} size="132px"/>
			<div className="flex flex-col items-start">
				<Typography variant="h6" weight="bold" className="my-2">
					{author.firstName} {author.lastName}
				</Typography>
				{
					socials.map(social => (
						<SocialLink 
							key={social.name}
							socialNetwork={social} 
							handle={author?.[`${social.name.toLowerCase()}Handle`]}/>
					))
				}
			</div>
		</div>
	)
}

AuthorThumbnail.propTypes = {
	author: PropTypes.object
}

export default AuthorThumbnail
