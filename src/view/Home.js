import React from 'react';
import Headers from './headers';
import MenuHome from './pangHome/MenuHome';
import BannerBox from './pangHome/BannerBox';
import GameShow from './pangHome/GameShow';
import WinGame from './pangHome/WinGame';
import Competitivegame from './pangHome/competitivegame';
import Gamepromotion from './pangHome/gamepromotion';
import Allgamecamps from './pangHome/Allgamecamps';
import Mycard from './pangHome/Mycard';
import MenuDown from './pangHome/MenuDown';
import { useTheme } from '@mui/material/styles';
import PaymentMethod from './pangHome/PaymentMethod';
import Box from '@mui/material/Box';
import TopDown from './pangHome/TopDown';
import './Login.css'
import './cartoon.css'
import Footer from './pangHome/FooTer/Footer';
import Arkssdider from './pangHome/Slider/Slider'
import GamePlay from './SeeGame/GamePlay';
import cartoon from "../img/2.png";
import cartoonII from "../img/3.png";
import cartoonIII from "../img/6.png";
import circleI from "../img/circle1.png";
import SitiGame from './pangHome/SitiGame';
import axios from '../api/axios';
import { Link } from 'react-router-dom';
function Home() {
  const theme = useTheme();
  const [showtoolBar, setshowtoolBar] = React.useState(true);
  const [showtoolBarlogincompreat, setshowtoolBarLogincompreat] = React.useState(false);
  const token = localStorage.getItem("token");
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    if (token) {
      setshowtoolBar(false)
      setshowtoolBarLogincompreat(true)
    } else {
      setshowtoolBar(true)
      setshowtoolBarLogincompreat(false)
    }
  }, []);

  const cilckRegiter = () => {
    window.location.href = `/regiteruser`;
  }

  const cilckLogin = () => {
    window.location.href = `/Login`;
  }

  const logout = () => {
    if (token) {
      if (data.length === 0) {
        axios.post("/post/token", '', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => {
            axios.put("/post/logoutMember", { memberID: response.data.data.id },)
              .then(response => {
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                window.location.href = "/";
              })
              .catch(error => console.log('error', error));
          })
          .catch(error => {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            window.location.href = "/";
            console.log('error', error)
          }
          );
      }
    }
  }


  return (
    <>
      <div className="main-content">
        <Mycard />
        <nav id="topBar-holder" className="topBar-holder">
          <Headers />
        </nav>
        <div className="buttonToTop"><i className="fa-regular fa-arrow-up-to-line"></i></div>
        <div className="pg-home common-holder">
          
          <div className="section-banner">
            <div className="banner box slick-initialized slick-slider slick-dotted">
              <div className="slick-list draggable">
                <div id="slide_main" className="slick-track">
                  <Arkssdider />
                </div>
              </div>
            </div>
            <div className="top-player box d-dev sp-box">
            </div>
          </div>
          <div className="imgWaymonterHome">
            <img className="scaltimgmonterHome" src={cartoon} id="wel-img-id" alt="" />
          </div>

          <div className="imgcircleI">
            <img className="scaltimgcircleI" src={circleI} id="wel-img-id" alt="" />
            <img className="scaltimgcircleII" src={circleI} id="wel-img-id" alt="" />
          </div>

          <div className="content-holder">
            <BannerBox />
            {showtoolBar && (
              <div className='control-btn'>
                <button className="custom-btn btn-13 font" onClick={cilckRegiter}>ลงทะเบียน</button>
                <button className="custom-btn btn-14 font" onClick={cilckLogin}>ลงชื่อเข้าใช้</button>
              </div>
            )}

            {showtoolBarlogincompreat && (
              <div className='control-btn'>
                <button className="custom-btn btn-13 font" onClick={logout}>ออกจากระบบ</button>
                <button className="custom-btn btn-14 font" onClick={cilckLogin}>ข้อมูลผู้เล่น</button>
              </div>
            )}
            <div className='control-promo'>
              <SitiGame />
            </div>
            <GameShow />
            <div className="imgWaymonterHomeII">
              <img className="scaltimgmonterHomeII" src={cartoonII} id="wel-img-id" alt="" />
            </div>

            <div className="imgcircleIII">
              <img className="scaltimgcircleIII" src={circleI} id="wel-img-id" alt="" />
            </div>

            <div className="imgcircleIIII">
              <img className="scaltimgcircleIIII" src={circleI} id="wel-img-id" alt="" />
            </div>

            <WinGame />
            <div className="mgt45" data-type="android">
              <img className="img-responsive download-bannerAbs a-davPC"
                src="https://websitehui.s3.ap-southeast-1.amazonaws.com/pic_test-01.png"
                alt="benner-img" />
              <img className="img-responsive download-bannerAbs a-davMB"
                src="https://websitehui.s3.ap-southeast-1.amazonaws.com/pic_test-02.png"
                alt="benner-img" />
            </div>
            <div className='marginT'></div>
            <Competitivegame />
            <div className="imgWaymonterHomeIII">
              <img className="scaltimgmonterHomeIII" src={cartoonIII} id="wel-img-id" alt="" />
            </div>
            <div className="imgcircleV">
              <img className="scaltimgcircleV" src={circleI} id="wel-img-id" alt="" />
            </div>

            <Gamepromotion />
          </div>
          <div className="imgWaymonterHomeIIIMobile">
            <img className="scaltimgmonterHomeIIIMobile" src={cartoonIII} id="wel-img-id" alt="" />
          </div>
        </div>
      </div>
      <div className="overlay-mobile"></div>
      <MenuDown />
      <div className="section-footer mid-footer d-dev">
        <div className="section-footer-inner">
          <Allgamecamps />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;