import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import img1 from '../assets/cardimg/mainlogo.png'
 import img from '../assets/cardimg/menu icon.png'
 const Navbar = () => {

  const navigate = useNavigate();

  const nextpages= () =>{
    navigate('/nextpage')
  } 


   const [isOpen, setIsOpen] = useState(false);
 
   const handleToggle = () => {
     setIsOpen(!isOpen);
     console.log(isOpen ? "Opening" : "Closing");
   };
  

   const handleopen = () => {};
 
   return (
     <div>
        {/* Nav bar */}
 <div className="bg-black text-white  top-0 flex items-center  ">
 <orderform />
 {/* Logo */}
 <div className="ml-5 mt-2   w-35 h-20">
   
     <img
       className="flex justify-center rounded-full mt-2 "
       src={img1}
       alt=""
     />

 </div >
 <div className="flex ml-5 w-full"><label className="flex  font-bold text-xl mx-5 my-4">
   LIBI'O 
 </label></div>
 {/* Menu */}
 <ol className="w-full hidden md:flex justify-end font-semibold text-xl gap-[50px] mr-15">
   <li  onClick={()=>{navigate('/')}} className="hover:cursor-pointer hover:underline hover:text-blue-500">Home</li>
   <li onClick={()=>{navigate('/menu')}} className="hover:cursor-pointer  hover:underline hover:text-blue-500">Menu</li>
   <li onClick={()=>{navigate('/About')}} className="hover:cursor-pointer  hover:underline hover:text-blue-500">AboutUs</li>
   <li onClick={()=>{navigate('/contactus')}}className="hover:cursor-pointer  hover:underline hover:text-blue-500">Contactus</li>
 </ol>
 <button onClick={nextpages} className=" hidden md:block  border-1 px-8 py-2 mr-10 rounded-full bg-white text-black hover:bg-blue-400 hover:text-white border-gray-400">
  Buy 
 </button>
 <div className="w-full block flex justify-end md:hidden">
   <button onClick={handleToggle}>
     <img
       className="w-10 h-10 mr-5 rounded-full"
       src={img}
       alt="Menu"
     />
   </button>
 </div>
</div>

{/* Mobile nav bar */}
{isOpen && (
 <div className="block xl:hidden ">
   <ol className="flex flex-col gap-6 justify-center items-center mt-5 text-xl">
     <li onClick={()=>{navigate('/')}} className="focus:cursor-pointer hover:underline hover:text-blue-500">HOME</li>
     <li  onClick={()=>{navigate('/menu')}} className="focus:cursor-pointer hover:underline hover:text-blue-500">
  MENU
     </li>
     <li onClick={()=>{navigate('/About')}} className="focus:cursor-pointer hover:underline hover:text-blue-500">
       ABOUT US
     </li>
     <li onClick={()=>{navigate('/contactus')}} className="focus:cursor-pointer hover:underline hover:text-blue-500">
     CONTACT US
     </li>
   </ol>
   <div className=" flex justify-center items-center  my-5 ">
     
     <button onClick={nextpages} className="border-2 px-8 py-2  rounded-full bg-white text-black border-gray-400 
      p-x-2 p-y-1  hover:bg-blue-400 hover:text-white">
       BUY </button>
   </div>
 </div>
)}</div>
)
}
export default Navbar;
