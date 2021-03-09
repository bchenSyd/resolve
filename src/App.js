import React from "react";
import styled from "styled-components";
import MiniFormik from "./screens/miniFormik";
import SignupForm from "./screens/formikBag";

const StyledApp = styled.div`
  text-align: center;
`;
const StyledMain = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  text-align: left;

  @media (min-width: 768px) {
    width: 40%;
  }
`;
const App = () => {
  return (
    <StyledApp>
      <StyledMain>
        <SignupForm />
        {/* <MiniFormik /> */}
      </StyledMain>
    </StyledApp>
  );
};

export default App;
