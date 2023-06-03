import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: auto 230px minmax(320px, 1200px) auto;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  grid-template-areas:
    ". sidebar header ."
    ". sidebar body ."
    "footer footer footer footer";

  & > *:nth-child(1) {
    grid-area: header;
  }

  & > *:nth-child(2) {
    grid-area: sidebar;
  }

  & > *:nth-child(3) {
    grid-area: body;
  }

  & > *:nth-child(4) {
    grid-area: footer;
  }

  @media (max-width: 765px) {
    grid-template-columns: minmax(320px, 1fr);
    grid-template-areas:
      "header"
      "body"
      "footer";

    & > *:nth-child(2) {
      display: none;
    }
    .header {
      display: block;
    }
  }
`;
