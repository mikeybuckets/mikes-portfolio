import Link from "next/link";
import React from "react";

import {
  Section,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Mike's Personal Portfolio
      </SectionTitle>
      <h1>
        <span size="5rem" font-color="black">
          {" "}
          Mike Calendo
        </span>{" "}
        - from Mesa, Arizona
      </h1>
      <SectionText>An Aspiring Software Developer</SectionText>
      <Button id="hero-button">
          <li>
           <Link href="#about">
             Learn More
            </Link>
          </li>
        </Button>
    </LeftSection>
  </Section>
);

export default Hero;
