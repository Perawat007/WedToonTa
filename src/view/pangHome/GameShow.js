import React, { useState, useEffect, useRef } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css"
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, FreeMode } from 'swiper';
import '../pangHome/test.css';
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./Card.css";

SwiperCore.use([Navigation, Pagination]);

function GameShow() {
    const [progressWidth, setProgressWidth] = useState(20);
    useEffect(() => {
        //DataGet();
    },)

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextIcon />,
        prevArrow: <PrevIcon />,
        afterChange: (index) => {
            setProgressWidth((100 / 5) * (index + 1));
        },
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
                    className: "center",
                    infinite: true,
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    centerMode: true,
                    centerPadding: "680px",
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
                    centerPadding: "660px",
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
                    centerPadding: "660px",
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

    const gameType = [
        {
            id: 1, name: 'DOGZILLA', provider_name: 'DOGZILLA', data_gameid: 'DOGZILLA', data_name: 'DOGZILLA',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/camp1.png'
        },
        {
            id: 2, name: 'PG', provider_name: 'PG', data_gameid: 'PGSOFT2', data_name: 'PG Soft',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/camp2.png'
        },
        {
            id: 3, name: 'Ambslot', provider_name: 'Ambslot', data_gameid: 'AMBSLOT2', data_name: 'AMBSLOT2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/camp3.png'
        },
        {
            id: 4, name: 'Habanero', provider_name: 'HABANERO', data_gameid: 'HABANERO', data_name: 'Ambslot',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/camp4.png'
        },
        {
            id: 5, name: 'Evoplay', provider_name: 'EVOPLAY', data_gameid: 'EVOPLAY', data_name: 'EVOPLAY',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/camp5.png'
        },
        {
            id: 6, name: 'CQ9', provider_name: 'CQ9V2', data_gameid: 'CQ9V2', data_name: 'CQ9V2',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/camp6.png'
        },
        {
            id: 7, name: 'Pragmatic Play Slot', provider_name: 'PRAGMATIC_SLOT', data_gameid: 'PRAGMATIC_SLOT', data_name: 'PRAGMATIC_SLOT',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/camp7.png'
        },
        {
            id: 8, name: 'Yggdrasil Gaming', provider_name: 'YGGDRASIL', data_gameid: 'YGGDRASIL', data_name: 'YGGDRASIL',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/camp8.png'
        },
    ]

    const SeeGame = (campGame) => {
        if (campGame === "DOGZILLA") {
            window.location.href = `/GameDogsila`;
        } else {
            window.location.href = `/${campGame}`;
        }
    }

    const cardRef = useRef(null);

    return (
        <>
            <div className="game-show features-game posRel mgt45">
                <div className="vp-title testdataV addfont d-dev">ค่ายเกมยอดฮิต</div>
                <div className="v-gameshow game mgt25">
                    <div className="list">
                        <Slider {...settings}>
                            {gameType.map((row) => (
                                <div key={row.id} className="box cardUp">
                                    <div className="">
                                        <div
                                            className="image lazy shadowImage"
                                            data-src={row.img}
                                            role="img"
                                            alt="SIAM855 Lightning Roulette"
                                            style={{
                                                backgroundImage: `url(${row.img})`
                                            }}
                                            onClick={() => SeeGame(row.data_gameid)}
                                        ></div>

                                    </div>

                                    <div className="provider-name">{row.provider_name}</div>
                                    <div className="box-play">
                                        <div
                                            className="button-play boxGoPlay"
                                            data-gameid={row.data_gameid}
                                            data-name={row.data_name}
                                            data-pid="2"
                                            onClick={() => SeeGame(row.data_gameid)}
                                        >
                                            ดูเกมในค่าย
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div >
        </>
    );
}

const PrevIcon = ({ onClick }) => {
    return (
        <div>
            <div className="testdata addfont">ค่ายเกมยอดฮิต</div>
            <br />
            <br />
            <div className="exclusive-prevTs">
                <div className="next-btn">
                    <div className="slick-icons slick-icons--left ">
                        <RiArrowLeftSLine className="slick-icons--left" onClick={onClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const NextIcon = ({ onClick }) => {
    return (
        <div className="exclusive-nextTs">
            <div className="slick-icons">
                <RiArrowRightSLine className="slick-icons--right" onClick={onClick} />
            </div>
        </div>
    );
};

export default GameShow;