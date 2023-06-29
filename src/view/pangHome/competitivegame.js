import React, { useState, useEffect } from 'react';
import '../pangHome/test.css';
import axios from '../../api/axios';
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";

function Competitivegame() {
    const [data, setData] = useState([])
    useEffect(() => {

    }, [])

    const PlayGame = () => {
        console.log('playGame');
    }


    const specialgame = [
        {
            id: 1, name: 'Sexy', provider_name: 'BGSOFT', data_gameid: '17570', data_name: 'Crypto', alt: 'SIAM855 Baccarat Classic',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_1(1).png'
        },
        {
            id: 2, name: 'Sexy', provider_name: 'BGSOFT', data_gameid: '17572', data_name: 'Double', alt: 'SIAM855 Baccarat Classic',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_2(1).png'
        },
        {
            id: 3, name: 'Sexy', provider_name: 'BGSOFT', data_gameid: '17574', data_name: 'Keno', alt: 'SIAM855 Baccarat Classic',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_3(1).png'
        },
        {
            id: 4, name: 'Sexy', provider_name: 'SPB-INST', data_gameid: '17575', data_name: 'Limbo', alt: 'SIAM855 Baccarat Classic',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_4(1).png'
        },
    ]
    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesPerRow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                },
            },

            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "350px",
                },
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "660px",
                },
            },

            {
                breakpoint: 428,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "660px",
                },
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    centerPadding: "660px",
                },
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerMode: true,
                    speed: 500,
                    centerPadding: "450px",
                },
            },
        ],
    };

    return (
        <>
            <div className="product-upcoming mgt45">
                <div className="vp-title testdataV addfont">การแข่งขันที่จะเกิดขึ้น</div>
                <div className="casino-container fam-list" style={{ display: 'block' }}>
                    <div className="slick-list draggable">
                        <div className="slick-track">
                            <Slider {...settings}>
                                <div className="lc-holder slick-slide slick-cloned"
                                    data-slick-index="-1" aria-hidden="true" style={{ width: '548px' }} tabIndex="-1">
                                    <div >
                                        <img className="img-responsive board"
                                            src="https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_1(1).png" alt='' />
                                    </div>
                                </div>
                                <div className="lc-holder slick-slide" onClick={() => PlayGame()}
                                    data-slick-index="0" aria-hidden="true" style={{ width: '548px' }}
                                    role="tabpanel" id="slick-slide90" aria-describedby="slick-slide-control90">
                                    <div>
                                        <img className="img-responsive board"
                                            src="https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_2(1).png" alt='' />
                                    </div>
                                </div>
                                <div className="lc-holder slick-slide slick-current slick-active"
                                    onClick={() => PlayGame()} data-slick-index="1" aria-hidden="false"
                                    style={{ width: '548px' }} tabIndex="-1" role="tabpanel" id="slick-slide91"
                                    aria-describedby="slick-slide-control91">
                                    <div>
                                        <img className="img-responsive"
                                            src="https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_3(1).png" alt='' />
                                    </div>
                                </div>
                                <div className="lc-holder slick-slide" onClick={() => PlayGame()}
                                    data-slick-index="2" aria-hidden="true" style={{ width: '548px' }} tabIndex="-1"
                                    role="tabpanel" id="slick-slide92" aria-describedby="slick-slide-control92">
                                    <div>
                                        <img className="img-responsive board"
                                            src="https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_4(1).png" alt='' />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <ul className="slick-dots" role="tablist">
                            <li className="" role="presentation"><button type="button" role="tab"
                                id="slick-slide-control90" aria-controls="slick-slide90" aria-label="1 of 4"
                                tabIndex="0" aria-selected="true">1</button></li>
                            <li role="presentation" className="slick-active"><button type="button" role="tab"
                                id="slick-slide-control91" aria-controls="slick-slide91" aria-label="2 of 4"
                                tabIndex="-1">2</button></li>
                            <li role="presentation" className=""><button type="button" role="tab"
                                id="slick-slide-control92" aria-controls="slick-slide92" aria-label="3 of 4"
                                tabIndex="-1">3</button></li>
                            <li role="presentation" className=""><button type="button" role="tab"
                                id="slick-slide-control93" aria-controls="slick-slide93" aria-label="4 of 4"
                                tabIndex="-1">4</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Competitivegame;