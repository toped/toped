import React from 'react'
import SmallText from '../components/styled-components/SmallText'
import styled from 'styled-components'

import SocialSection from './primitives/SocialSection'
import { ThemedStyles } from '../Layout/ThemeProvider'
import { Typography } from './primitives'

const AboutContainer = styled.div`
	.me {
    font-weight: 400;
	}
`

const BioContainer = styled.div`
  padding: 6rem 2rem;
  flex: 1;

	@media (min-width: 992px) {
		padding: 6rem 4rem;
	}
	
  a {
    color: rgba(0, 0, 0, 0.9);
    display: block;
    margin-top: 1rem;
  }
`

const Email = styled.a`
  text-decoration: underline;
`

const About = () => {
	return (
		<AboutContainer id="about">
			<div>
				<div className="w-full md:w-2/3">
					<BioContainer data-aos="fade-up" data-aos-duration={750}>
						<SmallText>just a little</SmallText>
						<Typography variant="h2" weight="black" className="mt-2" color={ThemedStyles.light.text}>
							About<span className="me">Me</span>
						</Typography>
						<Typography variant="p" color={ThemedStyles.light.text}> 
              Hey! I&apos;m Tope, a <b>software engineer</b> and <b>creative professional</b> residing
              in Dallas, TX. I&apos;ve been designing and developing professionally
              for 5+ years, and I work on all types of projects: web & mobile
              applications, marketing campaigns, non-profit websites and more.
							<b>
								<Email href="mailto:tope.daram@gmail.com?subject=Let's get in touch">
                  tope.daram@gmail.com
								</Email>
							</b>
						</Typography> 
						<SocialSection/>
					</BioContainer>
				</div>
				<div>
					{/* <Overlay/> */}
					{/* <PortraitContainer src={Portrait} className="img-fluid" alt="" /> */}
				</div>
			</div>
		</AboutContainer>
	)
}

export default About