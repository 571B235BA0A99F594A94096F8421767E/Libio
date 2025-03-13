import React from "react";
import Slider from "react-slick";
import img45 from "../assets/milkshake/oreo.jpg";
import img46 from "../assets/milkshake/blackcurrent.jpg";
import img47 from "../assets/milkshake/butterscotch.jpg";
import img48 from "../assets/milkshake/chocolate.jpg";
import img49 from "../assets/milkshake/nuts.jpg";
import img50 from "../assets/milkshake/pinapple.jpg";
import img51 from "../assets/milkshake/strawbeery.jpg";
import img52 from "../assets/milkshake/vennila.jpg";

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
      {breakpoint:580, settings:{slidesToShow: 1}},
    ]
  };
  
    
  
 
  return (<div className=" mx-5  ">
   
   
   <div className="  my-5   "> 
    <Slider className=" rounded-2xl    " {...settings}>
     <div className="">
        <img  className=" w-[600px] rounded-2xl"  src={img45} alt="" />
      </div>
      <div className="">
       <img  className=" w-[600px] rounded-2xl" src={img46} alt="" />
      </div>
      <div className="">
       <img  className=" w-[600px]rounded-2xl" src={img47} alt="" />
      </div>
      <div className="">
        <img  className="w-[600px] rounded-2xl" src={img48} alt="" />
      </div>
      <div className="">
        <img  className="w-[600px] rounded-2xl" src={img49} alt="" />
      </div>
      <div className="">
        <img  className="w-[600px] rounded-2xl" src={img50} alt="" />
      </div>
      <div className="">
        <img  className="w-[600px] rounded-2xl" src={img51} alt="" />
      </div>
      <div className="">
        <img  className=" w-[600px] rounded-2xl" src={img52} alt="" />
      </div>
      
      
      
    </Slider>
    </div> 
    </div>
  );
}