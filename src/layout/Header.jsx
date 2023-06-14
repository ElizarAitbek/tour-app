import { ProfileIcon } from "../assets/ProfileIcon";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <p>Manas 🇰🇬 Tours</p>
      <span onClick={() => navigate("/")}>
        <ProfileIcon /> выйти из системы
      </span>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  background-color: #ffffff;

  border-bottom: 1px solid #333;
  & > p {
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    background-color: #333;
    border: 1px solid #333;
    padding: 5px 10px;
    border-radius: 5px;
  }

  & > span {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 700;
    color: #333;
    cursor: pointer;
    border: 1px solid #333;
    padding: 5px 10px;
    border-radius: 5px;

    &:hover {
      background-color: #333;
      color: #ffffff;
      & > svg path {
        fill: #ffffff;
      }
    }

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;
