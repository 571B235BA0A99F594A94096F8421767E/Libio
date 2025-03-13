import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img37 from "../assets/mojito/blackcurrent1.jpg";
import img38 from "../assets/mojito/bluesea1.jpg";
import img39 from "../assets/mojito/greenapple.jpg";
import img40 from "../assets/mojito/lime1.jpg";
import img41 from "../assets/mojito/pinapple.jpg";
import img42 from "../assets/mojito/strawberry.jpg";


export default function Mojito() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2,
    responsive:[
      {breakpoint:1024, settings:{slidesToShow: 3}},
      {breakpoint:640, settings:{slidesToShow: 2}},
      {breakpoint:580, settings:{slidesToShow: 1}},
    ]
  };
  
    
  
 
  return (<div className=" mx-5  ">
   
   
   <div className="  my-5   "> 
    <Slider className=" rounded-2xl    " {...settings}>
     <div className=" ">
        <img  className="w-[600px]   rounded-2xl"  src={img37} alt="" />
      </div>
      <div className=" ">
       <img  className="  w-[600px] rounded-2xl" src={img38} alt="" />
      </div>
      <div className=" ">
<<<<<<< HEAD
       <img  className=" w-[600px] rounded-2xl" src={img39} alt="" />
=======
       <img  className="w-[600px]  rounded-2xl" src={img39} alt="" />
>>>>>>> beb82a2b0b5c542ecdfdc96bd31eef689dd3efd2
      </div>
      <div className=" ">
        <img  className=" w-[600px] rounded-2xl" src={img40} alt="" />
      </div>
      <div className=" ">
        <img  className=" w-[600px] rounded-2xl" src={img41} alt="" />
      </div>
      <div className=" ">
<<<<<<< HEAD
        <img  className="w-[600px]  rounded-2xl" src={img42} alt="" />
=======
        <img  className=" w-[600px] rounded-2xl" src={img42} alt="" />
>>>>>>> beb82a2b0b5c542ecdfdc96bd31eef689dd3efd2
      </div> 
    
    </Slider>
    </div> 
    </div>
  );
}
