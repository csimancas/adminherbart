import React, { useState, useEffect } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/registerForm";
import Typography from "@mui/material/Typography";
import useLogin from "./useLogin";

const Login = () => {
  const {
    name,
    email,
    onChangeEmail,
    onChangeName,
    password,
    onChangePassword,
    onChangeConfirmPassword,
    confirm,
    onChangeConfirm,
    phone,
    onChangePhone,
    level,
    onChangeLevel,
    campus,
    onChangeCampus,
    tryRegister,
    tryLogin,
    register
  } = useLogin();
  return (
    <>
      {!register ? (
        <LoginForm
          email={email}
          password={password}
          setEmail={onChangeEmail}
          setPassword={onChangePassword}
          register={register}
          confirm={confirm}
          setConfirm={onChangeConfirmPassword}
          action={tryLogin}
        />
      ) : (
        <RegisterForm
          name={name}
          setName={onChangeName}
          email={email}
          setEmail={onChangeEmail}
          password={password}
          setPassword={onChangePassword}
          confirm={confirm}
          setConfirm={onChangeConfirm}
          phone={phone}
          setPhone={onChangePhone}
          level={level}
          setLevel={onChangeLevel}
          campus={campus}
          setCampus={onChangeCampus}
          action={tryRegister}
        />
      )}
      <Typography onClick={() => setRegister(!register)}>
        {!register ? "¿Aun no tienes una cuenta? Click aqui" : "Iniciar Sesión"}
      </Typography>
    </>
  );
};

export { Login };
