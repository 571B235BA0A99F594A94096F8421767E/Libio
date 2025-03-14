import React, { useEffect, useRef } from 'react'
import img1 from "../assets/cardimg/burger1.jpg";
import img2 from "../assets/cardimg/vegburger.jpg";
import img3 from "../assets/cardimg/eggburger.jpg";
import img4 from "../assets/cardimg/vegsandwich.jpg";
import img5 from "../assets/cardimg/sandwich.jpg";
import img6 from "../assets/cardimg/eggsandwich.jpg";
import img7 from "../assets/cardimg/sandwich.jpg";
import img8 from "../assets/cardimg/vegmomos.webp";
import img9 from "../assets/cardimg/craplollipop.webp";
import img10 from "../assets/cardimg/fishfinger1.webp";
import img11 from "../assets/cardimg/ff.jpg";
import img12 from "../assets/cardimg/piza.jpg";
import img13 from "../assets/cardimg/pasta.jpg";
import img14 from "../assets/cardimg/biriyani.jpg";
import img15 from "../assets/cardimg/tandoori.jpg";
import img16 from "../assets/cardimg/wings.jpg";
import img17 from "../assets/cardimg/moms.avif";
import img18 from "../assets/cardimg/nuggets.jpg";
import img19 from "../assets/cardimg/pops.webp";
import img20 from "../assets/cardimg/pops.webp";
import CustomizedRating from './rating';


import CustomizedDialogs from './Dialogorderform'; 


function Card({scroll}) {
 useEffect(()=>{
    scroll()
  },[])
   
  return (
    <div>

   <div> 
      {/* <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class"> */}
                 <h1  className="font-bold text-3xl text-center mt-5 ">
          Have a good food! Have a good memories
        </h1>
        {/* </GradientText>  */}
         </div>
         <div><h1 className="font-bold text-3xl text-center mt-5 ">Fried Items</h1></div>

    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 mt-10 mb-10 gap-5 xl:grid-cols-4 justify-around">
        
        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400  w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img1}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold"> Chicken Burger</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $60
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img2}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold"> Veg Burger</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $50
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img3}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Egg Burger</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $50
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img4}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Veg Sandwich</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $50
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full hover:scale-105 scale-100 duration-400 rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img5}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Chicken Sandwich</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $60
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img6}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Egg Sandwich</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $50
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img7}
              alt=""
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Club Sandwich</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $80
            <CustomizedDialogs/>
          </div>
        </div>
        
        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400  w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img9}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Crap Lollipop</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $110
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img10}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Fish Finger</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $110
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img11}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">French Fries</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $60
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img12}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pizza</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $250
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img13}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pasta</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img14}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Biriyani</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $180
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img15}
              alt=""
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Tandoori</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $300
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img16}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold font-3xl">Wings</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $200
            <CustomizedDialogs/>
          </div>
        </div>
 
        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[190px] lg:w-170 lg:h-80 object-cover"
              src={img17}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Chicken Momos</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $60
            <CustomizedDialogs/>
          </div>
        </div>

        
        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img8}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold font-3xl">Veg Momos</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $50
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img18}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Nuggets</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $60
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img19}
              alt=""
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pops</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $60
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
              src={img20}
              alt=""
            />
          </div> 
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold font-3xl">Nuggets</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $60
            <CustomizedDialogs/>
          </div>
        </div>


    </div>
   
      </div>
  )
}

export default Card
