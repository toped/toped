import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import tw from 'twin.macro'
import Moment from 'react-moment'

import { Layout } from '../../Layout'
import { Typography } from '../primitives'
import background from '../../assets/img/svgs/dot_pattern.svg'
import { POSTS } from '../../../utils/graphql/queries'
import BlogThumbnail from './BlogThumbnail'
import { ThemedStyles } from '../../Layout/ThemeProvider'

const Container = styled.div`
	${tw`flex`};
`
const HeroContainer = styled.div`
	${tw`flex flex-col flex-1 pt-96`};
	background-image: url(${background});
	background-color: #2B59C3;
`
const StageLeft = styled.div`
	${tw`hidden p-10 sm:flex flex-col`};
	flex: 1;
`	
const StageRight = styled.div`
	${tw`flex flex-col px-10 md:px-32 md:py-10`};
	flex: 2;
`

const Hero = ({blog}) => {
	return (
		<HeroContainer>
			<Container>
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

const Content = ({blogs}) => {
	return (
		<Container className="pt-24">
			<StageLeft>
				<div className="flex flex-col items-start md:items-center">
					<Typography variant="h4" weight="bold" className="m-0">
						Latest posts
					</Typography>
				</div>
			</StageLeft>
			<StageRight>
				{
					blogs?.map(blog => (
						<BlogThumbnail key={blog.sys.id} blog={blog}/>
					))
				}
			</StageRight>
		</Container>
	)
}

Content.propTypes = {
	blogs: PropTypes.array
}

const Home = () => {

	const { loading, error, data } = useQuery(POSTS, {})

	return (
		<Layout
			title="My Blog"
			hero={<Hero blog={data?.postCollection?.items[0]}/>}
			content={<Content blogs={data?.postCollection?.items}/>}
			loading={loading}
			error={error}
		/>
	)
}

export default Home
