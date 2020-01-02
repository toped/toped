import React from "react";
import styled from "styled-components";
import SectionTitle from "./primitives/SectionTitle";

const SkillsContainer = styled.div`
  padding: 6rem 4rem;
  padding-bottom: 2rem;
  flex: 1;

  a {
    color: rgba(0, 0, 0, 0.9);
    display: block;
    margin-top: 1rem;
  }
`;

const SkillsBullet = styled.div`
  margin: 1rem 0;
  &:before {
    content: "— ";
    padding-left: 15px;
  }
`;

const SkillsTitle = styled.div`
  font-size: 1.5rem;
  &:before {
    content: "| ";
    font-size: 2.5rem;
    font-weight: 500;
  }
`;

const Skills = () => {
  return (
    <div className="conatiner-fluid border-bottom">
      <div>
        <div className="col-lg-8">
          <SkillsContainer>
            <SectionTitle>Skills</SectionTitle>
            Over the years, I've had the opportunity to work with a wide variety
            of technologies to build cool projects and manage them from start to
            finish. Here are some of my favorite languages, project management
            tools, and hobbies that help me see each project through.
          </SkillsContainer>
        </div>
      </div>
      <div className="row plr-4 pb-6">
        <div className="col-md-4">
          <SkillsTitle>Development</SkillsTitle>
          <SkillsBullet>HTML5/CSS3</SkillsBullet>
          <SkillsBullet>JavaScript</SkillsBullet>
          <SkillsBullet>Angular</SkillsBullet>
          <SkillsBullet>React</SkillsBullet>
          <SkillsBullet>PHP</SkillsBullet>
          <SkillsBullet>Python</SkillsBullet>
          <SkillsBullet>SQL</SkillsBullet>
          <SkillsBullet>MongoDB</SkillsBullet>
        </div>
        <div className="col-md-4">
          <SkillsTitle>Project Management</SkillsTitle>
          <SkillsBullet>GitHub</SkillsBullet>
          <SkillsBullet>GitFlow</SkillsBullet>
          <SkillsBullet>Asana</SkillsBullet>
          <SkillsBullet>Atlassian Jira</SkillsBullet>
        </div>
        <div className="col-md-4">
          <SkillsTitle>Personal</SkillsTitle>
          <SkillsBullet>Playing trumpet</SkillsBullet>
          <SkillsBullet>Photography</SkillsBullet>
          <SkillsBullet>Gaming</SkillsBullet>
          <SkillsBullet>Sleeping</SkillsBullet>
        </div>
      </div>
    </div>
  );
};

export default Skills;
