import React from 'react'

import img1 from "./assets/cardimg/burger1.jpg"
import img2 from "./assets/cardimg/vegburger.jpg";
import img3 from "./assets/cardimg/eggburger.jpg";
import img4 from "./assets/cardimg/vegsandwich.jpg";
import img5 from "./assets/cardimg/sandwich.jpg";
import img6 from "./assets/cardimg/eggsandwich.jpg";
import img7 from "./assets/cardimg/sandwich.jpg";
import img8 from "./assets/cardimg/vegmomos.webp";
import img9 from "./assets/cardimg/craplollipop.webp";
import img10 from "./assets/cardimg/fishfinger1.webp";
import img11 from "./assets/cardimg/ff.jpg";
import img12 from "./assets/cardimg/piza.jpg";
import img13 from "./assets/cardimg/pasta.jpg";
import img14 from "./assets/cardimg/biriyani.jpg";
import img15 from "./assets/cardimg/tandoori.jpg";
import img16 from "./assets/cardimg/wings.jpg";
import img17 from "./assets/cardimg/moms.avif";
import img18 from "./assets/cardimg/nuggets.jpg";
import img19 from "./assets/cardimg/pops.webp";
import img20 from "./assets/cardimg/pops.webp";
// freshjuice
import img21 from "./assets/juice/apple.jpg";
import img22 from "./assets/juice/kirini1.jpg";
import img23 from "./assets/juice/lemon.jpg";
import img24 from "./assets/juice/mathulai.jpg";
import img25 from "./assets/juice/orange.jpg";
import img26 from "./assets/juice/rose.jpg";
import img27 from "./assets/juice/sathukudi1.jpg";
import img28 from "./assets/juice/watermelon.jpg";
// icecream
import img29 from "./assets/icecreams/blackcurrent1.jpg";
import img30 from "./assets/icecreams/chocolate1.jpg";
import img31 from "./assets/icecreams/butterscotch1.jpg";
import img32 from "./assets/icecreams/blackcurrent1.jpg";
import img33 from "./assets/icecreams/nuts.jpg";
import img34 from "./assets/icecreams/pinapple.jpg";
import img35 from "./assets/icecreams/pista.jpg";
import img36 from "./assets/icecreams/strawberry1.jpg";
// mojitos
import img37 from "./assets/mojito/blackcurrent1.jpg";
import img38 from "./assets/mojito/bluesea1.jpg";
import img39 from "./assets/mojito/greenapple.jpg";
import img40 from "./assets/mojito/lime1.jpg";
import img41 from "./assets/mojito/pinapple.jpg";
import img42 from "./assets/mojito/strawberry.jpg";
import img43 from "./assets/mojito/apple.jpg";
import img44 from "./assets/mojito/blueberry.jpg";
// milkshake
import img45 from "./assets/milkshake/oreo.jpg";
import img46 from "./assets/milkshake/blackcurrent.jpg";
import img47 from "./assets/milkshake/butterscotch.jpg";
import img48 from "./assets/milkshake/chocolate.jpg";
import img49 from "./assets/milkshake/nuts.jpg";
import img50 from "./assets/milkshake/pinapple.jpg";
import img51 from "./assets/milkshake/strawbeery.jpg";
import img52 from "./assets/milkshake/vennila.jpg";
import CustomizedRating from './libio/rating';
import CustomizedDialogs from './libio/Dialogorderform';

function Menu( ) {


  
  return (
    <div>
            <h1  className="font-bold text-3xl text-center mt-5 " >
                Have a good food! Have a good memories
              </h1>
              
              {/* frieditems */}
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
                  Price ₹60
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
                  Price ₹50
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
                  Price ₹50
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
                  Price ₹50
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
                  Price ₹60
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
                  Price ₹50
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
                  Price ₹80
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
                  Price ₹110
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
                  Price ₹110
                  <CustomizedDialogs/>
                </div>
              </div>
      
              <div className="bg-gray-100 hover:scale-105 scale-100 duration-400 w-full rounded-2xl">
                <div>
                  <img
                    className="rounded-2xl w-fullh-[250px] md:h-[200px] lg:w-170 lg:h-80 object-cover"
                    src={img11}
                    alt=""
                  />
                </div>
                <div className="flex justify-between mx-3 my-2">
                  <h1 className="font-bold">French Fries</h1>
                  <CustomizedRating />
                </div>
                <div className="flex justify-between mx-3 mb-5">
                  Price ₹60
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
                  Price ₹250
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
                  Price ₹100
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
                  Price ₹180
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
                  Price ₹300
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
                  Price ₹200
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
                  Price ₹60
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
                  Price ₹50
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
                  Price ₹60
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
                  Price ₹60
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
                  Price ₹60
                  <CustomizedDialogs/>
                </div>
              </div>
          </div>

         {/* FAST FOOD */}

         
            <div> 
              
                          <h1 className="font-bold text-3xl text-center mt-5 ">
                    FAST FOOD 
                 </h1>
                  </div>
         
             <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 mt-10 mb-10 gap-5 xl:grid-cols-4 justify-around">
                 
                 <div className="bg-gray-100  hover:scale-105 scale-100 duration-400   w-full rounded-2xl">
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
                     Price ₹70
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100  hover:scale-105 scale-100 duration-400   w-full rounded-2xl">
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
                     Price ₹80
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100  hover:scale-105 scale-100 duration-400   w-full rounded-2xl">
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
                     Price ₹70
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
         
                 <div className="bg-gray-100  hover:scale-105 scale-100 duration-400  w-full rounded-2xl">
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
                     Price ₹80
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100  hover:scale-105 scale-100 duration-400  w-full rounded-2xl">
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
                     Price ₹70
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 w-full  hover:scale-105 scale-100 duration-400  rounded-2xl">
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
                     Price ₹70
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 w-full  hover:scale-105 scale-100 duration-400  rounded-2xl">
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
                     Price ₹80
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 w-full  hover:scale-105 scale-100 duration-400  rounded-2xl">
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
                     Price ₹80
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 w-full  hover:scale-105 scale-100 duration-400  rounded-2xl">
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
                     Price ₹70
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 w-full  hover:scale-105 scale-100 duration-400  rounded-2xl">
                   <div>
                     <img
                       className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                       src={img6}
                       alt=""
                     />
                   </div>
                   <div className="flex justify-between mx-3 my-2">
                     <h1 className="font-bold">Egg Noodles</h1>
                     <CustomizedRating />
                   </div>
                   <div className="flex justify-between mx-3 mb-5">
                     Price ₹100
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 w-full  hover:scale-105 scale-100 duration-400  rounded-2xl">
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
                     Price ₹100
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 w-full  hover:scale-105 scale-100 duration-400  rounded-2xl">
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
                     Price ₹80
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 w-full  hover:scale-105 scale-100 duration-400  rounded-2xl">
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
                     Price ₹80
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 w-full  hover:scale-105 scale-100 duration-400  rounded-2xl">
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
                     Price ₹80
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 w-full hover:scale-105 scale-100 duration-400  rounded-2xl">
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
                     Price ₹80
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 w-full hover:scale-105 scale-100 duration-400  rounded-2xl">
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
                     Price ₹50
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 w-full  hover:scale-105 scale-100 duration-400  rounded-2xl">
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
                     Price ₹80
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 
                 <div className="bg-gray-100 w-full  hover:scale-105 scale-100 duration-400  rounded-2xl">
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
                     Price ₹30
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
               
             </div>

          {/* freshjuice */}
      
          <div><h1 className="font-bold text-3xl text-center mt-5 ">FRESH JUICES</h1></div>

             <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 mt-10 mb-10 gap-5 xl:grid-cols-4 justify-around">
                 
                 <div className="bg-gray-100 hover:scale-105 scale-100 duration-200   w-full rounded-2xl">
                   <div>
                     <img
                       className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                       src={img21}
                       alt=""
                     />
                   </div>
                   <div className="flex justify-between mx-3 my-2">
                     <h1 className="font-bold"> Apple</h1>
                     <CustomizedRating />
                   </div>
                   <div className="flex justify-between mx-3 mb-5">
                     Price ₹100
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                   <div>
                     <img
                       className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                       src={img22}
                       alt=""
                     />
                   </div>
                   <div className="flex justify-between mx-3 my-2">
                     <h1 className="font-bold">Kirini</h1>
                     <CustomizedRating />
                   </div>
                   <div className="flex justify-between mx-3 mb-5">
                     Price ₹100
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                   <div>
                     <img
                       className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                       src={img23}
                       alt=""
                     />
                   </div>
                   <div className="flex justify-between mx-3 my-2">
                     <h1 className="font-bold">Lemon</h1>
                     <CustomizedRating />
                   </div>
                   <div className="flex justify-between mx-3 mb-5">
                     Price ₹100
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                   <div>
                     <img
                       className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                       src={img24}
                       alt=""
                     />
                   </div>
                   <div className="flex justify-between mx-3 my-2">
                     <h1 className="font-bold">Mathulai</h1>
                     <CustomizedRating />
                   </div>
                   <div className="flex justify-between mx-3 mb-5">
                     Price ₹100
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                   <div>
                     <img
                       className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                       src={img25}
                       alt=""
                     />
                   </div>
                   <div className="flex justify-between mx-3 my-2">
                     <h1 className="font-bold">Orange</h1>
                     <CustomizedRating />
                   </div>
                   <div className="flex justify-between mx-3 mb-5">
                     Price ₹100
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                   <div>
                     <img
                       className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                       src={img26}
                       alt=""
                     />
                   </div>
                   <div className="flex justify-between mx-3 my-2">
                     <h1 className="font-bold">Rosemilk</h1>
                     <CustomizedRating />
                   </div>
                   <div className="flex justify-between mx-3 mb-5">
                     Price ₹100
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                   <div>
                     <img
                       className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                       src={img27}
                       alt=""
                     />
                   </div>
         
                   <div className="flex justify-between mx-3 my-2">
                     <h1 className="font-bold">Sathukudi</h1>
                     <CustomizedRating />
                   </div>
                   <div className="flex justify-between mx-3 mb-5">
                     Price ₹100
                     <CustomizedDialogs/>
                   </div>
                 </div>
         
                 <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                   <div>
                     <img
                       className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                       src={img28}
                       alt=""
                     />
                   </div>
                   <div className="flex justify-between mx-3 my-2">
                     <h1 className="font-bold font-3xl">Watermelon</h1>
                     <CustomizedRating />
                   </div>
                   <div className="flex justify-between mx-3 mb-5">
                     Price ₹100
                     <CustomizedDialogs/>
                   </div>
                 </div>
                 </div>
          {/* icecream */}
          
          <div><h1 className="font-bold text-3xl text-center mt-5 ">ICECREAM ITEMS</h1></div>

              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 mt-10 mb-10 gap-5 xl:grid-cols-4 justify-around">
                  
                  <div className="bg-gray-100 hover:scale-105 scale-100 duration-200   w-full rounded-2xl">
                    <div>
                      <img
                        className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                        src={img29}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-between mx-3 my-2">
                      <h1 className="font-bold"> Vennila</h1>
                      <CustomizedRating />
                    </div>
                    <div className="flex justify-between mx-3 mb-5">
                      Price ₹100
                      <CustomizedDialogs/>
                    </div>
                  </div>
          
                  <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                    <div>
                      <img
                        className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                        src={img30}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-between mx-3 my-2">
                      <h1 className="font-bold">Chocolate</h1>
                      <CustomizedRating />
                    </div>
                    <div className="flex justify-between mx-3 mb-5">
                      Price ₹100
                      <CustomizedDialogs/>
                    </div>
                  </div>
          
                  <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                    <div>
                      <img
                        className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                        src={img31}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-between mx-3 my-2">
                      <h1 className="font-bold">Blackcurrent</h1>
                      <CustomizedRating />
                    </div>
                    <div className="flex justify-between mx-3 mb-5">
                      Price ₹100
                      <CustomizedDialogs/>
                    </div>
                  </div>
          
                  <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                    <div>
                      <img
                        className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                        src={img32}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-between mx-3 my-2">
                      <h1 className="font-bold">Butterscotch</h1>
                      <CustomizedRating />
                    </div>
                    <div className="flex justify-between mx-3 mb-5">
                      Price ₹100
                      <CustomizedDialogs/>
                    </div>
                  </div>
          
                  <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                    <div>
                      <img
                        className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                        src={img33}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-between mx-3 my-2">
                      <h1 className="font-bold">Nuts</h1>
                      <CustomizedRating />
                    </div>
                    <div className="flex justify-between mx-3 mb-5">
                      Price ₹100
                      <CustomizedDialogs/>
                    </div>
                  </div>
          
                  <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                    <div>
                      <img
                        className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                        src={img34}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-between mx-3 my-2">
                      <h1 className="font-bold">Pinapple</h1>
                      <CustomizedRating />
                    </div>
                    <div className="flex justify-between mx-3 mb-5">
                      Price ₹100
                      <CustomizedDialogs/>
                    </div>
                  </div>
          
                  <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                    <div>
                      <img
                        className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                        src={img35}
                        alt=""
                      />
                    </div>
          
                    <div className="flex justify-between mx-3 my-2">
                      <h1 className="font-bold">Pista</h1>
                      <CustomizedRating />
                    </div>
                    <div className="flex justify-between mx-3 mb-5">
                      Price ₹100
                      <CustomizedDialogs/>
                    </div>
                  </div>
          
                  <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                    <div>
                      <img
                        className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                        src={img36}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-between mx-3 my-2">
                      <h1 className="font-bold font-3xl">strawberry</h1>
                      <CustomizedRating />
                    </div>
                    <div className="flex justify-between mx-3 mb-5">
                      Price ₹100
                      <CustomizedDialogs/>
                    </div>
                  </div>
          
              </div>
           {/* mojitos */}
           
           <div><h1 className="font-bold text-3xl text-center mt-5 ">MOJITOS</h1></div>

               <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 mt-10 mb-10 gap-5 xl:grid-cols-4 justify-around">
                   
                   <div className="bg-gray-100 hover:scale-105 scale-100 duration-200   w-full rounded-2xl">
                     <div>
                       <img
                         className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                         src={img37}
                         alt=""
                       />
                     </div>
                     <div className="flex justify-between mx-3 my-2">
                       <h1 className="font-bold">Blackcurrent</h1>
                       <CustomizedRating />
                     </div>
                     <div className="flex justify-between mx-3 mb-5">
                       Price ₹100
                       <CustomizedDialogs/>
                     </div>
                   </div>
           
                   <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                     <div>
                       <img
                         className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                         src={img38}
                         alt=""
                       />
                     </div>
                     <div className="flex justify-between mx-3 my-2">
                       <h1 className="font-bold">Bluesea</h1>
                       <CustomizedRating />
                     </div>
                     <div className="flex justify-between mx-3 mb-5">
                       Price ₹100
                       <CustomizedDialogs/>
                     </div>
                   </div>
           
                   <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                     <div>
                       <img
                         className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                         src={img39}
                         alt=""
                       />
                     </div>
                     <div className="flex justify-between mx-3 my-2">
                       <h1 className="font-bold">Greenapple</h1>
                       <CustomizedRating />
                     </div>
                     <div className="flex justify-between mx-3 mb-5">
                       Price ₹100
                       <CustomizedDialogs/>
                     </div>
                   </div>
           
                   <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                     <div>
                       <img
                         className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                         src={img40}
                         alt=""
                       />
                     </div>
                     <div className="flex justify-between mx-3 my-2">
                       <h1 className="font-bold">Lime with mint</h1>
                       <CustomizedRating />
                     </div>
                     <div className="flex justify-between mx-3 mb-5">
                       Price ₹100
                       <CustomizedDialogs/>
                     </div>
                   </div>
           
                   <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                     <div>
                       <img
                         className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                         src={img41}
                         alt=""
                       />
                     </div>
                     <div className="flex justify-between mx-3 my-2">
                       <h1 className="font-bold">Pinapple</h1>
                       <CustomizedRating />
                     </div>
                     <div className="flex justify-between mx-3 mb-5">
                       Price ₹100
                       <CustomizedDialogs/>
                     </div>
                   </div>
           
                   <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                     <div>
                       <img
                         className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                         src={img42}
                         alt=""
                       />
                     </div>
                     <div className="flex justify-between mx-3 my-2">
                       <h1 className="font-bold">Strawberry</h1>
                       <CustomizedRating />
                     </div>
                     <div className="flex justify-between mx-3 mb-5">
                       Price ₹100
                       <CustomizedDialogs/>
                     </div>
                   </div>
           
                   <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                     <div>
                       <img
                         className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                         src={img43}
                         alt=""
                       />
                     </div>
           
                     <div className="flex justify-between mx-3 my-2">
                       <h1 className="font-bold">Apple</h1>
                       <CustomizedRating />
                     </div>
                     <div className="flex justify-between mx-3 mb-5">
                       Price ₹100
                       <CustomizedDialogs/>
                     </div>
                   </div>
           
                   <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                     <div>
                       <img
                         className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                         src={img44}
                         alt=""
                       />
                     </div>
                     <div className="flex justify-between mx-3 my-2">
                       <h1 className="font-bold font-3xl">Blueberry</h1>
                       <CustomizedRating />
                     </div>
                     <div className="flex justify-between mx-3 mb-5">
                       Price ₹100
                       <CustomizedDialogs/>
                     </div>
                   </div>
           
               </div>
               {/* milkshake */}

               <div><h1 className="font-bold text-3xl text-center mt-5 ">MILKSHAKES</h1></div>

                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 mt-10 mb-10 gap-5 xl:grid-cols-4 justify-around">
                       <div className="bg-gray-100 hover:scale-105 scale-100 duration-200   w-full rounded-2xl ">
                         <div>
                           <img
                             className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                             src={img45}
                             alt="Sandwich"
                           />
                         </div>
                         <div className="flex justify-between mx-3 my-2">
                           <h1 className="font-bold">Oreo </h1>
                           <CustomizedRating />
                         </div>
                         <div className="flex justify-between mx-3 mb-5">
                           Price ₹100
                           <CustomizedDialogs />
                         </div>
                       </div>
                       
                       <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                         <div>
                           <img
                             className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                             src={img46}
                             alt="Burger"
                           />
                         </div>
                         <div className="flex justify-between mx-3 my-2">
                           <h1 className="font-bold">Blackcurrent</h1>
                           <CustomizedRating />
                         </div>
                         <div className="flex justify-between mx-3 mb-5">
                           Price ₹100
                           <CustomizedDialogs/>
                         </div>
                       </div>
               
                       <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                         <div>
                           <img
                             className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                             src={img47}
                             alt="French Fries"
                           />
                         </div>
                         <div className="flex justify-between mx-3 my-2">
                           <h1 className="font-bold">Butterscotch</h1>
                           <CustomizedRating />
                         </div>
                         <div className="flex justify-between mx-3 mb-5">
                           Price ₹100
                           <CustomizedDialogs/>
                         </div>
                       </div>
               
                       <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                         <div>
                           <img
                             className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                             src={img48}
                             alt="Sandwich"
                           />
                         </div>
                         <div className="flex justify-between mx-3 my-2">
                           <h1 className="font-bold">Chocolate</h1>
                           <CustomizedRating />
                         </div>
                         <div className="flex justify-between mx-3 mb-5">
                           Price ₹100
                           <CustomizedDialogs/>
                         </div>
                       </div>
               
                       <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                         <div>
                           <img
                             className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                             src={img49}
                             alt="Burger"
                           />
                         </div>
                         <div className="flex justify-between mx-3 my-2">
                           <h1 className="font-bold">Nuts Milkshake</h1>
                           <CustomizedRating />
                         </div>
                         <div className="flex justify-between mx-3 mb-5">
                           Price ₹100
                           <CustomizedDialogs/>
                         </div>
                       </div>
               
                       <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                         <div>
                           <img
                             className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                             src={img50}
                             alt="French Fries"
                           />
                         </div>
                         <div className="flex justify-between mx-3 my-2">
                           <h1 className="font-bold">Pinapple</h1>
                           <CustomizedRating />
                         </div>
                         <div className="flex justify-between mx-3 mb-5">
                           Price ₹100
                           <CustomizedDialogs/>
                         </div>
                       </div>
               
                       <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                         <div>
                           <img
                             className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                             src={img51}
                             alt="Burger"
                           />
                         </div>
               
                         <div className="flex justify-between mx-3 my-2">
                           <h1 className="font-bold">Strawberry</h1>
                           <CustomizedRating />
                         </div>
                         <div className="flex justify-between mx-3 mb-5">
                           Price ₹100
                           <CustomizedDialogs/>
                         </div>
                       </div>
               
                       <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
                         <div>
                           <img
                             className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
                             src={img52}
                             alt="French Fries"
                           />
                         </div>
                         <div className="flex justify-between mx-3 my-2">
                           <h1 className="font-bold font-3xl">Vennila</h1>
                           <CustomizedRating />
                         </div>
                         <div className="flex justify-between mx-3 mb-5">
                           Price ₹100
                           <CustomizedDialogs/>
                         </div>
                       </div>
                     </div>
            
      
    </div>
  )
}

export default Menu
