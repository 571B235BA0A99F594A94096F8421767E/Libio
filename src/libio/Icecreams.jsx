import React from "react";
import Slider from "react-slick";
import img1 from '../assets/icecreams/venilaice1.jpg'
import img2 from '../assets/icecreams/chocolate1.jpg'
import img3 from '../assets/icecreams/strawberry1.jpg'
import img4 from '../assets/icecreams/blackcurrent1.jpg'import React from "react";
import Slider from "react-slick";
import img1 from '../assets/icecreams/venilaice1.jpg'
import img2 from '../assets/icecreams/chocolate1.jpg'
import img3 from '../assets/icecreams/strawberry1.jpg'
import img4 from '../assets/icecreams/blackcurrent1.jpg'
import img5 from '../assets/icecreams/butterscotch1.jpg'
import img6 from '../assets/icecreams/nuts.jpg'
import img7 from '../assets/icecreams/pista.jpg'
import img8 from '../assets/icecreams/pinapple.jpg'

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
      {breakpoint:580, settings:{slidesToShow: 1}},
    ]
  };
  
    
  
 
  return (<div className=" mx-5  ">
   
   
   <div className="  my-5   "> 
    <Slider className=" rounded-2xl    " {...settings}>
     <div className=" ">
        <img  className=" w-[600px] rounded-2xl"  src={img1} alt="" />
      </div>
      <div className=" ">
       <img  className=" w-[600px] rounded-2xl " src={img2} alt="" />
      </div>
      <div className=" ">
       <img  className="w-[600px] rounded-2xl" src={img3} alt="" />
      </div>
      <div className=" ">
        <img  className="w-[600px] rounded-2xl" src={img4} alt="" />
      </div>
      <div className=" ">
        <img  className="w-[600px] rounded-2xl" src={img5} alt="" />
      </div>
      <div className=" ">
        <img  className="w-[600px] rounded-2xl" src={img6} alt="" />
      </div>
      <div className=" ">
        <img  className="w-[600px] rounded-2xl" src={img7} alt="" />
      </div>
      <div className=" ">
        <img  className="w-[600px] rounded-2xl" src={img8} alt="" />
      </div>
      
      
      
    </Slider>
    </div> 
    </div>
  );
}
import img5 from '../assets/icecreams/butterscotch1.jpg'
import img6 from '../assets/icecreams/nuts.jpg'
import img7 from '../assets/icecreams/pista.jpg'
import img8 from '../assets/icecreams/pinapple.jpg'

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
      {breakpoint:580, settings:{slidesToShow: 1}},
    ]
  };
  
    
  
 
  return (<div className=" mx-5  ">
   
   
   <div className="  my-5   "> 
    <Slider className=" rounded-2xl    " {...settings}>
     <div className=" ">
        <img  className=" w-[600px] rounded-2xl"  src={img1} alt="" />
      </div>
      <div className=" ">
       <img  className=" w-[600px] rounded-2xl " src={img2} alt="" />
      </div>
      <div className=" ">
       <img  className="w-[600px] rounded-2xl" src={img3} alt="" />
      </div>
      <div className=" ">
        <img  className="w-[600px] rounded-2xl" src={img4} alt="" />
      </div>
      <div className=" ">
        <img  className="w-[600px] rounded-2xl" src={img5} alt="" />
      </div>
      <div className=" ">
        <img  className="w-[600px] rounded-2xl" src={img6} alt="" />
      </div>
      <div className=" ">
        <img  className="w-[600px] rounded-2xl" src={img7} alt="" />
      </div>
      <div className=" ">
        <img  className="w-[600px] rounded-2xl" src={img8} alt="" />
      </div>
      
      
      
    </Slider>
    </div> 
    </div>
  );
}
