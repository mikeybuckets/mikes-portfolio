import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img
} from "./ProjectsStyles";
import {
  Section,
  SectionText,
  SectionDivider,
  SectionTitle
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionText>
      <h1>
        <span size="4rem" font-color="black">
          {" "}
          Current Stack:
        </span>
      </h1>
      <h4>
        <span size="1rem" color="white">
          {" "}
          Next.js - React.js - Styled-Components
        </span>
      </h4>
    </SectionText>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <br />
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Live Demo</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
