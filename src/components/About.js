import React from 'react'
import SmallText from '../components/primitives/SmallText'
import styled from 'styled-components'
import SectionTitle from './primitives/SectionTitle'
import SocialSection from './primitives/SocialSection'

const AboutContainer = styled.div`
  background: #f2f2f2;
`

const BioContainer = styled.div`
  padding: 6rem 4rem;
  flex: 1;

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
		<AboutContainer id="about" className="container-fluid border-bottom">
			<div className="row">
				<div className="col-md-8">
					<BioContainer data-aos="fade-up" data-aos-duration={750}>
						<SmallText>just a little</SmallText>
						<SectionTitle>
              About<span>Me</span>
						</SectionTitle>
						<p>
              Hey! I&apos;m Tope, a web developer and creative professional residing
              in Dallas, TX. I&apos;ve been designing and developing professionally
              for 5 years, and I work on all types of projects: web & mobile
              applications, marketing campaigns, non-profit websites and more.
							<b>
								<Email href="mailto:tope.daram@gmail.com?subject=Lets's get in touch">
                  tope.daram@gmail.com
								</Email>
							</b>
						</p>
						<SocialSection/>
					</BioContainer>
				</div>
				<div className="col-md-4 col-fill col-no-padding">
					{/* <Overlay/> */}
					{/* <PortraitContainer src={Portrait} className="img-fluid" alt="" /> */}
				</div>
			</div>
		</AboutContainer>
	)
}

export default About
