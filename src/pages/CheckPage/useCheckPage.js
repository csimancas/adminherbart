import React, {useEffect, useState} from 'react';
import * as firestore from "firebase/firestore";
import * as turf from '@turf/turf';
import { db } from "../../firebase/firebaseConfig";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { userState } from '../../redux/slices/userSlice';
import { where } from 'firebase/firestore';


const auth = getAuth();
const schoolUbication = {
    accuracy: 35,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 21.461395908291873,
    longitude: -104.83485490545178,
    speed: null,
  };
  

const useCheckPage = () => {
  const [userData, setUserData] = useState([])
    const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [distance, setDistance] = useState(0);

const dispatch = useDispatch();
  const user = useSelector(userState);
  const auth = getAuth();
  let navigate = useNavigate();

  const imprimir = () => {
    console.log(user);
  }

 
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            firestore.getDocs(firestore.collection(db, "users"), where("uid", "==", uid)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setUserData(doc.data().infoData)
                    dispatch(setUser(doc.data().infoData))
                });
            });
        } else {
            navigate("/");
        }
      });
    }, [])

    const getUbication = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          setLongitude(parseFloat(position.coords.longitude));
          setLatitude(parseFloat(position.coords.latitude));
        });
        let to = turf.point([
          parseFloat(schoolUbication.longitude),
          parseFloat(schoolUbication.latitude),
        ]);
        let from = turf.point([longitude, latitude]);
        let options = { units: "kilometers" };
    
        let getDistance = turf.distance(from, to, options);
        setDistance(getDistance);
      };


      return {
        getUbication,
        distance,
        userData,
        imprimir

      };
}

export default useCheckPage;