import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomTabPanel  from './Tabs'
import Homepage from "./Homepage";
import GradientText from "./Gradiant";
import Content from "./Content";
import Content1 from "./Content1";
import CustomizedTables from "./Display";
import img1 from '../assets/slider/sliderimg11.jpg'
import img2 from '../assets/slider/sliderimg12.jpg'
import img3 from '../assets/slider/sliderimg13.jpg'
import img4 from '../assets/slider/sliderimg14.jpg'


export default function Simpleslider() {
  

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed:3500,
    autoplaySpeed: 3500,
    

  };

    
  
 
  return (<div className=" mx-5 md:mx-10 ">
   <GradientText
                 colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                 animationSpeed={7}
                 showBorder={false}
                 className="custom-class">
    <div > <h1 className=" font-bold font-sans text-xl  md:text-3xl  mt-10 flex justify-center items-center  ">WELCOME TO LIBI'O FOOD COURT</h1></div>
    </GradientText> 
    <p className="text-center text-xl text-gray-400">Since 2024</p> 
   <div className=" w-full h-[300px]   md:w-full md:h-full mb-[10px] mt-5   "> 
  
    <Slider className="w-full h-[500px] rounded-2xl overflow-hidden " {...settings}>
     <div >
        <img  className=" h-[300px] object-fill md:w-full md:h-[630px] rounded-2xl"  src={img1} alt="" />
      </div>
      <div>
       <img  className=" h-[300px] md:w-full md:h-[630px] rounded-2xl" src={img2} alt="" />
      </div>
      <div>
       <img  className=" h-[300px] md:w-full md:h-[630px] rounded-2xl" src={img3} alt="" />
      </div>
      <div>
        <img  className="h-[300px] md:w-full md:h-[630px] rounded-2xl" src={img4} alt="" />
      </div>
  
    </Slider>
    </div> 

    <Homepage/>
   
    <Content/>
    <Content1/>
    <CustomTabPanel/>
 
    <CustomizedTables />
    </div>
  );
}
