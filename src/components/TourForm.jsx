import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ErrorMessage } from "./ErrorMessage";
import { setTour } from "../store/slices/tour-slice";

export const TourForm = ({ onClose, title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      image: "",
      title: "",
      description: "",
      price: ""
    }
  });

  const dispatch = useDispatch();

  const createNewTourHandler = (data) => {
    const newTour = {
      id: Date.now(),
      image: data.image,
      title: data.title,
      description: data.description,
      price: data.price
    };

    dispatch(setTour(newTour));
    onClose();
  };

  return (
    <StyledForm onSubmit={handleSubmit(createNewTourHandler)}>
      <h2>{title}</h2>
      <input
        {...register("image", {
          required: {
            value: true,
            message: "Ссылка на картинку обязательна для заполнения"
          },
          minLength: {
            value: 5,
            message: "Ссылка на картинку должна быть не менее 5 символов"
          }
        })}
        placeholder="Ссылка на картинку"
      />
      <ErrorMessage>{errors?.image?.message}</ErrorMessage>
      <input
        {...register("title", {
          required: {
            value: true,
            message: "Название тура обязательно для заполнения"
          },
          minLength: {
            value: 5,
            message: "Название тура должно быть не менее 5 символов"
          }
        })}
        placeholder="Название тура"
      />
      <ErrorMessage>{errors?.title?.message}</ErrorMessage>
      <textarea
        {...register("description", {
          required: {
            value: true,
            message: "Описание тура обязательно для заполнения"
          },
          minLength: {
            value: 5,
            message: "Описание тура должно быть не менее 5 символов"
          }
        })}
        placeholder="Описание тура"
      />
      <ErrorMessage>{errors?.description?.message}</ErrorMessage>
      <input
        {...register("price", {
          required: {
            value: true,
            message: "Цена тура обязательна для заполнения"
          },
          minLength: {
            value: 5,
            message: "Цена тура должна быть не менее 5 символов"
          }
        })}
        type="number"
        placeholder="Цена тура"
      />
      <ErrorMessage>{errors?.price?.message}</ErrorMessage>

      <button type="submit">Создать тур</button>
      <button onClick={onClose}>Отмена</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  & > input {
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 5px;
  }
  & > button {
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 5px;
    background-color: #333;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      background-color: #ffffff;
      color: #333;
    }
  }
`;
