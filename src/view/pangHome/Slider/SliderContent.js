import React from "react";
import banner_01 from '../../../img/banner_01.png'
import banner_02 from '../../../img/banner_05.png'
import banner_03 from '../../../img/banner_04.png'

function SliderContent({ activeIndex, sliderImage }) {
  const populargame = [
    {
      id: 1,
      img: banner_01
    },
    {
      id: 2,
      img: banner_02
    },
    {
      id: 3,
      img: banner_03
    }
  ]

  return (
    <section className="testy">
      {populargame.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.img} alt="" />
        </div>
      ))}
    </section>
  );
}

export default SliderContent;