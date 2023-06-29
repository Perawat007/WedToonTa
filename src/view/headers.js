import React, { useState, useEffect } from 'react';
import './Login.css'
import './pangHome/Modal.css'
import nft from "../img/toonta.png";
import nftLogin from "./pangHome/nft.jpg";
import th from "../img/lang/th.svg";
import axios from '../api/axios';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Menu, MenuItem, Button, AppBar } from '@mui/material';

function Headers() {
    const [username, setUser] = useState("member001");
    const [password, setPwd] = useState("123456789");
    const [errMsg, setErrMsg] = useState("");
    const [showPopupA, setShowPopup] = useState(false);

    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    useEffect(() => {

    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(username);
            const response = await axios.post("login/member", {
                username: username,
                password: password,
            });

            if (response.data.token !== "undefined") {
                const accessToken = response.data.token;
                await localStorage.setItem("token", accessToken);
                setUser("");
                setPwd("");
                window.location.href = "/";
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
            console.err(errMsg);
        }
    };
    const style = {
        color: 'red',
    };

    const togglePopup = () => {
        setShowPopup(!showPopupA);
    };

    const h3Style = {
        color: 'white',
        display: 'inline-block',
        marginRight: '10px',
    };

    const Style = {
        color: 'white',
        display: 'inline-block',
        marginRight: '10px',
    };

    return (
        <>
            <header>
                {showPopupA && (
                    <div className="overlay">
                        <div className="modalContainer">
                            <img src={nftLogin} alt="/" />
                            <div className="modalRight">
                                <div className="content">
                                    <p style={style}>Username หรือ Password ผิด</p>
                                    <br />
                                    <h3>กรุณากรอก</h3>
                                    <h3>username และ Passwordใหม่</h3>
                                    <h3>หรือถ้าคุณยังไม่เป็นสมาชิก กรุณาลงทะเบียน</h3>
                                </div>
                                <div className="btnContainer">
                                    <button className="btnPrimary" onClick={togglePopup}>
                                        ตกลง
                                    </button>

                                    <button className="btnPrimary" onClick={togglePopup}>
                                        ลงทะเบียน
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <nav>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static" sx={{
                            backgroundColor: '#340070', width: '1920px',
                            '@media (max-width: 414px)': {
                                width: '100%',
                            },
                            '@media (max-width: 390px)': {
                                width: '91%',
                            },
                            '@media (max-width: 428px)': {
                                width: '110%',
                            },
                            '@media (max-width: 412px)': {
                                width: '113%',
                            },
                            '@media (width: 390px)': {
                                width: '100%',
                            },
                        }}>
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    <div id="topBar-holder" className="topBar-container">
                                        <div className="topBar-left">
                                            <div id="btnSideBar" className="m-dev positionSideBar">
                                                <i className="fa-solid fa-bars"></i>
                                            </div>
                                            <div className="btnLogo">
                                                <img className="logo" src={nft} alt="logo" />
                                            </div>
                                        </div>
                                        <div className="topBar-right">
                                            <form className="top-login-form d-dev" noValidate="novalidate">
                                                <div className="topbar-buttons">
                                                    <div className="menuItem">
                                                        <div className="form-group form-special">
                                                            <div className="input-holder">
                                                                <input name="username" type="text" className="username"
                                                                    onChange={(e) => setUser(e.target.value)}
                                                                    required
                                                                    placeholder="ยูสเซอร์เนม" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-special">
                                                            <div className="input-holder">
                                                                <input
                                                                    name="password"
                                                                    type="password"
                                                                    className="password topBarPassword"
                                                                    placeholder="รหัสผ่าน"
                                                                    onChange={(e) => setPwd(e.target.value)}
                                                                    required />

                                                                <span className="input-icon"><i className="fa fa-eye-slash vPassView"></i></span>
                                                            </div>
                                                            <div className="jErr"></div>
                                                        </div>
                                                        <div className="topbarButtons-holder">
                                                            <div className="mbtnLoginTop button button-login" onClick={handleSubmit}>ลงชื่อเข้าใช้</div>
                                                            <a id="btnRegister" className="button button-signup" href="/register">ลงทะเบียน</a>
                                                        </div>
                                                        <div className="btn btnLanguage dd-language">
                                                            <div className="limg">
                                                                <img src={th} alt="th" />
                                                            </div>
                                                            <span className="mgl5">TH</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="m-dev">
                                                <div className="topbarButtons-holder">
                                                    <div id="mbtnLoginTop" className="mbtnLoginTop button button-login">ลงชื่อเข้าใช้</div>
                                                    <a id="mbtnRegister" className="button button-signup" href="/register">
                                                        ลงทะเบียน </a>
                                                    <div className="btn btnLanguage dd-language">
                                                        <div className="limg">
                                                            <img src={th} alt="th" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </nav>
            </header>
        </>
    );
}


export default Headers;