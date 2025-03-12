import React from "react";
import Slider from "react-slick";
// import "slick-carousel/Slick/Slick.css";
// import "slick-carousel/Slick/Slick-theme.css";

export default function Freshjuice() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
        <img  className="  rounded-2xl"  src="src\assets\juice\apple.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
       <img  className="  rounded-2xl" src="src\assets\juice\kirini.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
       <img  className=" rounded-2xl" src="src\assets\juice\lemon.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\juice\mathulai.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\juice\orange.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\juice\rose.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\juice\sathukudi.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className="  rounded-2xl" src="src\assets\juice\watermelon.jpg" alt="" />
      </div>
      
      
      
    </Slider>
    </div> 
    </div>
  );
}