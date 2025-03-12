import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Content() {

const navigate =useNavigate('')

  
const handleopen=() =>{
  navigate('/explore')
  }

  return (
    <div className=" container mx-auto grid grid-cols-1 md:grid-cols-1 md:justify-items-center lg:grid-cols-2 lg:mx-10 justify-center items-center  md:gap-10  py-6">
      <div className=" w-full md:w-full py-2">
       <div className="flex flex-col justity-center items-center"> <h1 className="font-mono text-orange-500 text-4xl">From the Menu</h1>
        <h1 className="font-bold text-2xl">SPECIAL OFFERS</h1>  
        <p className="text-orange-500"> .____</p></div>
        <div className="flex  flex-col justify-center items-center gap-6 py-4">
         
          <div className=" flex gap-6 ">
          
          
              <img
                className=" w-15 h-15 md:w-30 md:h-20 rounded-xl"
                src="src\assets\cardimg\burger1.jpg"
                alt=""
              />
        
               <div className="flex flex-col w-50 md:w-80">
              <h1 className="font-sans text-orange-400 ">
                chicken Burger & Mojito
              </h1>
              <p className=" text-sm md:text-xl  ">
                Burgers are one of my favourite quick meal options.
              </p></div>
         
         <div>
              <h1 className="border  px-4 py-4 md:p-6 rounded-full border-orange-300">120</h1>
              </div>
          </div>

           
          <div className=" flex gap-6">
          
              <img
                className="  w-15 h-15 md:w-30 md:h-20 rounded-xl"
                src="src\assets\cardimg\sandwich.jpg"
                alt=""
              />
        
               <div className="flex flex-col w-50 md:w-80">
              <h1 className="font-sans text-orange-400 ">
                Sandwich & Mojito
              </h1>
              <p className=" text-sm md:text-xl  ">
                Burgers are one of my favourite quick meal options.
              </p></div>
         
         <div>
              <h1 className="border  px-4 py-4 md:p-6 rounded-full border-orange-300 text-center">150</h1>
              </div>
          </div>
           
            
          <div className=" flex  gap-6">
          
          <img
            className="  w-15 h-15 md:w-30 md:h-20 rounded-xl"
            src="src\assets\cardimg\wings.jpg"
            alt=""
          />
    
           <div className="flex flex-col w-50 md:w-80">
          <h1 className="font-sans text-orange-400 ">
          Chicken lalipop & coco cola
          </h1>
          <p className=" text-sm md:text-xl  ">
            Burgers are one of all favourite quick meal options.
          </p></div>
         
         <div>
     
          <h1 className="border px-4 py-4  md:p-6 rounded-full border-orange-300  text-center">200</h1>
          </div>
      </div>

        </div>
      </div>

      <div className="justify-items-center  h-[380px] relative ">
        <img
          className="h-full"
          src="src\assets\cardimg\maincontent.jpg"
          alt=""
        />
        <div className="   absolute inset-29 md:inset-34 w-[130px]  " onClick={handleopen}  >
          <p className="flex flex-col border border-orange-300 py-8 hover:bg-orange-300 hover:text-white  text-center  rounded-full bg-white ">
            <span className="text-orange-400  hover:text-white font-semibold text-xl">
           
              Explore
            </span>
            THE MENU
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
