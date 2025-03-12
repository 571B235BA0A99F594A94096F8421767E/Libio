import React from "react";
import { useNavigate } from "react-router-dom";

import GradientText from "./Gradiant";

function Homepage() {
    const navigate = useNavigate() 
  return (
    <div className="py-6">
      <h1 className="text-4xl text-semibold text-center">OUR CATEGORIES</h1> 
     
      <div>
        <div className="  grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 items-center gap-2   p-8">
          <div className=" flex flex-col items-center ">
           <img onClick={()=>{navigate('/frieditems')}} className="hover:scale-105 scale-100 duration-200 h-19 md:h-40 rounded-full" src="src\assets\home\burger.jpg" alt="" />
            <p>Fried Items</p>
          </div>

          <div className="flex flex-col items-center ">
            <img onClick={()=>{navigate('/fastfood')}} className="hover:scale-105 scale-100 duration-200 h-20 w-20 md:w-40 md:h-40 rounded-full" src="src\assets\home\fastfood.jpg" alt="" />
            <p>Fast Food</p>
          </div>

          <div className=" flex flex-col items-center ">
            <img onClick={()=>{navigate('/freshjuice')}}  className="hover:scale-105 scale-100 duration-200 h-20 w-20 md:w-39 md:h-40 rounded-full" src="src\assets\home\freshjuice.jpg" alt="" />
            <p>Freshjuice</p>
          </div>

          
          <div className=" flex flex-col items-center ">
            <img onClick={()=>{navigate('/milkshake')}}  className="hover:scale-105 scale-100 duration-200 h-20 w-20 md:w-39 md:h-40 rounded-full" src="src\assets\cardimg\milkshake2.jpeg" alt="" />
            <p>Milkshakes</p>
          </div>

          <div  className=" flex flex-col items-center ">
            <img onClick={()=>{navigate('/icecreams')}} className="hover:scale-105 scale-100 duration-200 h-20 w-20 md:w-40 md:h-40 rounded-full" src="src\assets\home\icecream.jpg" alt="" />
            <p>Ice creams</p>
          </div>

          <div className=" flex flex-col items-center " >
            <img onClick={()=>{navigate('/mojitos')}} className="hover:scale-105 scale-100 duration-200 h-20 w-20  md:w-40 md:h-40 rounded-full"  src="src\assets\home\mojitos.jpg" alt="" />
            <p>Mojitos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
