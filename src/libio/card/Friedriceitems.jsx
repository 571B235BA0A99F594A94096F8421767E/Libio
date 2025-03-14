import React, { useEffect } from 'react'
import img1 from "../../assets/juice/apple.jpg";
import img2 from "../../assets/juice/kirini1.jpg";
import img3 from "../../assets/juice/lemon.jpg";
import img4 from "../../assets/juice/mathulai.jpg";
import img5 from "../../assets/juice/orange.jpg";
import img6 from "../../assets/juice/rose.jpg";
import img7 from "../../assets/juice/sathukudi1.jpg";
import img8 from "../../assets/juice/watermelon.jpg";
import CustomizedRating from './../rating';
// import Orderform from './/Form'
import GradientText from "./../Gradiant";
// import { Button } from '@mui/material';
import CustomizedDialogs from './../Dialogorderform';



function Fiedrice({scroll}) {



  useEffect(()=>{
    scroll()
  },[])
  return (
   
    <>

   <div> 
      <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class">
                 <h1 className="font-bold text-3xl text-center mt-5 ">
           FAST FOOD 
        </h1></GradientText> 
         </div>

    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 mt-10 mb-10 gap-5 xl:grid-cols-4 justify-around">
        
        <div className="bg-gray-100   w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img1}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold"> Veg Rice</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $70
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100   w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img1}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Mushroom Rice</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100   w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img1}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">  Kaliflower Rice</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $70
            <CustomizedDialogs/>
          </div>
        </div>


        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img2}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Chicken Rice</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img3}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Egg Rice</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $70
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img4}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Veg Noodles</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $70
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img5}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Chicken Noodles</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img5}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Mushroom  Noodles</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img6}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">kaliflower Noodles</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $70
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full  lg:w-170 lg:h-80 object-cover"
              src={img6}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Egg Noodles</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img7}
              alt=""
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold"> schezwan noodles</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img8}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold font-3xl">Chicken Manjurian</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img4}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold"> Mushroom Manjurian</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img5}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Kaliflower Manjurian</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img6}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Chill chicken</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $80
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img7}
              alt=""
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Chicken 65(100G)</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $50
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img8}
              alt=""
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold font-3xl">Chicken Manjurian</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $80
            <CustomizedDialogs/>
          </div>
        </div>

        
        <div className="bg-gray-100 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img7}
              alt=""
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Mutton soup</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $30
            <CustomizedDialogs/>
          </div>
        </div>

      
    </div>

      </>
  )
}

export default Fiedrice
