import React from "react";
import { HomePageContainer } from "./HomePageStyles";
import Directory from "../../components/directory/Directory";

const Homepage = () => {
  return (
    <HomePageContainer className="homepage">
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
