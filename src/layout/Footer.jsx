import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <span>© 2014-2022 manas-tours.com</span>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;

  & > span {
    display: block;
  }
`;
