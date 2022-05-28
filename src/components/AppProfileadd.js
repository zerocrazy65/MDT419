import axios from "axios";
import React, { useEffect, useContext } from "react";
import AppProfile from "./AppProfile";
import UserContext from "../Context/UserContext";

const AppProfileadd = () => {
  const { setUserData, userData } = useContext(UserContext);

  useEffect(() => {
    axios.get("/profile").then((res) => {
      setUserData(res.data.pro.filter(
          (user) =>
            user.Customers_Email ===
            JSON.parse(localStorage.getItem("userEmail"))
        )[0]
      );
    });
  }, []);

  return <>{userData && <AppProfile />}</>;
};

export default AppProfileadd;
