import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const Modal = ({ onClose, children }) => {
  return createPortal(
    <>
      <ModalOverlay onClick={onClose}></ModalOverlay>
      <StyledModal>{children}</StyledModal>
    </>,
    document.getElementById("modal-root")
  );
};

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 20px;
  max-width: 800px;
  min-width: 300px;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 100;
`;
