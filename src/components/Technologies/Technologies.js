import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiJqueryLogo,
  DiTerminalBadge
} from "react-icons/di";
import { AiOutlineLock } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the developer world, and I am
      super excited to continue my journey as a software engineer.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React <br />
            Asyncronicity <br />
            UI Design
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node <br />
            PHPMyAdmin <br />
            Shell Scripting
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiTerminalBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>System Administration</ListTitle>
          <ListParagraph>
            Linux Servers <br />
            WHM & Cpanel <br />
            Automation
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJqueryLogo size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Networking</ListTitle>
          <ListParagraph>
            DNS Routing <br />
            Search Engine Optimization <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineLock size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Security</ListTitle>
          <ListParagraph>
            System Infastructure <br />
            Malware
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
