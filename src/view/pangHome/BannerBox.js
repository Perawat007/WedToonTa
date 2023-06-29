import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderH from './Slider/Slider';
import imgsport from '../../img/tab_iconSport.png'
import imglive from '../../img/tab_iconCasino.png'
import imgslot from '../../img/tab_icon_Game.png'
import imgcard from '../../img/tab_iconCard.png'
import imgfish from '../../img/tab_iconTrading.png'

function BannerBox() {
  useEffect(() => {
    //DataGet();
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  //<SliderH />
  return (
    <>
      <div className="section-banner">
        <div className="banner box slick-initialized slick-slider slick-dotted">
          <div className="slick-list draggable">
            <div id="slide_main" className="slick-track">
              <SliderH />
            </div>
          </div>
        </div>
        <div className="top-player box d-dev sp-box">

        </div>
      </div>

      <div className="product-category mgt30 d-dev">
        <a data-type="sport" href="/sport" className="list"
          style={{
            backgroundImage: `url(${imgsport})`,

          }}>
        </a>
        <a data-type="live" href="/live" className="list"
          style={{
            backgroundImage: `url(${imglive})`,

          }}>
        </a>
        <a data-type="slot" href="/slot" className="list"
          style={{
            backgroundImage: `url(${imgslot})`,

          }}>
        </a>
        <a data-type="card" href="/card" className="list"
          style={{
            backgroundImage: `url(${imgcard})`,

          }}>
        </a>
        <a data-type="fish" href="/fish" className="list"
          style={{
            backgroundImage: `url(${imgfish})`,

          }}>
        </a>
      </div>
      <div className="m-dev">
        <div className="product-sub-category mgt30">
          <div className="list">
            <a className="sub-promo" href="/promotions">
              <div className="sub-img"><img src="asset_web/img/promo.png" alt="promotions" /></div>
              <div className="sub-title">
                <h5>โปรโมชั่น</h5>
                <span>พบกับโปรโมชั่นมากมายที่ห้ามพลาด!</span>
              </div>
            </a>
          </div>
          <div className="list">
            <a className="sub-vip" href="/vip">
              <div className="sub-img"><img src="asset_web/img/vip.png" alt="vip" /></div>
              <div className="sub-title">
                <h5>วีไอพี</h5>
                <span>มาเป็น VIP เพื่อเพลิดเพลินกับสิทธิพิเศษระดับพรีเมียมของเรา</span>
              </div>
            </a>
          </div>
          <div className="list">
            <a className="sub-aff" href="https://aff.siam855th.co">
              <div className="sub-img"><img src="asset_web/img/aff.png" alt="aff" /></div>
              <div className="sub-title">
                <h5>พันธมิตร</h5>
                <span>เข้าร่วมตอนนี้เพื่อรับคอมมิชชั่นพิเศษ</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}


export default BannerBox;