import React, { useState, useEffect } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/registerForm";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { db } from "../../firebase/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { doc, getDoc, query, where } from "firebase/firestore";

const Login = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("@colegioherbart.edu.mx");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [register, setRegister] = useState(false);
  const [level, setLevel] = useState("");
  const [campus, setCampus] = useState("");
  const [phone, setPhone] = useState("");
  const [uid, setUid] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeConfirmPassword = (event) => {
    setConfirm(event.target.value);
  };

  const onChangeConfirm = (event) => {
    setConfirm(event.target.value);
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const onChangeLevel = (event) => {
    setLevel(event.target.value);
  };

  const onChangeCampus = (event) => {
    setCampus(event.target.value);
  };

  const tryRegister = async () => {
    const auth = getAuth();
    const getUid = "";
    if (password.length > 0 && password === confirm) {
      createUserWithEmailAndPassword(auth, email, password).then((response) => {
        console.log(response)
        setUid(response.user.uid);
      });
      console.log("soy el UID", uid);
      try {
        const infoData = {
          uid: uid,
          name: name,
          email: email,
          password: password,
          phone: phone,
          level: level,
          campus: campus,
        };
        console.log(infoData);
        await addDoc(collection(db, "users"), { infoData });
        dispatch(setUser(infoData));
        navigate("/CheckPage");
      } catch (e) {
        console.log("Error adding document:", e);
      }
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  const tryLogin = async () => {
    try {
      let userObj = {};
      const querySnapshot = await getDocs(
        collection(db, "users"),
        where("uid", "==", user.uid)
      );
      querySnapshot.forEach((doc) => {
        userObj = doc.data().infoData;
      });
      dispatch(setUser(userObj));
      signInWithEmailAndPassword(auth, email, password).then((response) => {
        console.log(response.user.uid);
        navigate("/CheckPage");
      });
    } catch (err) {
      console.log(err);
    }
  };

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
