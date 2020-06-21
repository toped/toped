import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ObjectWrapper = styled.div`
	display: flex;
	position: fixed;
  color: rgba(255,255,255,.03);
  font-size: 8rem;
  font-weight: bold;
  top: ${props => props.top + '%'};
  left: -${props => props.left + '%'};
	z-index: -1;

	img {
		opacity: .3;
	}

	width: 100vw;

	@media (min-width: 768px) {
		font-size: ${props => props.size + 'rem'};
  }
`

const HeroObject = ({children, topPosition, leftPosition, fontSize}) => {

	//Creating an inline style because of performance issues in safari
	const divStyle = {
		transform: `translate(-${topPosition}%, -${leftPosition}%)`
	}

	return (
		<ObjectWrapper style={divStyle} top={topPosition} left={leftPosition} size={fontSize}>
			{children}
		</ObjectWrapper>
	)
}

HeroObject.propTypes = {
	children: PropTypes.any,
	content: PropTypes.string,
	topPosition: PropTypes.number,
	leftPosition: PropTypes.number,
	fontSize: PropTypes.number,
}

HeroObject.defaultProps = {
	content: '</>',
	topPosition: 50,
	leftPosition: 50,
	fontSize: 25,
}

export default HeroObject
