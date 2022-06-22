import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import UserInformation from "../userInformation";

const buttonStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 64,
    display: "block",
  },
}));

const CheckIn = (props) => {
  const classes = buttonStyles();
  return (
    <>
      <div>
        <UserInformation name={"Jose luis"} />
      </div>
    </>
  );
};
export { CheckIn };
