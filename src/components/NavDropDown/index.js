import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { FaLocationArrow } from "ImYoutube2";

import {
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer
} from "./NavDropDown";

const NavDropDown = (props) => (
  <DropDownContainer active={props.isOpen}>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <AiFillPhone />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Phone</DropDownItemTitle>
        <DropDownItemDesc>
          ""
        </DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <AiOutlineMail />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Email</DropDownItemTitle>
        <DropDownItemDesc>
          contact@divoperations.com
        </DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <FaLocationArrow />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>City</DropDownItemTitle>
        <DropDownItemDesc>Queen Creek</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
  </DropDownContainer>
);

export default NavDropDown;
