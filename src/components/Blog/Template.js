import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Layout } from '../../Layout'
import { Typography } from '../primitives'
import background from '../../assets/img/svgs/dot_pattern.svg'

const Container = styled.div`
	${tw`flex flex-1`};
`
const HeroContainer = styled.div`
	${tw`flex flex-col flex-1 pt-96`};
	background-image: url(${background});
	background-color: rgb(88,156,239);
`
const StageLeft = styled.div`
	${tw`hidden sm:flex flex-col`};
	flex: 1;
`	
const StageRight = styled.div`
	${tw`flex flex-col pb-4`};
	flex: 2;
`

const Hero = () => {
	return (
		<HeroContainer>
			<Container>
				<StageLeft>
				
				</StageLeft>
				<StageRight>
					<Typography variant="p" weight="bold" invertColor>
						Building the new Twitter.com
					</Typography>
					<Typography variant="h1" weight="bold" className="m-0" invertColor>
						Building the new Twitter.com
					</Typography>
					<Typography variant="p" weight="" invertColor className="mt-2">
						By Charlie Croom and Gregory Baker  on Monday, 15 July 2019
					</Typography>
				</StageRight>
			</Container>
		</HeroContainer>
	)
}
const Content = () => {
	return (
		<Container>
			<StageLeft>
				
			</StageLeft>
			<StageRight>

			</StageRight>
		</Container>
	)
}


const Template = () => {
	return (
		<Layout
			hero={<Hero/>}
			content={<Content/>}
		/>
	)
}

export default Template
