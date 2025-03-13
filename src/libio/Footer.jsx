import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./card/Socialicons";
import img1 from '../assets/cardimg/mainlogo.png'

 

const CollaptopsibleSection = ({ title, sectionId, content, openSection, toggleSection }) => {
  
  

  return <div className="py-2">
  <button
    onClick={() => toggleSection(sectionId)}
    className="flex justify-between w-full hover:text-gray-200 focus:outline-none"
    aria-expanded={openSection === sectionId}
    aria-controls={`${sectionId}-content`}
  >
    <span>{title}</span>
    <span
      className={`transform transition-transform ${
        openSection === sectionId ? 'rotate-180' : 'rotate-0'
      }`}
    >
      {openSection === sectionId ? '-' : '+'}
    </span>
  </button>
  <div
    id={`${sectionId}-content`}
    className={`mt-2 overflow-hidden transition-max-height duration-500 ease-in-out ${
      openSection === sectionId ? 'slide-down' : 'slide-up'
    }`}
    style={{
      maxHeight: openSection === sectionId ? '1000px' : '0', // Adjust max-height for animation effect
    }}
  >
    {content}
  </div>
</div>
};


const  Footer = () => {
  const navigate =useNavigate()
  const [openSection, setOpenSection] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <>
      {/* Footer for desktop and larger screens */}
      <footer className="hidden md:block bg-black opacity-300 text-white py-10 font-[Mali] ">
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          {/* Brand Section */}
          <div className="w-full md:w-1/3 mb-8  md:mb-0 rounded-full">
            <img src={img1} alt="" className="w-[100px] rounded-full" />

            <address className="mt-4 not-italic pt-4">
              LIBI'O FOOD COURT, SBI Near, <br />
              IN No.15-1, Annavasal,  Pudukottai, TN IND
            </address>
            <p className="mt-4 font-bold pt-4">VAANGA  LIBI'O LA SAPUDALAM</p>
            <p className="pt-4">
              Sign up to get exclusive offers, the latest Libi'o specials, and
              more!
            </p>
            <form className="mt-4 flex pt-4">
              <input 
                type="email"
                placeholder="Your email address"
                className="w-full md:w-auto px-3 py-2 rounded-l-md text-gray-800 bg-white"
              />
              <button className="bg-orange-600 text-white px-4 py-2 rounded-r-md hover:bg-orange-700">
                Subscribe
              </button>
            </form>
{/*             
            <div className="mt-4 flex space-x-4 pt-4 ">
              {/* social links */}
    <a
        href=""
        className="hover:text-white  hover:translate-y-[-7px] hover:underline"
        target="_blank"
    >
        <i class="fa-brands fa-facebook-f text-xl pr-2"></i>
    </a>
   
    <a
        href="https://www.instagram.com/libi_o_food_court_?igsh=NGVvdGgxeGsxNTBt"
        className="hover:text-gray-200 hover:translate-y-[-7px] hover:underline"
        target="_blank"
        rel="noopener noreferrer"
    >
        <i
            className="fab fa-instagram text-xl pr-2"
            target="_blank"
        ></i>
    </a>
    
    <a
        href="https://youtube.com/@theenipetti?si=I6hbAyl1NoH-4fNQ"
        className="hover:text-gray-200 hover:translate-y-[-7px] hover:underline"
        target="_blank"
    >
        <i className="fab fa-youtube text-xl pr-2"></i>
    </a>
            {/* </div>  */}
            <div className="w-full h-20  px-2 py-4"><Button/></div> 
      

</div>
          {/* Links Section */}
          <div className="w-full md:w-2/3 flex flex-wrap pt-4">
            <div className="w-1/2 md:w-1/3 mb-4">
            <a href="/About" className="hover:underline pt-4">
            <h4 className="text-lg font-semibold uppercase mb-3">About Us</h4>
             </a>
              <ul>
                <li className="pt-1">
                 
                    Our Story
                
                </li>
                <li className="pt-1">
                
                    Careers
                
                </li>
               
               
                <li className="pt-1">
                 
                    Customer Reviews
                  
                </li>
               </ul>
            </div>

            <div className="w-1/2 md:w-1/3 mb-4 ">
            <a href="/contactus" className="hover:underline">  <h4 className="text-lg font-semibold uppercase mb-3">Support</h4></a>
              <ul>
                <li className="pt-1">
                  <a onClick={()=>navigate("/contactus")} className="hover:underline pt-4">
                    Contact Us
                  </a>
                </li>
                
               
               
              </ul>
            </div>

            <div className="w-1/2 md:w-1/3 mb-4">
            <a href="/menu" className="hover:underline"> <h4 className="text-lg font-semibold uppercase mb-3">Menu</h4>   </a>
              <ul>
                <li className="pt-1">
                  
                    Fried Item
                  
                </li>
                <li className="pt-1">
                  
                    snacks
                  
                </li>
                <li className="pt-1">
                 
                   Fresh Juice
                
                </li>
                <li className="pt-1">
                  
                    Mojito
                 
                </li>
                <li className="pt-1">
                 
                    Fried Rice 
                 
                </li>
                <li className="pt-1">
                  
                    Coffee and Tea
                 
                </li>
                <li className="pt-1">
                 
                    Milkshake
                 
                </li>
                <li className="pt-1">
                
                    Ice Creams
                 
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-5 container mx-auto" />
        <div className="">
          <p className="container mx-auto px-4 flex flex-wrap justify-between">
            Burger | Sandwich | Club sandwich | fresh juice
            Milkshake| Ice cream | Sweets & Snacks |
            chicken Rice | Manjuriyan| Gopi Manjuriyan
            juices | Vadai | cookies | Tea and Coffee
            Biscuits | Nagercoil Nendran Chips
          </p>
        </div>
        <div className="bg-white text-gray-500 mt-8 desktop:-mb-7 laptop:-mb-5 py-4 text-center text-sm flex items-center justify-between">
          <div className=" container mx-auto px-4 flex flex-wrap justify-between">
            <p className="text-left ">&copy; 2025 Dynamic Liquids all rights reserved.</p>
            {/* <p className="text-center">Crafted by Dynamic Liquids</p> */}
            <ul className="flex justify-end space-x-10 ">
              <li>
                <a href="#privacy" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#refunds" className="hover:underline">
                  Refunds
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:underline">
                  Shipping
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Footer for mobile screens */}
      <footer className="bg-black text-white text-sm py-6 md:hidden">
        <div className="container mx-auto px-4">
          <CollaptopsibleSection
            title="GET IN TOUCH"
            sectionId="getInTouch"
            openSection={openSection}
            toggleSection={toggleSection}
            content={
              <>
                <img
                  src={img1}
                  alt=""
                  className="w-[60px] mt-2 rounded-full "
                />
                <p className="mt-5"> LIBI'O FOOD COURT, SBI Near, <br />
                IN No.15-1, Annavasal,  Pudukottai, TN IND</p>
                <p className="mt-2"> VAANGA  LIBI'O LA SAPUDALAM</p>
                <p className="mt-2">Sign up to get exclusive offers!</p>
                <form className="mt-3 flex mr-10">
                  <input
                    type="email"
                    placeholder="Your email address" 
                    className="flex-1 p-2 rounded-l-tab  bg-white  px-5 text-white" 
                    />
                  <button className="bg-orange-500 px-4 mr-5 rounded-r-md">
                    Subscribe
                  </button>
                </form>
                {/* social links */}
                {/* <div className="mt-2 flex space-x-4 pt-4">
              <a
                href="https://www.facebook.com/share/p/1BG3RUQMLa/"
                className="hover:text-gray-200  "
                target="_blank"
              >
                <i className="fab fa-facebook-f text-lg pr-2 "></i>
              </a>
             
              <a
                href="https://www.instagram.com/theenipetti?utm_source=qr"
                className="hover:text-gray-200 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-instagram text-lg pr-2"
                  target="_blank"
                ></i>
              </a>
             
              <a
                href="https://youtube.com/@theenipetti?si=I6hbAyl1NoH-4fNQ"
                className="hover:text-gray-200 "
                target="_blank"
              >
                <i className="fab fa-youtube text-lg pr-2"></i>
              </a>
            </div> */}
           <div className="w-full h-20  px-2 py-4"><Button/></div> 
              </>
            }
          />
          {/* links */}
         <CollaptopsibleSection
            title="ABOUT US"
            sectionId="aboutUs"
            openSection={openSection}
            toggleSection={toggleSection}
            content={
              <ul className="mt-2 space-y-2">
              
             <li> <a href="/about" className="hover:underline pt-4"> About us</a></li>
              
              
                <li>
                  
                    Our Story
                 
                </li>
                <li>
                  
                    Careers
                  
                </li>
                
               
                <li>
                  
                   customer Reviews
                  
                </li>
              
              </ul>
            }
          />
         <CollaptopsibleSection
            title="CONTACT US"
            sectionId="support"
            openSection={openSection}
            toggleSection={toggleSection}
            content={
              <ul className="mt-2 space-y-2">
                 <li>
                 <a href="/contactus" className="hover:underline pt-4">
                    Contact Us
                    </a>
                </li>
              </ul>
            }
          />

         <CollaptopsibleSection
            title="Menu"
            sectionId="shop"
            openSection={openSection}
            toggleSection={toggleSection}
            content={
              <ul className="mt-2 space-y-2">
             
               <li>  <a href="/menu" className="hover:underline pt-4"> Menu  </a></li> 
             
               <li>
                 
                 Fresh Juice
                 
                </li>
                <li>
                  
                     Snacks
                 
                </li>
                <li>
                  
                    Fried Items
                  
                </li>
                <li>
                  
                 Mojito
                  
                </li>
                <li>
                 
                   Fried Rice
                  
                </li>
                <li>
                 
                    Coffee and Tea
            
                </li>
                <li>
                 
                    Milkshake
                  
                </li>
                <li>
                  
                   Ice Creams
                  
                </li>
              </ul>
            }
          />
         

          <hr className="my-5" />
          <p>
          Burger | Sandwich | Club sandwich | fresh juice
            Milkshake| Ice cream | Sweets & Snacks |
            chicken Rice | Manjuriyan| Gopi Manjuriyan
            juices | Vadai | cookies | Tea and Coffee
            Biscuits | Nagercoil Nendran Chips
          </p>
        </div>

        <div className="bg-white text-gray-500 mt-8 py-4 text-center text-sm">
          <p>
            Copyright © 2025 Dynamic Liquids all rights reserved.{" "}
            {/* <span className="ml-2">Crafted by Dynamic Liquids</span> */}
          </p>
          <ul className="flex justify-center mt-2 space-x-4">
            <li>
              <a href="#privacy" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="#refunds" className="hover:underline">
                Refunds
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:underline">
                Shipping
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
