import React from "react";
import Slider from "react-slick";

// Importing images
import vanilla from 'src/assets/milkshake/vennila.jpg';
import chocolate from 'src/assets/milkshake/chocolate.jpg';
import strawberry from 'src/assets/milkshake/strawbeery.jpg';
import blackcurrant from 'src/assets/milkshake/blackcurrent.jpg';
import butterscotch from 'src/assets/milkshake/butterscotch.jpg';
import oreo from 'src/assets/milkshake/oreo.jpg';
import nuts from 'src/assets/milkshake/nuts.jpg';
import pineapple from 'src/assets/milkshake/pinapple.jpg';

export default function Milkshake() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 580, settings: { slidesToShow: 1, centerMode: true } },
    ],
  };

  return (
    <div className="mx-5">
      <div className="my-5">
        <Slider className="rounded-2xl" {...settings}>
          <div className="px-[15px]">
            <img className="rounded-2xl" src={vanilla} alt="Vanilla Milkshake" />
          </div>
          <div className="px-[15px]">
            <img className="rounded-2xl" src={chocolate} alt="Chocolate Milkshake" />
          </div>
          <div className="px-[15px]">
            <img className="rounded-2xl" src={strawberry} alt="Strawberry Milkshake" />
          </div>
          <div className="px-[15px]">
            <img className="rounded-2xl" src={blackcurrant} alt="Blackcurrant Milkshake" />
          </div>
          <div className="px-[15px]">
            <img className="rounded-2xl" src={butterscotch} alt="Butterscotch Milkshake" />
          </div>
          <div className="px-[15px]">
            <img className="rounded-2xl" src={oreo} alt="Oreo Milkshake" />
          </div>
          <div className="px-[15px]">
            <img className="rounded-2xl" src={nuts} alt="Nuts Milkshake" />
          </div>
          <div className="px-[15px]">
            <img className="rounded-2xl" src={pineapple} alt="Pineapple Milkshake" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
