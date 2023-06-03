import React from "react";
import { CreateTour } from "../../components/CreateTour";
import { TourList } from "../../components/TourList";

export const AdminPage = () => {
  return (
    <div>
      <CreateTour />
      <TourList />
    </div>
  );
};
