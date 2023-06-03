import React from "react";
import { Modal } from "./Modal";
import { TourForm } from "./TourForm";

export const EditTourModal = ({ tour, isOpen, onClose, title }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TourForm title={title} tour={tour} onClose={onClose} />
    </Modal>
  );
};
