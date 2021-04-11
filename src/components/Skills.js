import React from 'react'
import styled from 'styled-components'
import { Typography } from './primitives'

const SkillsContainer = styled.div`
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
					<SkillsContainer data-aos="fade-up" data-aos-duration={1000}>
						<Typography variant="h2" weight="black" className="mt-2">
							Skills
						</Typography>
						<Typography variant="p"> 
							Over the years, I&apos;ve had the opportunity to work with a wide variety
							of technologies to build cool projects and manage them from start to
							finish. Here are some of my favorite development technologies, project management
							tools, and hobbies that help me see each project through.
						</Typography>
					</SkillsContainer>
				</div>
			</div>
			<SkillsSection className="flex flex-col justify-between w-full md:w-2/3 lg:flex-row">
				<div data-aos="fade-up" data-aos-duration={1000} data-aos-delay='200'>
					<SkillsTitle variant="h2">Development</SkillsTitle>
					<SkillsBullet variant="p">HTML5/CSS3</SkillsBullet>
					<SkillsBullet variant="p">JavaScript</SkillsBullet>
					<SkillsBullet variant="p">Node.JS</SkillsBullet>
					<SkillsBullet variant="p">React</SkillsBullet>
					<SkillsBullet variant="p">GatsbyJS</SkillsBullet>
					<SkillsBullet variant="p">MongoDB</SkillsBullet>
					<SkillsBullet variant="p">GraphQL</SkillsBullet>
					<SkillsBullet variant="p">SQL</SkillsBullet>
					<SkillsBullet variant="p">Angular</SkillsBullet>
					<SkillsBullet variant="p">Python</SkillsBullet>
				</div>
				<div data-aos="fade-up" data-aos-duration={1000} data-aos-delay='200'>
					<SkillsTitle variant="h2">Project Management</SkillsTitle>
					<SkillsBullet variant="p">Agile Devleopment</SkillsBullet>
					<SkillsBullet variant="p">GitHub</SkillsBullet>
					<SkillsBullet variant="p">GitFlow</SkillsBullet>
					<SkillsBullet variant="p">Asana</SkillsBullet>
					<SkillsBullet variant="p">Atlassian Jira</SkillsBullet>
					<SkillsBullet variant="p">Notion</SkillsBullet>
				</div>
				<div  data-aos="fade-up" data-aos-duration={1000} data-aos-delay='200'>
					<SkillsTitle variant="h2">Personal</SkillsTitle>
					<SkillsBullet variant="p">Trumpet</SkillsBullet>
					<SkillsBullet variant="p">Photography</SkillsBullet>
					<SkillsBullet variant="p">Podcasting</SkillsBullet>
					<SkillsBullet variant="p">Giving Back</SkillsBullet>
				</div>
			</SkillsSection>
		</div>
	)
}

export default Skills