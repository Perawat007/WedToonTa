import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../axios";
import "./Register.scss";
import "./Register.css";
import "./dialogcss.css";
import circle2 from "../../img/circle2.png";
import imgDiralog from "../../img/imgDiralog.png";
import cartoon from "../../img/7.png";
import monterCartoon from "../../img/5.png";
import rabbitCartoon from "../../img/6.png";
import regitercartoon from "../../img/regitercartoon.png";
import regitercartoonV2 from "../../img/RegiterV2.png";
import { Link } from "react-router-dom";
import Headers from "../../view/headers";
import Select from "react-select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { BsUnlockFill, BsPhoneFill } from "react-icons/bs";

const RegiterBar = () => {
  const [password, setPwd] = useState("");
  const [Confrimpassword, setPwdConfrim] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [bank, setsetBank] = useState("");
  const [nameBank, setNameBank] = useState("");
  const [numberBank, setNumberBank] = useState();
  const [showPopupB, setShowPopupB] = useState(false);
  // Dialog
  const [showRegiterA, setRegiterA] = useState(false);
  const [showRegiterOTP, setRegiterOTP] = useState(false);
  const [showRegiterB, setRegiterB] = useState(false);
  const [showRegiterC, setRegiterC] = useState(false);
  const [tokenpin, settokenpin] = useState("");
  const [otpPin, setotppin] = useState("");

  const [show, setShow] = useState(false);
  const [showPhoneCheck, setShowPhoneCheck] = useState(false);
  const [showUsernameCheck, setShowusernameCheck] = useState(false);
  const [showUsernameCheckvalue, setShowusernameCheckvalue] = useState(false);
  const [showpasswordCheck, setShowpasswordCheck] = useState(false);
  const [showpasswordNot, setShowpasswordNot] = useState(false);
  const [showBank, setShowBank] = useState(false);

  //Img
  const [showImg, setShowImg] = useState(regitercartoon);
  const [showprogressBar, setShowprogressBar] = useState(25);
  const [styleBar, setStyle] = useState({});
  const [title, setTitel] = useState("กรุณากรอกเบอร์โทรศัพท์");

  const handleClose = () => {
    setShow(false);
    setShowPhoneCheck(false);
    setShowusernameCheck(false);
    setShowpasswordCheck(false);
    setShowusernameCheckvalue(false);
    setShowpasswordNot(false);
    setShowBank(false);
  };

  const usedforOptions = [
    {
      value: "ธนาคารไทยพาณิชย์",
      label: "ธนาคารไทยพาณิชย์",
      imgPath:
        "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-scb.png",
    },
    {
      value: "ธนาคารกสิกรไทย",
      label: "ธนาคารกสิกรไทย จำกัด",
      imgPath:
        "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-kbank.png",
    },
    {
      value: "ธนาคารกรุงเทพ",
      label: "ธนาคารกรุงเทพ",
      imgPath:
        "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-bbl.png",
    },
    {
      value: "ธนาคารกรุงไทย",
      label: "ธนาคารกรุงไทย",
      imgPath:
        "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-ktb.png",
    },
    {
      value: "ธนาคารกรุงศรีอยุธยา",
      label: "ธนาคารกรุงศรีอยุธยา",
      imgPath:
        "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-bay.png",
    },
    {
      value: "ธนาคารเกียรตินาคินภัทร",
      label: "ธนาคารเกียรตินาคินภัทร",
      imgPath:
        "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-kk.png",
    },
    {
      value: "ธนาคารซีไอเอ็มบี ไทย",
      label: "ธนาคารซีไอเอ็มบี ไทย",
      imgPath:
        "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-cimb.png",
    },
    {
      value: "ธนาคารทหารไทยธนชาต",
      label: "ธนาคารทหารไทยธนชาต",
      imgPath:
        "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-ttb.png",
    },
    {
      value: "ธนาคารยูโอบี",
      label: "ธนาคารยูโอบี",
      imgPath:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.uob.co.th%2Fpersonal%2Findex.page&psig=AOvVaw2KddkKwBRjVK_cWM1YgvvI&ust=1690280164670000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDwyriOp4ADFQAAAAAdAAAAABAE",
    },
    {
      value: "ธนาคารออมสิน",
      label: "ธนาคารออมสิน",
      imgPath:
        "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-gsb.png",
    },
    {
      value: "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร",
      label: "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร",
      imgPath:
        "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-baac.png",
    },
    {
      value: "ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย)",
      label: "ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย)",
      imgPath:
        "https://asset.cloudigame.co/build/admin/img/wt_theme/ezc/payment-logo-sc.png",
    },
  ];

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  useEffect(() => {
    setRegiterA(true);
    const newStyle = {
      opacity: 3,
      width: `25%`,
    };
    setStyle(newStyle);
  }, []);

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  const handleConfrimSubmit = () => {
    setShowPopupB(true);
  };
  const handleSubmitRegiter = () => {
    if (bank !== "" && bank !== undefined) {
      console.log('bank')
      if (nameBank !== "" && nameBank !== undefined) {
        console.log('name')
        console.log(numberBank)
        if (numberBank.length > 9 && numberBank.length < 14) {
          axios.post('post/signupMember', {
            agent_id: 2,
            member_code: 2,
            username: phoneNumber,
            password: password,
            bank: bank,
            credit: 0,
            accountName: nameBank,
            accountNumber: numberBank,
            contact_number: phoneNumber,
          })
            .then((response) => {
              if (response) {
                return response.data;
              } else {
                throw new Error("Error: " + response.statusText);
              }
            })
            .then((data) => {
              console.log(data);
              if (data.message === "Data created Success") {
                window.location.href = "/Login";
              } else {
                setShowBank(true);
              }
            }).catch((err) => {
              setShowBank(true);
            });
        } else {
          setShowBank(true)
        }
      } else {
        setShowBank(true)
      }
    } else {
      setShowBank(true)
    }
    setShowPopupB(false);
  };

  const handleChange = (selectedOption) => {
    setsetBank(selectedOption.value);
  };

  const handleSubmitA = async (e) => {
    e.preventDefault();
    if (phoneNumber !== "" && phoneNumber !== undefined) {
      if (/^\d{0,10}$/.test(phoneNumber) && phoneNumber.length === 10) {
        const requestBody = {
          phoneNumber: phoneNumber,
        };
        axios.post("https://relaxtimecafe.fun/otpRequest", requestBody, {
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response) {
              return response.data;
            } else {
              throw new Error("Error: " + response.statusText);
            }
          })
          .then((dataOTP) => {
            console.log(dataOTP);
            if (dataOTP.message === "This phonenumber is not available.") {
              setShowPhoneCheck(true);
            } else {
              settokenpin(dataOTP.dataRes.data.token);
              setRegiterOTP(true);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        setShow(true);
      }
    } else {
      setShow(true);
    }
  };

  const handleSubmitOTP = async (e) => {
    e.preventDefault();
    fetch("https://relaxtimecafe.fun/otpVerify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pin: otpPin,
        token: tokenpin,
      }),
    })
      .then((response) => {
        if (response) {
          return response.json();
        } else {
          throw new Error("Error: " + response.statusText);
        }
      })
      .then((data) => {
        if (
          data.dataRes.data.status === "success" &&
          data.dataRes.data.message === "Code is correct."
        ) {
          setShowImg(regitercartoonV2);
          setShowprogressBar(50);
          const newStyle = {
            opacity: 3,
            width: `50%`,
          };
          setStyle(newStyle);
          setTitel("กรุณากำหนด Password");
          setRegiterOTP(false);
          setRegiterA(false);
          setRegiterB(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCancelOTP = async (e) => {
    setRegiterOTP(false);
  };

  const handleSubmitB = async (e) => {
    e.preventDefault();
    if (password.length > 5 && password.length <= 16) {
      if (password === Confrimpassword) {
        setRegiterB(false);
        setRegiterC(true);
        setShowprogressBar(75);
        const newStyle = {
          opacity: 3,
          width: `75%`,
        };
        setStyle(newStyle);
        setTitel("ข้อมูลบัญชีธนาคาร");
      } else {
        setShowpasswordCheck(true);
      }
    } else {
      setShowpasswordNot(true);
    }
  };

  const togglePopup = () => {
    setShowPopupB(!showPopupB);
  };
  return (
    <>
      {showPopupB && (
        <div className="overlayRegiter">
          <div className="imgRegiter">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerRegiter">
            <div className="modalRightRegiter">
              <div className="contentRegiter">
                <p className="titleDialog font">ยืนยันการสมัคร</p>
                <br />
                <h3 className="detailDialog font">
                  คุณต้องการสมัครสมาชิกตามนี้ใช่หรือไม่
                </h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={() => handleSubmitRegiter()} >
                  ตกลง
                </button>
                <button className="btnPrimaryRegiter" onClick={togglePopup}>
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {show && (
        <div className="overlayRegiter">
          <div className="imgRegiter">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerRegiter">
            <div className="modalRightRegiter">
              <div className="contentRegiter">
                <p className="titleDialog font">เบอร์โทรไม่ถูกต้อง</p>
                <br />
                <h3 className="detailDialog font">
                  กรุณากรอกเบอร์โทรให้ถูกต้อง โดยเบอร์โทรศัพท์หลักแรก
                  ต้องเป็นเลข 0 และต่อจากนั้น จะเป็นเลข 9 ตัว เช่น 0XXXXXXXXX
                </h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={handleClose}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPhoneCheck && (
        <div className="overlayRegiter">
          <div className="imgRegiter">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerRegiter">
            <div className="modalRightRegiter">
              <div className="contentRegiter">
                <p className="titleDialog font">เบอร์โทรศัพท์มีผู้ใช้งานแล้ว</p>
                <br />
                <h3 className="detailDialog font">
                  กรุณากรอกเบอร์โทรใหม่ เบอร์โทรมีผู้ใช้งานแล้ว
                </h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={handleClose}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showBank && (
        <div className="overlayRegiter">
          <div className="imgRegiter">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerRegiter">
            <div className="modalRightRegiter">
              <div className="contentRegiter">
                <p className="titleDialog font">แจ้งเตือนการกรอกบัญชี</p>
                <br />
                <h3 className="detailDialog font">
                  คุณกรอก เลขบัญชี หรือ ชื่อบัญไม่ถูกต้อง กรุณากรอกใหม่
                </h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={handleClose}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showUsernameCheck && (
        <div className="overlayRegiter">
          <div className="imgRegiter">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerRegiter">
            <div className="modalRightRegiter">
              <div className="contentRegiter">
                <p className="titleDialog font">Username ไม่ถูกต้อง</p>
                <br />
                <h3 className="detailDialog font">
                  กรุณากรอก Username ใหม่ โดย Username ต้องเป็น
                  ภาษาอังกฤษพิมพ์เล็ก
                </h3>
                <h3 className="detailDialog font">
                  เท่านั้น และมีจำนวน ไม่น้อยกว่า 8 ตัวอักษร และไม่มากกว่า 16
                </h3>
                <h3 className="detailDialog font">
                  ตัวอักษร เช่น toontawebgame
                </h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={handleClose}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showUsernameCheckvalue && (
        <div className="overlayRegiter">
          <div className="imgRegiter">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerRegiter">
            <div className="modalRightRegiter">
              <div className="contentRegiter">
                <p className="titleDialog font">Username นี้มีผู้ใช้งานแล้ว</p>
                <br />
                <h3 className="detailDialog font">
                  กรุณากรอก Username ใหม่ Username นี้มีผู้ใช้งานแล้ว
                </h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={handleClose}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showpasswordCheck && (
        <div className="overlayRegiter">
          <div className="imgRegiter">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerRegiter">
            <div className="modalRightRegiter">
              <div className="contentRegiter">
                <p className="titleDialog font">Password ไม่ถูกต้อง</p>
                <br />
                <h3 className="detailDialog font">
                  กรุณากรอก Password ให้เหมือนกันทั้ง 2 ช่อง
                </h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={handleClose}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showpasswordNot && (
        <div className="overlayRegiter">
          <div className="imgRegiter">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerRegiter">
            <div className="modalRightRegiter">
              <div className="contentRegiter">
                <p className="titleDialog font">Password ไม่ถูกต้อง</p>
                <br />
                <h3 className="detailDialog font">
                  กรุณาตั้ง Password 6 ตัวอักษรขึ้นไป
                </h3>
              </div>
              <div className="btnContainerRegiter">
                <button className="btnPrimaryRegiter" onClick={handleClose}>
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showRegiterOTP && (
        <div className="overlayRegiter">
          <div className="imgRegiter">
            <img src={cartoon} alt="/" />
          </div>
          <div className="modalContainerRegiter">
            <div className="modalRightRegiter">
              <div className="contentRegiter">
                <p className="titleDialog font">ยืนยัน OTP</p>
              </div>
              <div className="form-inner">
                <div className="DialogImg">
                  <img className="scaltimgDialogImg" src={imgDiralog} alt="" />
                </div>
                <form action="#" className="login">
                  <div className="field">
                    <BsPhoneFill className="iconV" />
                    <input
                      type="text"
                      placeholder="กรุณากรอก OTP"
                      value={otpPin}
                      onChange={(e) => setotppin(e.target.value)}
                      required
                    />
                  </div>
                  <div className="signup-link" style={{color:'#FFFFFF'}}>
                    <h6>กรุณาใส่ OTP ของ Ref:.....</h6>
                  </div>
                  <br />
                  <div className="field btn">
                    <div className="btn-layer"> </div>
                    <input
                      type="submit"
                      value="ยืนยัน"
                      onClick={handleSubmitOTP}
                    />
                  </div>
                  <div className="field btn">
                    <div className="btn-layer"> </div>
                    <input
                      type="submit"
                      value="ยกเลิก"
                      onClick={handleCancelOTP}
                    />
                  </div>
                </form>
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
          <div className="imgrabbit">
            <img
              className="scaltimgrabbit"
              src={rabbitCartoon}
              id="wel-img-id"
              alt=""
            />
          </div>

          <div className="imgWaycircleRegiter">
            <img className="scaltimgcirclesmRegiter" src={circle2} alt="" />
          </div>
          <div className="wrapperRegiter">
            <div className="title-textRegiter font">{title}</div>

            <div className="progressBar">
              <div className="progressBar-done" style={styleBar}>
                {showprogressBar}%
              </div>
            </div>

            <div className="imgWaycircle">
              <img className="scaltimgcirclesm" src={showImg} alt="" />
            </div>
            <div>
              <div className="form-inner">
                {(() => {
                  if (showRegiterA === true) {
                    return (
                      <>
                        <form className="login" onSubmit={handleSubmitA}>
                          <div className="field">
                            <BsPhoneFill className="iconV" />
                            <input
                              type="text"
                              placeholder="กรุณากรอกเบอร์โทรศัพท์"
                              value={phoneNumber}
                              onChange={(e) => setphoneNumber(e.target.value)}
                              required
                            />
                          </div>
                          <div className="field btn">
                            <div className="btn-layer"> </div>
                            <input
                              type="submit"
                              value="ยืนยัน"
                              onClick={handleSubmitA}
                            />
                          </div>
                          <div className="signup-link">
                            พบปัญหา <a>ติดต่อฝ่ายบริการลูกค้า</a>
                          </div>
                        </form>
                      </>
                    );
                  }
                  if (showRegiterB === true) {
                    return (
                      <>
                        <form className="login">
                          <div className="field">
                            <BsUnlockFill className="iconV" />
                            <input
                              type="password"
                              placeholder="กรุณากรอก Password"
                              value={password}
                              onChange={(e) => setPwd(e.target.value)}
                              className="fill"
                            />
                          </div>
                          <div className="field">
                            <BsUnlockFill className="iconV" />
                            <input
                              type="password"
                              placeholder="กรุณายื่นยัน Password"
                              value={Confrimpassword}
                              onChange={(e) => setPwdConfrim(e.target.value)}
                              className="fill"
                            />
                          </div>
                          <div className="buttomDown">
                            <div className="field btn">
                              <div className="btn-layer"> </div>
                              <input
                                type="submit"
                                value="ถัดไป"
                                onClick={handleSubmitB}
                              />
                            </div>
                          </div>
                          <div className="signup-link">
                            พบปัญหา <a>ติดต่อฝ่ายบริการลูกค้า</a>
                          </div>
                        </form>
                      </>
                    );
                  }
                  else if (showRegiterC === true) {
                    return (
                      <>
                        <form className="login" onSubmit={handleConfrimSubmit}>
                          <div style={{ zIndex: 5 }}>
                            <Select
                              options={usedforOptions}
                              onChange={handleChange}
                              isSearchable={false} // Enable search functionality
                            />
                          </div>

                          <div className="field">
                            <BsPhoneFill className="iconV" />
                            <input
                              type="text"
                              placeholder="กรุณากรอก ชื่อบัญชี"
                              value={nameBank}
                              onChange={(e) => setNameBank(e.target.value)}
                              className="fill"
                            />
                          </div>
                          <div className="field">
                            <BsUnlockFill className="iconV" />
                            <input
                              type="number"
                              placeholder="กรุณากรอก เลขที่บัญชี"
                              value={numberBank}
                              onChange={(e) => setNumberBank(e.target.value)}
                              className="fill"
                            />
                          </div>
                          <div className="buttomDown">
                            <div className="field btn">
                              <div className="btn-layer"> </div>
                              <input
                                type="submitri"
                                value="ถัดไป"
                                onClick={handleConfrimSubmit}
                              />
                            </div>
                          </div>
                          <div className="signup-link">
                            พบปัญหา <a>ติดต่อฝ่ายบริการลูกค้า</a>
                          </div>
                        </form>
                      </>
                    );
                  }
                })()}
              </div>
            </div>
          </div>
          <div className="imgWaymonter">
            <img
              className="scaltimgmonter"
              src={monterCartoon}
              id="wel-img-id"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default RegiterBar;
