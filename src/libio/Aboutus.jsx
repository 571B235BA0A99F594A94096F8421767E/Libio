import React from "react";
import Testimonial from './Testimonials'

function Aboutus() {
  return (
    <div className="   mt-2 container mx-auto  ">
      <div className="z-10 relative ">
        <img
          className=" w-full h-full md:w-full opacity-90 md:h-[700px] rounded-xl "
          src="src/assets/aboutusimg.jpg"
          alt=""
        />
        <h1 className="absolute inset-16  text-4xl md:text-7xl text-white flex justify-center items-center ">
          ABOUT US
        </h1>
      </div>

      <div className=" flex flex-col sm:flex-row gap-8 my-4 md:mt-10 px-4  md:mb-10">
        <div className="border border-amber-600 rounded-2xl w-full sm:w-1/2 h-full   flex flex-col  ">
          <video
            className="rounded-2xl px-2 my-4 "
            controls
            autoPlay={true}
            loop={true}
            playsInline
          >
            <source src=" src\assets\aboutus\video2.mp4" type="video/mp4" />
          </video>
          <p className=" p-4 justify-baseline text-xl font-sans">
            Creating content for a Food Court Restaurants business is an
            exciting journey filled with flavors and experiences waiting to be
            shared. The key is to capture the essence of your diverse culinary
            offerings and present them in a way that tantalizes the taste buds
            of your digital audience. Craft stories around dishes that transport
            customers right into the heart of your food court, making them yearn
            for a taste.Creating content for a Food Court Restaurants business
            is an exciting journey filled with flavors and experiences waiting
            to be shared. The key is to capture the essence of your diverse
            culinary offerings and present them in a way that tantalizes the
            taste buds of your digital audience. Craft stories around dishes
            that transport customers right into the heart of your food court,
            making them yearn for a taste..
          </p>
        </div>

        <div className="border border-amber-600  rounded-2xl w-full sm:w-1/2 h-full  flex flex-col  md:mt-50 ">
          <video
            className="rounded-2xl px-4 my-4 "
            controls
            autoPlay={true}
            loop={true}
            playsInline
          >
            <source src="src\assets\aboutus\video.mp4" type="video/mp4" />
          </video>
          <p className="p-4 justify-baseline text-xl font-sans ">
           
            Highlight the unique ambiance, the variety of cuisines, and the
            passion behind each dish. Utilize vivid descriptions and engaging
            narratives to make every post on social media or your blog a journey
            of culinary discovery. By doing so, you not only showcase your menu
            but also build a connection with food lovers a everywhere, turning
            first-time visitors into loyal patrons.Creating content for a Food
            Court Restaurants business is an exciting journey filled with
            flavors and experiences waiting to be shared. The key is to capture
            the essence of your like adiverse culinary offerings and present
            them in a way that tantalizes the taste buds of your digital
            audience. Craft stories around dishes that transport customers right
            into the heart of your food court, making them yearn for a taste.
          </p>
        </div>
      </div>
       <hr />
      <div className="  flex flex-col justify-center items-center gap-6 ">

        <h1 className="text-2xl font-bold my-10 " >OUR STORY</h1>

        <p className="justify-baseline mx-10 text-xl">
          "At <span className="text-pink-600">LIBI'O FOOD COURT</span>, our story is about bringing the flavors of the
          world together under one roof, creating a vibrant food hub where every
          bite is a journey. Founded by <span className="text-pink-600"> Ligin Dhas and Bigin Dhas</span> , passionate foodies
          with a love for diverse cuisines, we set out to curate a collection of
          unique vendors, each specializing in their own culinary heritage,
          ensuring an authentic and delicious experience for every customer.
          Whether you're craving a quick, comforting meal or a taste of
          something new, our food court is your go-to spot to explore, connect,
          and savor every moment over a shared plate."
        </p>
  
         <div className=" mb-8  w-full justify-items-center  ">
         <div className="px-4 flex flex-col  gap-6  ">
         <div><h1 className=" text-xl  font-semibold" >Diversity:</h1>
          <p>
            Emphasize the variety of cuisines available, showcasing the
            different cultures represented by your vendors.
          </p></div> 
         <div><h1 className=" text-xl  font-semibold">Passion for food:</h1>
          <p>
            Convey the founders' love for food and their dedication to quality
            ingredients and preparation.
          </p></div>
          <div> <h1 className=" text-xl  font-semibold">Community focus:</h1>
          <p>
            Highlight the food court as a place to gather, socialize, and enjoy
            meals with friends and family.
          </p></div>
          <div> <h1 className=" text-xl  font-semibold">Fresh and authentic:</h1>
          <p>
            Stress the commitment to fresh, high-quality ingredients and
            authentic cooking techniques.
          </p></div>
          <div><h1 className=" text-xl  font-semibold">Unique offerings:</h1>
          <p>
            If there are any special dishes or menu items that set your vendors
            apart, mention them.
          
        </p></div>
        </div>
        </div>
      </div>
      <Testimonial/>
    </div>
  );
}

export default Aboutus;
