/* eslint-disable react/display-name */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import tw from 'twin.macro'
import Moment from 'react-moment'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

import { Layout } from '../../Layout'
import { Typography } from '../primitives'
import background from '../../assets/img/svgs/dot_pattern.svg'
import { POST } from '../../../utils/graphql/queries'
import { ThemedStyles } from '../../Layout/ThemeProvider'
import AuthorThumbnail from './AuthorThumbnail'

const Container = styled.div`
	${tw`flex flex-1 flex-col-reverse sm:flex-row`};
`
const HeroContainer = styled.div`
	${tw`flex flex-col flex-1 pt-96`};
	background-image: url(${background});
	background-color: #2B59C3;

`
const StageLeft = styled.div`
	${tw`p-10 sm:flex flex-col`};
	flex: 1;
`	
const StageRight = styled.div`
	${tw`flex flex-col px-10 md:px-32 md:py-10`};
	flex: 2;
`
const ListItem = styled.li`
	color: ${({theme}) => theme.text};
`

const Hero = ({blog}) => {
	return (
		<HeroContainer>
			<Container>
				<StageLeft>
				
				</StageLeft>
				<StageRight>
					<Typography variant="p" weight="bold" color={ThemedStyles.light.inverted_text}>
						{blog?.topic}
					</Typography>
					<Typography variant="h1" weight="bold" className="m-0" color={ThemedStyles.light.inverted_text}>
						{blog?.title}
					</Typography>
					<Typography variant="p" className="mt-2" color={ThemedStyles.light.inverted_text}>
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
				</StageRight>
			</Container>
		</HeroContainer>
	)
}

Hero.propTypes = {
	blog: PropTypes.object
}

const Content = ({blog}) => {
	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <Typography variant="p" className="my-2">{children}</Typography>,
			[BLOCKS.HEADING_1]: (node, children) => <Typography variant="h1" weight="bold">{children}</Typography>,
			[BLOCKS.HEADING_2]: (node, children) => <Typography variant="h2">{children}</Typography>,
			[BLOCKS.HEADING_3]: (node, children) => <Typography variant="h3">{children}</Typography>,
			[BLOCKS.HEADING_4]: (node, children) => <Typography variant="h4">{children}</Typography>,
			[BLOCKS.HEADING_5]: (node, children) => <Typography variant="h5">{children}</Typography>,
			[BLOCKS.HEADING_6]: (node, children) => <Typography variant="h6">{children}</Typography>,
			[BLOCKS.LIST_ITEM ]: (node, children) => <ListItem>{children}</ListItem>,
			[BLOCKS.QUOTE]: (node, children) => <Typography>{children}</Typography>,
			[BLOCKS.EMBEDDED_ASSET]: (node) => {
				const assetId = node.data.target.sys.id
				const asset = blog.content.links.assets.block.filter(block => block.sys.id === assetId)[0]
				return <img className="my-4 w-full max-h-96 self-center md:max-w-3xl xl:w-2/3" src={asset.url} alt={asset.title}/>
			}
		}
	}
	
	return (
		<Container className="pt-24">
			<StageLeft>
				{
					blog?.authorCollection.items.map((author) => (
						<AuthorThumbnail
							key={author.sys.id}
							author={author}
						/>
					))
				}
			</StageLeft>
			<StageRight>
				{documentToReactComponents(blog?.content.json, options)}
			</StageRight>
		</Container>
	)
}

Content.propTypes = {
	blog: PropTypes.object
}

const Template = ({topic, slug}) => {

	const { loading, error, data } = useQuery(POST, {
		variables:{
			where: {
				topic,
				slug
			}
		}
	})

	return (
		<Layout
			title="Blog | Tope Daramola"
			hero={<Hero blog={data?.postCollection?.items[0]}/>}
			content={<Content blog={data?.postCollection?.items[0]}/>}
			error={error}
			loading={loading}
		/>
	)
}

Template.propTypes = {
	topic: PropTypes.string,
	year: PropTypes.string,
	slug: PropTypes.string
}

export default Template
