import React from "react";
import styled from "styled-components";

import NavigationBar from "../medium/NavigationBar";
import PageTitle from "../small/PageTitle";

const StyledPage = styled.div`
  font-family: sans-serif;
`;

const Page = props => (
  <StyledPage>
    <NavigationBar />
    <PageTitle>{props.title}</PageTitle>
    {props.children}
  </StyledPage>
);

export default Page;
