import React from "react"
import SEO from "../components/seo"
import Typed from "react-typed";
import styled from "styled-components";
import FullPageDiv from "../components/primitives/FullPageDiv";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import { Link } from "react-scroll";
import { AiOutlineArrowDown, AiOutlineSketch } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { DiJavascript1, DiMongodb, DiPhotoshop, DiOpensource } from 'react-icons/di'
import HeroObject from "../components/HeroObject"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


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
  }
  input {
    display: block;
    background: none;
    border: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 100;
  }
  @media (min-width: 992px) {
    h1,
    h2 {
      font-size: 3rem;
    }
  }
`;

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
`;

const FirstName = styled.h1`
  font-weight: 900;
`;

const LastName = styled.h1`
  font-weight: 400;
`;

const DotCom = styled.h2`
  font-size: 2rem !important;
  font-weight: 700;
  opacity: 0.5;
`;

const ScrollButton = styled.div`
  position: absolute;
  width: 55px;
  height: 55px;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0%);
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
`;

const IndexPage = () => (
  <ParallaxProvider>
    <SEO title="Home" />
      <FullPageDiv>
        {/* <HeroObject fontSize={15} leftPosition={55}>
          <FaReact/>
        </HeroObject>
      <HeroObject fontSize={10} topPosition={20}>
        <DiJavascript1/>
      </HeroObject>
      <HeroObject fontSize={10} topPosition={15} leftPosition={84}>
        <DiMongodb/>
      </HeroObject>
      <HeroObject fontSize={9} topPosition={39} leftPosition={82}>
        <DiPhotoshop/>
      </HeroObject>
      <HeroObject fontSize={7} topPosition={60} leftPosition={90}>
        <DiOpensource/>
      </HeroObject>
      <HeroObject fontSize={7} topPosition={75} leftPosition={80}>
        <AiOutlineSketch/>
      </HeroObject> */}
        <div className="container-fluid">
          <div className="row">
            <HeroMessage>
              <Welcome>welcome to my site</Welcome>
              <FirstName>TOPE</FirstName>
              <LastName>DARAMOLA</LastName>
              <DotCom>.com</DotCom>
              <Typed
                strings={[
                  "Software Developer",
                  "Software Engineer",
                  "Content Designer",
                  "Amateur Photographer",
                  "Creative Professional"
                ]}
                typeSpeed={40}
                backSpeed={50}
                showCursor={true}
                smartBackspace={true}
                attr="value"
                loop
              >
                <input type="text" />
              </Typed>{" "}
            </HeroMessage>
          </div>
          <ScrollButton>
            <Link to="about" spy={true} smooth={"easeOutCubic"} duration={500}>
              <AiOutlineArrowDown className="animated"/>
            </Link>
          </ScrollButton>
        </div>
      </FullPageDiv>
      <About />
      <Skills />
      <Portfolio />
    </ParallaxProvider>
)

export default IndexPage
