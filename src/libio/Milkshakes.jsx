import React from "react";
import Slider from "react-slick";
// import "slick-carousel/Slick/slick.css";
// import "slick-carousel/Slick/slick-theme.css";

export default function Milkshake() {
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
        <img  className="  rounded-2xl"  src="src\assets\milkshake\vennila.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
       <img  className="  rounded-2xl" src="src\assets\milkshake\chocolate.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
       <img  className=" rounded-2xl" src="src\assets\milkshake\strawbeery.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\milkshake\blackcurrent.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\milkshake\butterscotch.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\milkshake\oreo.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\milkshake\nuts.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className="  rounded-2xl" src="src\assets\milkshake\pinapple.jpg" alt="" />
      </div>
      
      
      
    </Slider>
    </div> 
    </div>
  );
}