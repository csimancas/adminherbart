import React from "react";
import SideNav from "../../components/SideNav";
import { CheckIn } from "../../components/CheckIn/checkIn";

const CheckPage = () => {
  return (
    <>
      <SideNav>
        <CheckIn />
      </SideNav>
    </>
  );
};

export { CheckPage };
