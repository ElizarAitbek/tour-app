import React from "react";
import { CreateTour } from "../../components/CreateTour";
import { TourList } from "../../components/TourList";
import { useSelector } from "react-redux";

export const AdminPage = () => {
  const { tours } = useSelector((state) => state.tours);
  return (
    <div>
      <CreateTour />
      <TourList tours={tours} />
    </div>
  );
};
