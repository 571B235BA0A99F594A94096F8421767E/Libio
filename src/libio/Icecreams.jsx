import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Icecreams() {
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
        <img  className="  rounded-2xl"  src="src\assets\icecreams\venilaice1.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
       <img  className="  rounded-2xl" src="src\assets\icecreams\chocolate1.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
       <img  className=" rounded-2xl" src="src\assets\icecreams\strawberry1.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\icecreams\blackcurrent1.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\icecreams\butterscotch1.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\icecreams\nuts.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className=" rounded-2xl" src="src\assets\icecreams\pista.jpg" alt="" />
      </div>
      <div className=" px-[15px]">
        <img  className="  rounded-2xl" src="src\assets\icecreams\pinapple.jpg" alt="" />
      </div>
      
      
      
    </Slider>
    </div> 
    </div>
  );
}