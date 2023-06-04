import React from "react";

import { TourList } from "../../components/TourList";
import { DUMMY_TOURS as tours } from "../../utils/constants";

export const ClientPage = () => {
  return (
    <div>
      <TourList tours={tours} />
    </div>
  );
};
