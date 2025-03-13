import React from 'react'
import img1 from "./../../assets/cardimg/SANDWICH.jpg";
import img2 from "./../../assets/cardimg/burger1.jpg";
import img3 from "./../../assets/cardimg/ff.jpg";
import img4 from "./../../assets/cardimg/piza.jpg";
import img5 from "./../../assets/cardimg/pasta.jpg";
import img6 from "./../../assets/cardimg/biriyani.jpg";
import img7 from "./../../assets/cardimg/tandoori.jpg";
import img8 from "./../../assets/cardimg/wings.jpg";

// milkshake
import img9 from "./../../assets/milkshake/oreo.jpg";
import img10 from "./../../assets/milkshake/oreo.jpg";
import img11 from "./../../assets/milkshake/oreo.jpg";
import img12 from "./../../assets/milkshake/oreo.jpg";
import img13 from "./../../assets/milkshake/oreo.jpg";
import img14 from "./../../assets/milkshake/oreo.jpg";
import img15 from "./../../assets/milkshake/oreo.jpg";
import img16 from "./../../assets/milkshake/oreo.jpg";



import CustomizedRating from './rating';
import Orderform from './Form'
import GradientText from "./Gradiant";
import { Button } from '@mui/material';
import CustomizedDialogs from './Dialogorderform';



function Card() {
  return (
   
    <>

   <div> 
      <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class">
                 <h1 className="font-bold text-3xl text-center mt-5 ">
          Have a good food! Have a good memories
        </h1></GradientText> 
         </div>

    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 mt-10 mb-10 gap-5 xl:grid-cols-4 justify-around">
        {/* fried items */}
        <div className="bg-gray-100   w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img1}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Sandwich</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img2}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Burger</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img3}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">French Fries</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹50
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img4}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pizza</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹200
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img5}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pasta</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img6}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Biriyani</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹180
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img7}
              alt="Burger"
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Tandoori</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹300
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img8}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold font-3xl">Wings</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹150
            <CustomizedDialogs/>
          </div>
        </div>

      {/*  fried rice items */}
     
      <div className="bg-gray-100   w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img1}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Sandwich</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img2}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Burger</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img3}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">French Fries</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹50
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img4}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pizza</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹200
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img5}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pasta</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img6}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Biriyani</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹180
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img7}
              alt="Burger"
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Tandoori</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹300
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img8}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold font-3xl">Wings</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹150
            <CustomizedDialogs/>
          </div>
        </div>
        {/*Icecreams items  */}
        <div className="bg-gray-100   w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img1}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Sandwich</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img2}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Burger</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img3}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">French Fries</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹50
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img4}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pizza</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹200
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img5}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pasta</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img6}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Biriyani</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹180
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img7}
              alt="Burger"
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Tandoori</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹300
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img8}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold font-3xl">Wings</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹150
            <CustomizedDialogs/>
          </div>
        </div>
      {/* milkshakes  */}
      <div className="bg-gray-100   w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img1}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Sandwich</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img2}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Burger</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img3}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">French Fries</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹50
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img4}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pizza</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹200
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img5}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pasta</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img6}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Biriyani</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹180
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img7}
              alt="Burger"
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Tandoori</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹300
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img8}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold font-3xl">Wings</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹150
            <CustomizedDialogs/>
          </div>
        </div>

        {/* mojitos */}
        <div className="bg-gray-100   w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img1}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Sandwich</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img2}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Burger</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img3}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">French Fries</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹50
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img4}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pizza</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹200
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img5}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pasta</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img6}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Biriyani</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹180
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img7}
              alt="Burger"
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Tandoori</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹300
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img8}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold font-3xl">Wings</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹150
            <CustomizedDialogs/>
          </div>
        </div>
        {/* fresh juices */}
        <div className="bg-gray-100   w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img1}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Sandwich</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img2}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Burger</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img3}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">French Fries</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹50
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img4}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pizza</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹200
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img5}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pasta</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img6}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Biriyani</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹180
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img7}
              alt="Burger"
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Tandoori</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹300
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img8}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold font-3xl">Wings</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹150
            <CustomizedDialogs/>
          </div>
        </div>

         {/* tea and snacks */}
         <div className="bg-gray-100   w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img1}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Sandwich</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img2}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Burger</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img3}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">French Fries</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹50
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img4}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pizza</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹200
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img5}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pasta</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img6}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Biriyani</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹180
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img7}
              alt="Burger"
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Tandoori</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹300
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img8}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold font-3xl">Wings</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price ₹150
            <CustomizedDialogs/>
          </div>
        </div>
    </div>

      </>
  )
}

export default Card
