import React from "react";
import SmallText from "../components/primitives/SmallText";
import styled from "styled-components";
import SectionTitle from "./primitives/SectionTitle";
import Portrait from "../assets/imgs/IMG_0419.jpg";

const AboutContainer = styled.div`
  background: #f2f2f2;
`

const BioContainer = styled.div`
  padding: 6rem 4rem;
  flex: 1;

  a {
    color: rgba(0, 0, 0, 0.9);
    display: block;
    margin-top: 1rem;
  }
`;

const SocialSection = styled.div`
  a {
    color: rgba(0, 0, 0, 0.9);
    padding: 5px 20px 0 0;
    font-size: 1.5rem !important;
    display: inline-block;
  }
`;

const Overlay = styled.div`
  /* background: rgba(16, 16, 16, .35); */
  height: 100%;
    width: 100%;
    position: absolute;
`

const PortraitContainer = styled.img`
  filter: grayscale(55%);
  :hover{ 
    filter: grayscale(0%);
    transform: scale(1.035);
  };
  
  transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
`

const About = () => {
  return (
    <AboutContainer id="about" className="container-fluid border-bottom">
      <div className="row">
        <div className="col-md-8">
          <BioContainer>
            <SmallText>just a little</SmallText>
            <SectionTitle>
              About<span>Me</span>
            </SectionTitle>
            <p>
              Hey! I'm Tope, a web developer and creative professional residing
              in Dallas, TX. I've been designing and developing professionally
              for 5 years, and I work on all types of projects: web & mobile
              applications, marketing campaigns, non-profit websites and more.
              <b>
                <a href="mailto:tope.daram@gmail.com?subject=Lets's get in touch">
                  tope.daram@gmail.com
                </a>
              </b>
            </p>
            <SocialSection>
              <a
                href="https://github.com/toped"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tope-daramola-0002375b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/_toped/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.facebook.com/tope.d19?ref=bookmarks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </SocialSection>
          </BioContainer>
        </div>
        <div className="col-md-4 col-fill col-no-padding">
        <Overlay/>
          <PortraitContainer src={Portrait} className="img-fluid" alt="" />
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
