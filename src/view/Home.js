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
import Footer from './pangHome/FooTer/Footer';
function Home() {

  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const theme = useTheme();
  return (
    <>
      <div className="main-content">
        <Mycard />
        <nav id="topBar-holder" className="topBar-holder">
          <div className="topBar-holder">
            <Headers />
            <MenuHome />
          </div>
        </nav>

        <div className="buttonToTop"><i className="fa-regular fa-arrow-up-to-line"></i></div>

        <div className="pg-home content-holder">
          <div className="content-holder">
            <Box className="TopDown" sx={{
              width: 1920,
              height: 2050,
              [theme.breakpoints.down('414')]: {
                height: 1850,
              },
              [theme.breakpoints.down('390')]: {
                height: 1850,
              },
              [theme.breakpoints.down('375')]: {
                height: 1820,
              },
              [theme.breakpoints.up('1280')]: {
                height: 3250,
              },
              [theme.breakpoints.only('480')]: {
                height: 1750,
              },
              [theme.breakpoints.only('540')]: {
                height: 1750,
              },
              [theme.breakpoints.only('720')]: {
                height: 1750,
              },
            }}>

            </Box>

            <BannerBox />
            <GameShow />
            <WinGame />
            <Competitivegame />
            <Gamepromotion />
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