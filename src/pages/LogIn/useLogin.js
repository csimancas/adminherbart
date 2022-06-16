import React, { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  where,
  query,
  doc,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
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
    if (password.length > 0 && password === confirm) {
      createUserWithEmailAndPassword(auth, email, password).then((response) => {
        setUid(response.user.uid);
      });
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
        navigate("/CheckPage");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    name,
    onChangeName,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    confirm,
    onChangeConfirm,
    onChangeConfirmPassword,
    phone,
    onChangePhone,
    level,
    onChangeLevel,
    campus,
    onChangeCampus,
    tryRegister,
    tryLogin,
    register,
  };
};

export default useLogin;
