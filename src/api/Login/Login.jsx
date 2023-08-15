import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../axios";
import "./Login.scss";
import "./Login.css";
import "./dialogcssLogin.css";
import logo from "../../img/toonta.png";
import rightLogin from "../../img/login.png";
import picpic from "../../img/picpic.png";
import cartoon from "../../img/4.png";
import cartoon7 from "../../img/7.png";
import circle from "../../img/circle1.png";
import { Link } from "react-router-dom";
import Headers from "../../view/headers";

import { BsUnlockFill, BsCreditCardFill, BsPhoneFill } from "react-icons/bs";
import {
  Box,
  Button,
  styled,
  alpha,
  InputBase,
  FormControl,
  TextField,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";
import Footer from "../../view/pangHome/FooTer/Footer";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  width: 30,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const LoginBar = () => {
  const [phoneNumber, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [ipAddress, setIp] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPopupA, setShowPopup] = useState(false);

  let browserName = "Unknown";
  useEffect(() => {
    // handleSubmit();
  }, [phoneNumber, password]);

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post("login/member", {
        phoneNumber: phoneNumber,
        password: password,
      });
      console.log('onn');
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

  const togglePopup = () => {
    setShowPopup(!showPopupA);
  };

  const cilckRegiter = () => {
    window.location.href = `/Register`;
  }

  return (
    <>
      {showPopupA && (
        <div className="overlayLogin">
          <div className="imgLogin">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerLogin">
            <div className="modalRightLogin">
              <div className="contentLogin">
                <p className="titleDialog font">Username หรือ Password ไม่ถูกต้อง</p>
                <br />
                <h3 className="detailDialog font">
                  กรุณากรอกUsername หรือ Password ใหม่อีกครั้ง
                </h3>
              </div>
              <div className="btnContainerLogin">
                <button className="btnPrimaryLogin" onClick={togglePopup}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="main-login">
        <nav id="topBar-holder" className="topBar-holder">
          <Headers />
        </nav>
        <br />
        <div className="login-contain">

          <div className="wrapperLogin">
            <div className="slide-controls">
              <input type="radio" name="slide" id="login" />
              <input type="radio" name="slide" id="signup" />
              <label className="slide login">เข้าสู่ระบบ</label>
              <label className="slide signup" onClick={cilckRegiter}>สมัครสมาชิก</label>
              <div className="slider-tab"></div>
            </div>
            <div className="title-text"></div>
            <div className="form-container">
              <div className="form-inner">
                <form className="login" onSubmit={handleSubmit}>
                  <div className="fieldLogin font">
                    <BsPhoneFill className="iconV" />
                    <input
                      type="text"
                      placeholder="กรอกเบอร์โทรศัพท์"
                      value={phoneNumber}
                      onChange={(e) => setUser(e.target.value)}
                      required
                    />
                  </div>
                  <div className="fieldLogin font">
                    <BsUnlockFill className="iconV" />
                    <input
                      type="password"
                      placeholder="กรอกรหัสผ่าน"
                      value={password}
                      onChange={(e) => setPwd(e.target.value)}
                      required
                    />
                  </div>
                  <div className="pass-link font">
                    <a className="font" href="#">Forgot password?</a>
                  </div>
                  <div className="field btn">
                    
                    <input className="font" type="submit" value="เข้าสู่ระบบ" onClick={handleSubmit} />
                  </div>
                  <div className="signup-link font">
                    พบปัญหา <a className="font" href="">ติดต่อฝ่ายบริการลูกค้า</a>
                  </div>
                </form>
                <form action="#" className="signup">
                  <div className="field">
                    <input type="text" placeholder="Email Address" required />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Password" required />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="imgWaycartoonLogin">
            <img className="scaltimgcartoonLogin" src={cartoon} alt="" />
            <img className="scaltimgcartoon7Login" src={cartoon7} alt="" />
            <img className="scaltimgcircleLogin" src={circle} alt="" />
          </div>
          <div className="imgWaycircleLogin">
            <img className="scaltimgcirclesmLogin" src={circle} alt="" />
          </div>
          <div className="imgWayLogin">
            <img className="scaltimgLogin" src={picpic} id="wel-img-id" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginBar;
