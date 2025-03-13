import React from "react";
import { useNavigate } from "react-router-dom";

import GradientText from "./Gradiant";
import img1 from '../assets/home/burger.jpg'
import img2 from '../assets/home/fastfood.jpg'
import img3 from '../assets/home/freshjuice.jpg'
import img4 from '../assets/home/milkshakes.jpg'
import img5 from '../assets/home/icecream.jpg'
import img6 from '../assets/home/mojitos.jpg'
function Homepage() {
    const navigate = useNavigate() 
  return (
    <div className="py-6">
      <h1 className="text-xl md:text-4xl text-semibold text-center">OUR CATEGORIES</h1> 
     
      <div>
        <div className="  grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 items-center gap-2   p-8">
          <div className=" flex flex-col items-center ">
           <img onClick={()=>{navigate('/frieditems')}} className="hover:scale-105 scale-100 duration-200 h-19 md:h-40 rounded-full" src={img1} alt="" />
            <p>Fried Items</p>
          </div>

          <div className="flex flex-col items-center ">
            <img onClick={()=>{navigate('/fastfood')}} className="hover:scale-105 scale-100 duration-200 h-20 w-20 md:w-40 md:h-40 rounded-full" src={img2} alt="" />
            <p>Fast Food</p>
          </div>

          <div className=" flex flex-col items-center ">
            <img onClick={()=>{navigate('/freshjuice')}}  className="hover:scale-105 scale-100 duration-200 h-20 w-20 md:w-39 md:h-40 rounded-full" src={img3} alt="" />
            <p>Freshjuice</p>
          </div>

          
          <div className=" flex flex-col items-center ">
            <img onClick={()=>{navigate('/milkshake')}}  className="hover:scale-105 scale-100 duration-200 h-20 w-20 md:w-39 md:h-40 rounded-full" src={img4} alt="" />
            <p>Milkshakes</p>
          </div>

          <div  className=" flex flex-col items-center ">
            <img onClick={()=>{navigate('/icecreams')}} className="hover:scale-105 scale-100 duration-200 h-20 w-20 md:w-40 md:h-40 rounded-full" src={img5} alt="" />
            <p>Ice creams</p>
          </div>

          <div className=" flex flex-col items-center " >
            <img onClick={()=>{navigate('/mojitos')}} className="hover:scale-105 scale-100 duration-200 h-20 w-20  md:w-40 md:h-40 rounded-full"  src={img6} alt="" />
            <p>Mojitos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
