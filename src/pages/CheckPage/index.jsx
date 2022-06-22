import React, {useEffect} from "react";
import SideNav from "../../components/SideNav"; // Component
import UserInformation from "../../components/userInformation" // component
import useCheckPage from "./useCheckPage"; // Logic
import {Button} from '@mui/material'
import { useSelector } from "react-redux";
import { userState } from "../../redux/slices/userSlice";

const CheckPage = () => {
  const {imprimir} = useCheckPage();
  const user = useSelector(state => state.user.user);
  return (
    <>
      <SideNav>
        <UserInformation name={user.name} onCheckIn={imprimir}/>
      </SideNav>
    </>
  );
};

export { CheckPage };
