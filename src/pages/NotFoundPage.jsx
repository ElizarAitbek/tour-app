import styled from "styled-components";
import {
  useRouteError,
  isRouteErrorResponse,
  Link,
  useNavigate,
} from "react-router-dom";

const NotFoundPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  let errorMessage;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <StyledErrorPage>
      <h1>404</h1>
      <p>Такой страницы не существует</p>
      <p>
        <i>{errorMessage}</i>
      </p>
      <StyledLink onClick={() => navigate(-1)}>Вернуться назад</StyledLink>
    </StyledErrorPage>
  );
};

export default NotFoundPage;

const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  gap: 1rem;
  h1 {
    font-size: 3rem;
    color: #0037ff;
  }
  p {
    font-size: 1.5rem;
  }
  i {
    font-size: 1rem;
  }
`;

const StyledLink = styled.button`
  font-size: 1.5rem;
  color: #0037ff;
  text-decoration: none;
  border: none;
  background-color: transparent;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`;
