import React, { useRef, useState, useEffect, useContext } from "react";
import Axios from "axios";
import axios from "./axios";
const LoginBar = () => {
  const [username, setUser] = useState("member001");
  const [password, setPwd] = useState("123456789");
  const [ipAddress, setIp] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPopupA, setShowPopup] = useState(false);

  let browserName = "Unknown";
  useEffect(() => {
    handleSubmit()
  }, [username, password]);

 
  const handleSubmit = async (e) => {
    try {
      const response = await axios.post("login/member", {
        username: username,
        password: password,
        ip_address: ipAddress,
        browserName: browserName,
      });

      if (response.data.token !== "undefined") {
        const accessToken = response.data.token;
        await localStorage.setItem("token", accessToken);
        setUser("");
        setPwd("");
        window.location.href = "/Home";
      } else {
        console.log(response?.status.JSON);
      }
    } catch (err) {
      setShowPopup(!showPopupA);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <div>
      
    </div>
  );
};
export default LoginBar;
