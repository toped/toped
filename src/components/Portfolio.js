import React from 'react'
import Project from './primitives/Project'

const projects = [
	{
		name: 'Utter Fun Games',
		type: 'Web Development',
		imageUrl: 'utter.png',
		url:'https://utter.fun/',
		tech: ['React', 'GatsbyJS', 'GraphQL', 'Firebase', 'Cloud Functions']
	},
	{
		name: 'dpMedia Studio',
		type: 'Web Development',
		imageUrl: 'dpmedia.jpg',
		url:'https://dpmediastudio.com/',
		tech: ['React', 'GatsbyJS', 'Styled-Components', 'Netlify', 'Contentful']
	},
	{
		name: 'LIT Bible Study',
		type: 'Web Development',
		imageUrl: 'lit.jpg',
		url:'https://litbiblestudy.com/',
		tech: ['Square Space', 'HTML / CSS', 'JavaScript']
	},
	{
		name: 'PhrameBooth',
		type: 'Web Development',
		imageUrl: 'phramebooth.jpg',
		url:'https://www.phramebooth.com/',
		tech: ['React', 'GatsbyJS', 'Styled-Components', 'Firebase']
	},
	{
		name: 'Y.E.S. Women Foundation',
		type: 'Web Development x Graphic Design',
		imageUrl: 'yes.jpg',
		url:'http://yeswomen.org/',
		tech: ['PHP', 'Blade Template Engine', 'HTML / CSS', 'Bootstrap', 'JavaScript / jQuery']
	}
]
const Portfolio = () => {
	return (
		<div className="container-fluid">
			<div className="row hide-overflow">
				{projects.length > 0
					? projects.map(project => {
						return (
							<div
								key={project.name}
								className="col-lg-12 border-bottom col-no-padding hide-overflow"
							>
								<Project
									name={project.name}
									projectType={project.type}
									image={project.imageUrl}
									url={project.url}
									tech={project.tech}
								/>
							</div>
						)
					})
					: null}
			</div>
		</div>
	)
}

export default Portfolio
