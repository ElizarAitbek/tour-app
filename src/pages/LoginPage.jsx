import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { setUser } from "../store/slices/auth-slice";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = ({ username }) => {
    dispatch(setUser(username));
    if (username.includes("superadmin")) {
      navigate("/superadmin");
    } else if (username.includes("admin")) {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div>
      <TextBlock>
        <h2>Страница входа</h2>
        <p>
          (Введите адрес электронной почты и пароль, которые вы выбрали при
          регистрации, и затем нажмите кнопку «Войти».)
        </p>
      </TextBlock>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <input
          autoComplete="on"
          {...register("username", {
            required: true,
            minLength: {
              value: 5,
              message:
                "адрес электронной почты должен быть не менее 5 символов",
            },
          })}
          placeholder="email"
          name="username"
        />
        {errors?.username && (
          <ErrorMessage>{errors?.username.message}</ErrorMessage>
        )}

        <input
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "пароль должен быть не менее 6 символов",
            },
          })}
          type="password"
          placeholder="password"
          name="password"
        />
        {errors?.password && (
          <ErrorMessage>{errors?.password.message}</ErrorMessage>
        )}

        <button type="submit">войти</button>
      </StyledForm>
    </div>
  );
};

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.75rem;
  margin: 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 50%;
  }

  button {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 30%;
  }

  button:hover {
    cursor: pointer;
  }
`;
