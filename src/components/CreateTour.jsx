import React from "react";
import styled from "styled-components";
import { Modal } from "./Modal";
import { TourForm } from "./TourForm";
import { useSearchParams } from "react-router-dom";

export const CreateTour = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const modalCondition = searchParams.get("modalCondition") || false;

  const showCreaeteTourModal = () => {
    searchParams.set("modalCondition", true);
    setSearchParams(searchParams);
  };

  const closeModalHandler = () => {
    searchParams.delete("modalCondition");
    setSearchParams(searchParams);
  };

  return (
    <StyledMain>
      <StyledButton onClick={showCreaeteTourModal}>+ Создать тур</StyledButton>
      {modalCondition && (
        <Modal onClose={closeModalHandler} isOpen={modalCondition}>
          <TourForm onClose={closeModalHandler} />
        </Modal>
      )}
    </StyledMain>
  );
};

const StyledMain = styled.main`
  padding: 20px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  background-color: #288304;

  cursor: pointer;
  border: 0.5px solid #333;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background-color: #1c6200;
  }
`;
