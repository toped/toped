import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Badge } from 'evergreen-ui'
import VisibilitySensor from 'react-visibility-sensor'

const ProjectContainer = styled.div`
  font-family: "Nunito Sans", sans-serif;
  padding: 6rem 4rem;
  flex: 1;
  overflow: hidden;

  a {
    color: #000;
    text-decoration: underline;
  }

  img {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: 50% 0; /* positioned top left of the content box */
    transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    transform: scale(1.035);
  }
  div {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000;
    transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    transform: scale(1.035);
    z-index: -1;
  }

  ${props =>
		props.visible &&
    props.mobile &&
    css`
      color: #fff;

      a {
        color: #fff;
      }

      img {
        opacity: 0.9;
        transform: scale(1);
      }

      div {
        opacity: 0.4;
        transform: scale(1);
      }
    `}

  :hover {
    color: #fff;

    a {
      color: #fff;
    }

    img {
      opacity: 0.9;
      transform: scale(1);
    }

    div {
      opacity: 0.4;
      transform: scale(1);
    }
  }

  @media (min-width: 992px) {
    img {
      top: -50%;
    }
  }
`

const ProjectName = styled.h2`
  font-weight: 700;
`

const ProjectTextTop = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 400;
`

const ProjectTextBottom = styled.p`
  font-size: 0.9rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 300;
`

const Project = props => {
	const [isMobile , setIsMobile] = useState(true)
	const [hovering, setHovering] = useState(false)

	const handleOnMouseEnter = () => {
		if (!isMobile) {
			setHovering(prev => !prev)
		}
	}

	const onChange = isVisible => {
		if (isMobile) {
			setHovering(isVisible)
		}
	}

	useEffect(() => {
		setIsMobile(window.matchMedia('only screen and (max-width: 760px)').matches)
	}, [])

	const { name, projectType, image, url, tech } = props

	return (
		<VisibilitySensor onChange={onChange} minTopValue={100} active={isMobile}>
			<ProjectContainer
				onMouseEnter={handleOnMouseEnter}
				onMouseLeave={handleOnMouseEnter}
				visible={hovering}
				mobile={isMobile}
			>
				<ProjectTextTop>Client</ProjectTextTop>
				<ProjectName>{name}</ProjectName>
				<ProjectTextBottom>
          [ {projectType} - <a href={url}>View Project</a> ]
				</ProjectTextBottom>
				<div />
				<img src={require(`../../assets/imgs/projects/${image}`)} alt="" />
				{tech.length > 0
					? tech.map(name => {
						return (
							<Badge
								className="mr-2"
								key={name}
								color="neutral"
								isSolid={hovering === false}
							>
								{name}
							</Badge>
						)
					})
					: null}
			</ProjectContainer>
		</VisibilitySensor>
	)
}

export default Project
