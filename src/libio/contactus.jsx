import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
// import bgImage from "../assets/aboutus/img12.jpg";

function Contact({scroll}) {

  const[name,setName]=useState('')
  const[phone,setPhone]=useState('')
  const[email,setEmail]=useState('')
  const[message,setMessage]=useState('')

   useEffect(()=>{
       scroll()
     },[])

     const handlesubmit =() =>{
      
      const encodedMessage = encodeURIComponent(`Hello I am ${name}, I need some information ${message}  this is my phone ${phone} number contact me
         or this my  email id ${email} send your information`);
      const whatsappUrl = `https://wa.me/+7904988124?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
      setName('')
      setPhone('')
      setEmail('')
      setMessage('')

    }

  
  return (
    <div className="container mx-auto justify-center items-center grid grid-cols-1 md:grid-cols-2 bg-white gap-10">
      {/* <div className="absolute top-0 w-full h-full">
        <img className="w-full h-full object-cover" src={bgImage} alt="Background" />
      </div> */}

      {/* <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12"> */}
        {/* Left Section */}
        <div className=" space-y-2 mx-4 my-4 ">
          {/* Location */}
          <div className="bg-gray-200 border  flex flex-col justify-center items-center  text-black p-4 gap-2 rounded-xl">
            <h1 className="text-3xl md:text-4xl font-bold">Location</h1>
            <p className="text-center w-[80%] md:w-[90%] lg:w-[80%]">
              8, SBI NEAR, VIRALIMALAI ROAD ANNAVASAL-622101 Pudukkottai, Tamil Nadu 622101
            </p>
          </div>

          {/* Phone Numbers */}
          <div className="bg-gray-200 border  flex flex-col justify-center items-center p-2 text-black gap-2 rounded-xl">
            <h1 className="text-3xl md:text-4xl font-semibold">Phone</h1>
            <p className="text-lg md:text-xl">+918248966014</p>
            <p className="text-lg md:text-xl">7904988124</p>
          </div>

          {/* Working Hours */}
          <div className="bg-gray-200 border backdrop-blur flex flex-col justify-center items-center  text-black p-4 gap-2 rounded-xl">
            <h1 className="text-3xl md:text-4xl font-bold">Hours</h1>
            <p className="text-xl md:text-2xl">Monday-Saturday</p>
            <p className="text-lg md:text-xl">9 AM - 9 PM</p>
            <p className="text-xl md:text-2xl">Sunday</p>
            <p className="text-lg md:text-xl">10 AM - 9 PM</p>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className=" border rounded-2xl mx-4 my-6">
          <form onSubmit={handlesubmit}
            className="bg-gray-200 flex flex-col justify-between gap-6 rounded-2xl w-full  p-6 mx-auto"
      
           
          >
            <label htmlFor="contact-form" className="font-bold text-2xl text-center">
              CONTACT US
            </label>

            <TextField className="overflow-x-hidden"
              id="outlined-basic"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              color="secondary"
              variant="standard"
              fullWidth
            />

            <TextField
              id="outlined-basic"
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              color="secondary"
              variant="standard"
              fullWidth
            />

            <TextField
              id="outlined-basic"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
              color="secondary"
              fullWidth
            />

            <TextField
              id="outlined-multiline-static"
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={4}
              color="secondary"
              defaultValue=""
              fullWidth
            />

            <button className="border mx-auto w-[200px] px-2 py-2 rounded-4xl hover:bg-[#d44ae0] border-white hover:text-white" type="submit">
              Send Message
            </button>
          </form>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Contact;
