import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTour } from "../store/slices/tour-slice";

export const TourList = ({ tours }) => {
  const dispatch = useDispatch();

  const deleteTourHandler = (id) => {
    dispatch(deleteTour(id));
  };

  return (
    <StyledTourList>
      {tours.length === 0 ? (
        <h3>Пока нет никаких туров, вы можете добавить свой тур</h3>
      ) : (
        tours?.map((tour) => {
          return (
            <TourCard key={tour.id}>
              <img src={tour.image} alt={tour.title} />
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
              <span>{tour.price} сом</span>
              <button onClick={() => deleteTourHandler(tour.id)}>
                Удалить
              </button>
            </TourCard>
          );
        })
      )}
    </StyledTourList>
  );
};

const StyledTourList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
`;

const TourCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  & > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
  & > h3 {
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }
  & > p {
    font-size: 14px;
    font-weight: 400;
    color: #333;
  }
  & > span {
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }
  & > button {
    width: 100%;
    padding: 10px;
    background-color: #333;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    &:hover {
      background-color: #ffffff;
      color: #333;
      border: 1px solid #333;
    }
  }
`;
