import React from 'react'
import SEO from '../components/seo'
import Typed from 'react-typed'
import styled from 'styled-components'
import { Layout } from '../Layout'
import FullPageDiv from '../components/styled-components/FullPageDiv'
import CommunitySupport from '../components/CommunitySupport'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import { Link } from 'react-scroll'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { Typography } from '../components/primitives'

const HeroMessage = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  margin-left: 10%;
  h1,
  h2 {
    font-family: Montserrat, sans-serif;
    font-size: 1.5rem;
    margin-bottom: 0;
  }
  @media (min-width: 992px) {
    h1,
    h2 {
      font-size: 3rem;
    }
  }
`

const Welcome = styled(Typography)`
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

const FirstName = styled(Typography)`
  font-weight: 900;
`

const LastName = styled(Typography)`
  font-weight: 400;
`

const DotCom = styled.div`

  input {
    font-size: 1rem !important;
    font-weight: 700;
    opacity: 0.5;
    background: none;
    border: none;
    color: ${({theme}) => theme.text};
    font-weight: 100;
    text-transform: uppercase;
    /* border: 1px solid red; */
    width: 85vw;
  }

  @media (min-width: 992px) {
    input {
      font-size: 1.5rem !important;
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
  border: 2px solid ${({theme}) => theme.text };
  border-radius: 100%;
  font-size: 26px;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background 0.3s ease-in-out;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-top:8px;

    color: ${({theme}) => theme.text };
  }

  &:focus,
  &:hover {
    outline: none;
    background: rgba(255, 255, 255, 0.1);
  }
`

const Content = () => (
	<>
		<SEO title="Home" />
		<FullPageDiv>
			<div>
				<HeroMessage>
					<Welcome variant="p">welcome to my site</Welcome>
					<div className="flex flex-col items-start sm:flex-row sm:items-end">
						<div className="flex mr-2">
							<FirstName variant="h1" className="mt-2">TOPE</FirstName>
							<LastName variant="h1" className="mt-2">DARAMOLA</LastName>
						</div>
						{' '}
						<DotCom>
							<Typed
								strings={[
									'is a Software Developer.',
									'is a Software Engineer.',
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
					</div>
				</HeroMessage>
			</div>
			<ScrollButton>
				<Link to="fist-div" spy={true} smooth={'easeOutCubic'} duration={500}>
					<AiOutlineArrowDown className="animated"/>
				</Link>
			</ScrollButton>
		</FullPageDiv>
		<CommunitySupport/>
		<About />
		<Skills />
		<Portfolio />
	</>
)


const IndexPage = () => ( 
	<Layout
		title="Home"
		content={<Content/>}
	/>
)

export default IndexPage