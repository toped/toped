import React from 'react'
import SEO from '../components/seo'
import Typed from 'react-typed'
import styled from 'styled-components'
import FullPageDiv from '../components/primitives/FullPageDiv'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import { Link } from 'react-scroll'
import { AiOutlineArrowDown } from 'react-icons/ai'

const HeroMessage = styled.div`
  position: absolute;
  top: 30%;
  margin-left: 10%;
  h1,
  h2 {
    font-family: Montserrat, sans-serif;
    font-size: 1.5rem;
    color: #fff;
    display: inline-block;
    margin-bottom: 0;
  }
  @media (min-width: 992px) {
    h1,
    h2 {
      font-size: 3rem;
    }
  }
`

const Welcome = styled.p`
  font-size: 1rem !important;
  display: block;
  font-weight: 400;
  padding: 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.15);

  @media (min-width: 992px) {
    font-size: 1.5rem !important;
  }
`

const FirstName = styled.h1`
  font-weight: 900;
`

const LastName = styled.h1`
  font-weight: 400;
`

const DotCom = styled.div`
  display: inline-block;

  input {
    font-size: 1.5rem !important;
    font-weight: 700;
    opacity: 0.5;
    background: none;
    border: none;
    color: #fff;
    font-weight: 100;
    text-transform: uppercase;
    /* border: 1px solid red; */
    width: 100vw;
  }

  @media (min-width: 992px) {
    input {
      font-size: 3rem !important;
      width: 60vw;
    }
  }
`

const ScrollButton = styled.div`
  position: absolute;
  width: 55px;
  height: 55px;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, -20%);
  z-index: 11;
  border: 2px solid white;
  border-radius: 100%;
  font-size: 26px;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background 0.3s ease-in-out;
  color: rgba(225, 225, 225, 1);
  background: transparent;

  i {
    color: #fff;
  }

  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:focus,
  &:hover {
    color: #fff;
    outline: none;
    background: rgba(255, 255, 255, 0.1);
  }
`

const IndexPage = () => (
	<>
		<SEO title="Home" />
		<FullPageDiv>
			<div className="container-fluid">
				<div className="row">
					<HeroMessage>
						<Welcome>welcome to my site</Welcome>
						<FirstName>TOPE</FirstName>
						<LastName>DARAMOLA</LastName>
						{' '}
						<DotCom>
							<Typed
								strings={[
									'is a Software Developer.',
									'is a Software Engineer.',
									'is a Content Designer.',
									'is an Amateur Photographer.',
									'is a Creative Professional.'
								]}
								typeSpeed={40}
								backSpeed={50}
								showCursor={true}
								cursorChar="_"
								autoInsertCss={true}
								smartBackspace={true}
								attr="value"
								loop
							>
								<input type="text" />
							</Typed>
						</DotCom>
						{' '}
					</HeroMessage>
				</div>
				<ScrollButton>
					<Link to="about" spy={true} smooth={'easeOutCubic'} duration={500}>
						<AiOutlineArrowDown className="animated"/>
					</Link>
				</ScrollButton>
			</div>
		</FullPageDiv>
		<About />
		<Skills />
		<Portfolio />
	</>
)

export default IndexPage
