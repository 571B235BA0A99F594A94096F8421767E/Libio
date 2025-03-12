import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      {breakpoint:580, settings:{slidesToShow: 1, centerMode:true}},
    ]
  };
  
    
  
 
  return (<div className=" mx-5  ">
   
   
   <div className="  my-5   "> 
    <Slider className=" rounded-2xl    " {...settings}>
     <div className=" px-[15px]">
        <img  className="  rounded-2xl"  src="src\assets\mojito\blackcurrent1.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
       <img  className="  rounded-2xl" src="src\assets\mojito\lime1.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
       <img  className=" rounded-2xl" src="src\assets\mojito\greenapple.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\mojito\strawberry.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\mojito\pinapple.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\mojito\bluesea1.jpg" alt="" />
      </div> 
    </Slider>
    </div> 
    </div>
  );
}