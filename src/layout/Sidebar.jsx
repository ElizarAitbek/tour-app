import React from "react";
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <h1>Туры по Кыргызстану</h1>

      <p>сообщения</p>
      <p>туры</p>
      <p>отзывы</p>
      <p>рейтинг туров</p>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px 10px;
  background-color: #333;

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
