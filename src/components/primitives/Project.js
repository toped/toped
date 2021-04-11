import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Badge } from 'evergreen-ui'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'
import Typography from './Typography'

const ProjectContainer = styled.div`
  position: relative;
  font-family: "Nunito Sans", sans-serif;
  padding: 6rem 4rem;
  flex: 1;
  overflow: hidden;

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
  .black-bg {
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
      img {
        opacity: 0.9;
        transform: scale(1);
      }

      .black-bg {
        opacity: 0.4;
        transform: scale(1);
      }
    `}

  :hover {
    img {
      opacity: 0.9;
      transform: scale(1);
    }

    .black-bg {
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

const ProjectName = styled(Typography)`
  font-weight: 700;
`
const ProjectTextTop = styled(Typography)`
  font-family: "Roboto Condensed", sans-serif;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 400;
`
const ProjectTextBottom = styled(Typography)`
  display: inline-flex;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 300;
`
const ProjectLink = styled(Typography)`
  display: inline-flex;
  text-decoration: underline;
`

const Project = ({ name, projectType, image, url, tech }) => {
	const [isMobile , setIsMobile] = useState(true)
	const [hovering, setHovering] = useState(false)
	const [visible, setVisible] = useState(false)

	const handleOnMouseEnterExit = () => {
		if (!isMobile) {
			setHovering(prev => !prev)
		}
	}

	const onChange = isVisible => {
		if (isMobile) {
			setVisible(isVisible)
		}
	}

	useEffect(() => {
		setIsMobile(window.matchMedia('only screen and (max-width: 760px)').matches)
	}, [])

	return (
		<VisibilitySensor onChange={onChange} minTopValue={100} active={isMobile}>
			<ProjectContainer
				onMouseEnter={handleOnMouseEnterExit}
				onMouseLeave={handleOnMouseEnterExit}
				visible={visible}
				mobile={isMobile}
			>
				<ProjectTextTop invertColor={!isMobile ? hovering : visible}>Client</ProjectTextTop>
				<ProjectName variant="h3" invertColor={!isMobile ? hovering : visible}>{name}</ProjectName>
				<div className="mb-4">
					<ProjectTextBottom variant="small" invertColor={!isMobile ? hovering : visible}>[ {projectType}  - </ProjectTextBottom>
					<a href={url}>
						<ProjectLink variant="small" invertColor={!isMobile ? hovering : visible}>View Project ]</ProjectLink>
					</a>
				</div>
				<div className="black-bg" />
				<img src={image} alt="" />
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

Project.propTypes = {
	name: PropTypes.string,
	image: PropTypes.any,
	url: PropTypes.string,
	tech: PropTypes.any,
	length: PropTypes.any,
	projectType: PropTypes.any
}

export default Project