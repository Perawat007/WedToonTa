import React, { useState, useEffect } from 'react';
import '../pangHome/test.css';
import axios from '../../api/axios';
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import vipimg from '../../img/home/vipimg.png'
import promo from '../../img/home/promo.png'
function SitiGame() {
    const [data, setData] = useState([])
    useEffect(() => {

    }, [])

    const PlayGame = () => {
        console.log('playGame');
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    className: "center",
                    infinite: true,
                    slidesToShow: 2,
                    slidesPerRow: 2,
                    centerMode: true,
                    centerPadding: "350px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    className: "center",
                    infinite: true,
                    slidesToShow: 2,
                    slidesPerRow: 2,
                    centerMode: true,
                    centerPadding: "350px",
                },
            },

            {
                breakpoint: 375,
                settings: {
                    dots: true,
                    className: "center",
                    infinite: true,
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 200,
                    centerPadding: "550px",
                },
            },
            {
                breakpoint: 414,
                settings: {
                    dots: true,
                    className: "center",
                    infinite: true,
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 200,
                    centerPadding: "560px",
                },
            },

            {
                breakpoint: 390,
                settings: {
                    className: "center",
                    infinite: true,
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    centerPadding: "660px",
                },
            },

            {
                breakpoint: 428,
                settings: {
                    dots: true,
                    className: "center",
                    infinite: true,
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 200,
                    centerPadding: "560px",
                },
            },
            {
                breakpoint: 720,
                settings: {
                    dots: true,
                    className: "center",
                    infinite: true,
                    slidesToShow: 2,
                    slidesPerRow: 2,
                    centerMode: true,
                    speed: 200,
                    centerPadding: "550px",
                },
            },

            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 4,
                    slidesPerRow: 4,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "480px",
                },
            },
        ],
    };

    return (
        <>
            <div className="features-game posRel mgt45">
                <div className="game vGameList">
                    <div className="list">
                        <Slider {...settings}>
                        <div className="lc-holder slick-slide"
                                data-slick-index="0" aria-hidden="true" style={{ width: '548px' }}
                                role="tabpanel" id="slick-slide90" aria-describedby="slick-slide-control90">
                                <div>
                                    <img className="img-responsive board "
                                        src={vipimg} alt='' />
                                </div>
                            </div>

                            <div className="lc-holder slick-slide"
                                data-slick-index="0" aria-hidden="true" style={{ width: '548px' }}
                                role="tabpanel" id="slick-slide90" aria-describedby="slick-slide-control90">
                                <div>
                                    <img className="img-responsive board "
                                        src={promo} alt='' />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}


export default SitiGame;