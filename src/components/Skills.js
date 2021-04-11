import React from 'react'
import styled from 'styled-components'

import { Typography } from './primitives'
import { ThemedStyles } from '../Layout/ThemeProvider'

const SkillsHeader = styled.div`
  padding: 6rem 2rem;
  padding-bottom: 2rem;
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
const SkillsSection = styled.div`
	padding: 1rem 2rem;
`

const SkillsBullet = styled(Typography)`
  margin: 1rem 0;
  &:before {
    content: "— ";
    padding-left: 15px;
  }
`

const SkillsTitle = styled(Typography)`
  font-size: 1.5rem;
  &:before {
    content: "| ";
    font-size: 2.5rem;
    font-weight: 500;
  }
`

const Skills = () => {
	return (
		<div>
			<div>
				<div className="w-full md:w-2/3">
					<SkillsHeader data-aos="fade-up" data-aos-duration={1000}>
						<Typography variant="h2" weight="black" className="mt-2" color={ThemedStyles.light.text}>
							Skills
						</Typography>
						<Typography variant="p" color={ThemedStyles.light.text}> 
							Over the years, I&apos;ve had the opportunity to work with a wide variety
							of technologies to build cool projects and manage them from start to
							finish. Here are some of my favorite development technologies, project management
							tools, and hobbies that help me see each project through.
						</Typography>
					</SkillsHeader>
				</div>
			</div>
			<SkillsSection className="flex flex-col justify-between w-full md:w-2/3 lg:flex-row">
				<div data-aos="fade-up" data-aos-duration={1000} data-aos-delay='200'>
					<SkillsTitle variant="h2" color={ThemedStyles.light.text}>Development</SkillsTitle>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>HTML5/CSS3</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>JavaScript</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>Node.JS</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>React</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>GatsbyJS</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>MongoDB</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>GraphQL</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>SQL</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>Angular</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>Python</SkillsBullet>
				</div>
				<div data-aos="fade-up" data-aos-duration={1000} data-aos-delay='200'>
					<SkillsTitle variant="h2" color={ThemedStyles.light.text}>Project Management</SkillsTitle>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>Agile Devleopment</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>GitHub</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>GitFlow</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>Asana</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>Atlassian Jira</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>Notion</SkillsBullet>
				</div>
				<div  data-aos="fade-up" data-aos-duration={1000} data-aos-delay='200'>
					<SkillsTitle variant="h2" color={ThemedStyles.light.text}>Personal</SkillsTitle>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>Trumpet</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>Photography</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>Podcasting</SkillsBullet>
					<SkillsBullet variant="p" color={ThemedStyles.light.text}>Giving Back</SkillsBullet>
				</div>
			</SkillsSection>
		</div>
	)
}

export default Skills