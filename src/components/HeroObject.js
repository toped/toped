import React from 'react'
import PropTypes from "prop-types"
import styled from "styled-components";

export const ObjectWrapper = styled.div`
  /* height: 50vh; */
  position: absolute;
  color: rgba(255,255,255,.1);
  font-size: ${props => props.size + 'em'};;
  font-weight: bold;
  top: ${props => props.top + '%'};;
  left: ${props => props.left + '%'};;
`;

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
