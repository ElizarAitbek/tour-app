import React from "react";
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledSidebarContent>
        <h1>Туры по Кыргызстану</h1>

        <p>сообщения</p>
        <p>туры</p>
        <p>отзывы</p>
        <p>рейтинг туров</p>
      </StyledSidebarContent>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.section`
  padding: 50px 10px;
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
`;

const StyledSidebarContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;

  & > h1 {
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
  }

  & > p {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    border: 1px solid #fff;
    padding: 20px 10px;
    border-radius: 5px;

    &:hover {
      background-color: #fff;
      color: #333;
    }
  }
`;
